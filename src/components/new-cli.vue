<template>
  <div class="cli">
    <v-shell
    :banner="banner"
    :shell_input="send_to_terminal"
    :commands="commands"
    @shell_output="prompt"
  ></v-shell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Vue Shell (CodeSandBox)",
        subHeader: "Shell is power just enjoy 🔥",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "☠️",
          second: "💀",
          time: 750
        },
        sign: `VueShell $`,
        img: {
          align: "left",
          link: "https://i.ibb.co/MnVpyfF/logo.png",
          width: 100,
          height: 100
        }
      },
      commands: [
        {
          name: "info",
          get() {
            return `<p>With ❤️ By Salah Bentayeb @halasproject.</p>`;
          }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        }
      ]
    };
  },
  methods: {
    prompt(value) {
      if (value.trim() === "ifconfig") {
        this.send_to_terminal = `
    Wi-Fi wireless network card:
        
    Local link IPv6 address. . . : fe80 :: 340f: 6f02: 41e9: 477b% 24
    IPv4 address. . . . . . . . .: 192.168.1.65
    Subnet mask. . . . . . . . . : 255.255.255.0
    Default Gateway. . . . . . . : 192.168.1.1`;
      } else {
        this.send_to_terminal = `'${value}' is not recognized as an internal command or external,
an executable program or a batch file`;
      }
    }
  }
};
</script>

<style>
.cli{
  position: relative;
}
</style>