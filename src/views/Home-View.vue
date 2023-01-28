<template>
  <div class="container mx-auto px-4 flex-col min-h-screen">
    <Logo1 />
    <!-- <rackserver/> -->
    <newcli :commands="commands" @shell_output="prompt" :shell_input="send_to_terminal"/>
    <Footer1/>
  </div>
</template>

<script>
  import Logo1 from '../components/Lo-go.vue'
  import Footer1 from '../components/Foo-ter.vue'
  import newcli from '../components/new-cli.vue'
/*   import rackserver from '../components/rack-server' */

export default {
    name: 'Home-View',
    components: { 
      Logo1, Footer1, newcli,/* rackserver */
    },
    data() {
    return {
      Portfoliodata:[],
      Memoji1: null,
      commands: null,
      send_to_terminal: null
      
    };

  },
    methods: {
    prompt(value) {
      if (value.trim() === "Aboutme") {
        this.send_to_terminal = `
  Hi am Nindenkawe اَمير. welcome to my portfolio website. I'm an Aspiring data analyst,
  backend web developer, and this portolio web app is designed to work as my note book here you 
  get to see how i have decided to intergrate what i have learnt and how i think i can use it.`;
      } 
      else {
        this.send_to_terminal = `'${value}' is not recognized as an internal command or external,
          executable program or a batch file`;
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  height: 300px;
  display: block;
  background-color: black;
  background-image: url("https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?w=900&t=st=1674208954~exp=1674209554~hmac=b0e1ef55f87573ee4b86b682194e0540592939ffc8dc64979806978c4c1eb21d");
  background-size: 40%;
  font-family: 'Space Mono', monospace;
}
section{
  width: 556px;
  height: 468;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>