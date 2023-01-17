<template>
<div id="new-cli" class="container-fluid">
  <div class="img">
    <img class="rounded w-36 h-36" src="../assets/bitme/banner.png" alt="Extra large avatar"/>
  </div>
  <div @click="$refs.cmd.focus();">
    <div ref="terminal" id="container">
      <div v-if="banner" id="banner">
        <h4 v-if="banner.header" style="letter-spacing: 4px">{{banner.header}}
          <b>
          <span>{{banner.Amir.En}}</span>
          <span>{{banner.Amir.Arb}}</span>
          </b>
        </h4>
        <p v-if="banner.subHeader">{{banner.subHeader}}</p>
        <p v-if="banner.helpHeader">{{banner.helpHeader}}</p>
      </div>
      <output ref="output"></output>
      <div id="input-line" class="input-line">
        <div class="prompt">
          <span v-if="banner.emoji.earth && !showemoji">{{banner.emoji.earth}}</span>
          <span v-if="banner.emoji.gemini && showemoji">{{banner.emoji.gemini}}</span><b>|</b>
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
          header: "Hi am Nindenkawe ",
          subHeader: "Welcome to my portfolio web-app🔥",
          helpHeader: 'Enter "help" for a command list.',
          Amir: {
            En: "Amir",
            Arb: "اَمير",
            time: 750
          },
          emoji: {
            earth: "🌍",
            gemini: "♊",
            time: 750
          },
          sign: "nindenkawe@Portfolio $",
          img: {
            align: "left",
            link: `amiritius@gmail.com`,
            width: 100,
            height: 100,
            Image: ""
          }
        };
      }
    },
    commands: [
        { name: "info",
          desc: "Show information about this terminal",
          get() {
            return `<p>Hi am nindenkawe اَمير. welcome to my portfolio website.</p>`;
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
      Portfoliodata:[],
      showemoji: true,
      value: "",
      history_: [],
      histpos_: 0,
      histtemp_: 0,
    };
  },
  computed: {
    allcommands() {
      var tab = [
        { name: "help", desc: "command list" },
        { name: "clear", desc: "Clear all output" },
        { name: "Aboutme", desc: "Small bio, also feel free to navigate my Resume and connect with me on socials"}
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
};
</script>

<style lang="css" scoped>
  #new-cli{
      position: absolute;
      width: 1020px;
      height: 497px;
      left: 328px;
      top: 120px;
      border-radius: 10px;
      border: 2px solid black;
      color: #ccd6f6;
      background-color: black;
      font-size: 11pt;
      font-family: Inconsolata, monospace;
      padding: 0.5em 1.5em 1em 1em;
      overflow: scroll;
      box-shadow: 2px 2px 5px black;
  }

#container output {
  clear: both;
  width: 100%;
  color: inherit;
}
#banner {
  margin-bottom: 2em;
  text-align: center;
  top: auto;
}
.img {
  border: 2px solid black;
  width: 100px;
  height: auto;
}
.input-line {
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: -webkit-box;
  box-orient: horizontal;
  box-align: stretch;
  clear: both;
}

.input-line > div:nth-child(2) {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
}
.prompt {
  white-space: nowrap;
  color: #ccd6f6;
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
</style>
