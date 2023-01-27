<template>
  <section class="my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <div class="text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg shadow-md">
      <div class="float-none" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <img class="rounded w-36 h-36" src="../assets/bitme/banner.png" alt="Extra large avatar">
      </div>
      <h4 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white" v-if="banner.header" style="letter-spacing: 4px">
      {{banner.header}}
      <b>
      <span>{{banner.Amir.En}}</span>
      <span>{{banner.Amir.Arb}}</span>
      </b>
      </h4>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{banner.subHeader}}</p>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{banner.helpHeader}}</p>
  
      <div id="input-line">
<!--    <div class="prompt">
          <span v-if="banner.emoji.earth && !showemoji">{{banner.emoji.earth}}</span>
          <span v-if="banner.emoji.gemini && showemoji">{{banner.emoji.gemini}}</span>|
          <h4 href="/"><div>{{banner.sign ? banner.sign : '>>'}}</div></h4>
        </div> -->
      </div>
      <div>
        <p class="flex inset-x-0 bottom-0 h-16">
        <input
          v-model="value"
          ref="cmd"
          @keydown.enter="cmd_enter($event)"
          @keydown.up="history_up()"
          @keydown.down="history_down()"
          @keydown.tab="cmd_tab($event)"
          class=" placeholder:italic placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
          dark:text-white " required placeholder="try help to list..." type="text" name="search"
          autofocus
        />
        <output class="overflow-auto" ref="output"></output>
        </p>
      </div>
    </div>
  </section>
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
          header: "Hi am",
          subHeader: "Welcome to my portfolio page(SPA)",
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