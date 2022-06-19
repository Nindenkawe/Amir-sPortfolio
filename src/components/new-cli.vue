<template>
<div class="new-cli">
  <div @click="$refs.cmd.focus();">
    <div ref="terminal" id="container">
      <div v-if="banner" id="banner">
        <p>
          <img
            v-if="banner.img"
            :align="banner.img.align ? banner.img.align : 'left'"
            :src="banner.img.link ? banner.img.link : '@/banner.png'"
            :width="banner.img.width ? banner.img.width : '100px'"
            :height="banner.img.height ? banner.img.height : '100px'"
          />
        </p>
        <h2 v-if="banner.header" style="letter-spacing: 4px">{{banner.header}}</h2>
        <p v-if="banner.subHeader">{{banner.subHeader}}</p>
        <p v-if="banner.helpHeader">{{banner.helpHeader}}</p>
        <p></p>
      </div>
      <output ref="output"></output>
      <div id="input-line" class="input-line">
        <div class="prompt">
          <div v-if="banner.emoji.first && showemoji">({{banner.emoji.first}})</div>
          <div v-if="banner.emoji.second && !showemoji">({{banner.emoji.second}})</div>
          <div>{{banner.sign ? banner.sign : '>>'}}</div>
        </div>

        <input
          v-model="value"
          ref="cmd"
          @keydown.enter="cmd_enter($event)"
          @keydown.up="history_up()"
          @keydown.down="history_down()"
          @keydown.tab="cmd_tab($event)"
          class="cmdline"
          autofocus
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    shell_input: {
      required: false
    },
    banner: {
      type: Object,
      required: false,
      default: () => {
        return {
          header: "Hi am Nindenkawe اَمير",
          subHeader: "Welcome to my portfolio web-app🔥",
          helpHeader: 'Enter "help" for more commands & scrips.',
          emoji: {
            first: "🌙",
            second: "🔆",
            time: 750
          },
          sign: "nindenkawe $",
          img: {
            align: "left",
            link: `@./assets/bitme/banner.png`,
            width: 100,
            height: 100
          }
        };
      }
    },
    commands: [
        { name: "info",
          desc: "Show information about this terminal",
          get() {
            return `<p>Hi am nindenkawe اَمير. welcome to my portfolio website. 
I’m a back-end Web developer, Debugger, & a Technology enthusias, fluent in languages like Python, 
JavaScript, with a broad understanding of Django, django_rest frameworks, and VueJs. Other skills I acquired during my time in the telecom industry especially 
in MTN data solutions department as a data and UX support consultant include ADB, GSM and its network spectrum, Mobile and web-apps literacy. I’m hardworking, a quick learner, highly organized and a great team player. 
For more about me check my socials.</p>`;
        }
        },
        {
          name: "uname",
          desc: "Show the current terminal name",
          get() {
            return navigator.appVersion;
          }
        }
      ]
  },
  data() {
    return {
      showemoji: true,
      value: "",
      history_: [],
      histpos_: 0,
      histtemp_: 0
    };
  },
  computed: {
    allcommands() {
      var tab = [
        { name: "help", desc: "Show all the commands that are available" },
        { name: "clear", desc: "Clear the terminal of all output" },
        { name: "uname", desc: "divice info"}
      ];
      if (this.commands) {
        this.commands.forEach(({ name, desc }) => {
          tab.push({ name, desc });
        });
      }
      return tab;
    }
  },
  watch: {
    shell_input(val) {
      this.output(val);
      this.$parent.send_to_terminal = "";
    }
  },
  methods: {
    history_up() {
      if (this.history_.length) {
        if (this.history_[this.histpos_]) {
          this.history_[this.histpos_] = this.value;
        } else {
          this.histtemp_ = this.value;
        }
      }
      // up 38
      this.histpos_--;
      if (this.histpos_ < 0) {
        this.histpos_ = 0;
      }
      this.value = this.history_[this.histpos_]
        ? this.history_[this.histpos_]
        : this.histtemp_;
    },
    history_down() {
      if (this.history_.length) {
        if (this.history_[this.histpos_]) {
          this.history_[this.histpos_] = this.value;
        } else {
          this.histtemp_ = this.value;
        }
      }
      this.histpos_++;
      if (this.histpos_ > this.history_.length) {
        this.histpos_ = this.history_.length;
      }
      this.value = this.history_[this.histpos_]
        ? this.history_[this.histpos_]
        : this.histtemp_;
    },
    cmd_tab(e) {
      e.preventDefault();
    },
    cmd_enter() {
      if (this.value) {
        this.history_[this.history_.length] = this.value;
        this.histpos_ = this.history_.length;
      }
      //   Duplicate current input and append to output section.
      var line = this.$refs.cmd.parentNode.cloneNode(true);
      line.removeAttribute("id");
      line.classList.add("line");
      var input = line.querySelector("input.cmdline");
      input.autofocus = false;
      input.readOnly = true;
      this.$refs.output.appendChild(line);
      if (this.value && this.value.trim()) {
        var args = this.value.split(" ").filter(function(val) {
          return val;
        });
        var cmd = args[0].toLowerCase();
        args = args.splice(1); // Remove cmd from arg list.
      }
      if (cmd == "clear") {
        this.$refs.output.innerHTML = "";
        this.value = "";
      } else if (cmd == "help") {
        var commandsList = this.allcommands.map(({ name, desc}) => {
          if (desc) {
            return `${name}: ${desc}`;
          }
          return name;
        });
        this.output(
            '<div class="ls-files">' + commandsList.join("<br>") + "</div>"
        );
      } else {
        if (this.commands) {
          this.commands.forEach(a => {
            if (cmd == a.name) {
              this.output(a.get());
              return;
            }
          });
        }
        if (this.value.trim() != "") {
          this.$emit("shell_output", this.value);
        }
        this.value = "";
      }
      // Clear/setup line for next input.
    },
    output(html) {
      this.$refs.output.insertAdjacentHTML(
        "beforeEnd",
        "<pre>" + html + "</pre>"
      );
      this.value = "";
    }
  },
  mounted() {
    if (
      this.banner.emoji.first &&
      this.banner.emoji.second &&
      this.banner.emoji.time
    ) {
      setInterval(() => {
        this.showemoji = !this.showemoji;
      }, this.banner.emoji.time);
    }
  }
};
</script>

<style lang="css" scoped>
  .new-cli{
      position: relative;
      width: 1086px;
      height: 497px;
      left: 238px;
      top: 168px;
      border-radius: 10px;
      border: 2px solid darkgreen;
      color: gold;
      background-color: black;
      font-size: 11pt;
      font-family: Inconsolata, monospace;
      padding: 0.5em 1.5em 1em 1em;
  }

#container output {
  clear: both;
  width: 100%;
  color: #ffff;
}
#banner {
  margin-bottom: 2em;
}
img {
  margin-right: 10px;
  border: 2px solid darkgreen;
  border-radius: 10px;
}
.input-line {
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  clear: both;
}
p{
  border-radius: 10px;
}
.input-line > div:nth-child(2) {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
}
.prompt {
  white-space: nowrap;
  color: #3a8b17;
  margin-right: 7px;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  box-pack: center;
  box-orient: vertical;
  user-select: none;
}
.cmdline {
  outline: none;
  background-color: transparent;
  margin: 0;
  width: 100%;
  font: inherit;
  border: none;
  color: inherit;
}
.ls-files {
  height: 45px;
  column-width: 100px;
}
</style>