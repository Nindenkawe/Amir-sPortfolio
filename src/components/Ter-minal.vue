<template>
<div class= "terminal">
    <!-- <div class= "nav-icones">
        <div class="ellipse-1"><svg src='./assets/close.png'/></div>
        <div class="ellipse-2"><svg src='./assets/subtract.png'/></div>
        <div class="ellipse-3"><svg src='./assets/subtract.png'/></div>
    </div>
    <h4 class="userId">{{userId}}</h4>
    <div>
        <p class="resume-content">{{resumecontent}}</p>
        <div class="profile-picture"></div>
    </div> -->
    <div class="cli">
        <v-shell
            :banner="banner"
            :shell_input="send_to_terminal"
            :commands="commands"
            @shell_output="prompt">
        </v-shell>
        <v-shell :banner="banner"

        ></v-shell>
  </div>
</div>
</template>
<script>
export default {
    data() {
        return {
        userId: 'Nindenkawe:[/Portfolio]#',
        resumecontent: 'Hi am Nindenkawe اَمير welcome to my portfolio website.',
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

<style scoped>
    .terminal{
        position: relative;
        width: 1086px;
        height: 497px;
        left: 238px;
        top: 168px;
        border-radius: 10px;
    }
    .nav-icones{
        position: absolute;
        left: 1.29%;
        right: 91.34%;
        top: 3.82%;
        bottom: 92.15%;
    }
    .ellipse-1{
        position: absolute;
        left: 1.29%;
        right: 96.87%;
        top: 3.82%;
        bottom: 92.15%;
        background: darkred; 
    }
    .ellipse-2{
        position: absolute;
        left: 4.05%;
        right: 94.11%;
        top: 3.82%;
        bottom: 92.15%;
        background: darkgoldenrod;
    }
    .ellipse-3{
        position: absolute;
        left: 6.81%;
        right: 91.34%;
        top: 3.82%;
        bottom: 92.15%;
        background: darkgreen;
    }
    .userId{
        position: absolute;
        left: -10.29%;
        right: 63.35%;
        top: 14.08%;
        bottom: 71.83%;
        letter-spacing : 6;
        line-height: 56px;
        min-height: 56px;
        white-space: nowrap
    }
    .resume-content{
        position: absolute;
        left: 0%;
        right: 0%;
        top: 25.68%;
        bottom: 0%;
    }
    .profile-picture{
        position: absolute;
        left: 75.43%;
        right: 1.38%;
        top: 0%;
        bottom: 68.79%;
        border-radius: 15px;
    }
</style>