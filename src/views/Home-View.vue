<template>
  <Logo1 />
  <rackserver />
  <newcli :commands="commands" @shell_output="prompt" :shell_input="send_to_terminal"/>
  <Footer1 :Memoji="Memoji1"/>
</template>

<script>
  import Logo1 from '../components/Lo-go.vue'
  import Footer1 from '../components/Foo-ter.vue'
  import newcli from '../components/new-cli.vue'
  import rackserver from '../components/rack-server'

export default {
    name: 'Home-View',
    components: { 
      Logo1, Footer1, newcli,rackserver
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
  backend web developer, comfortable in languages like Python, JavaScript, with a broad 
  understanding of Django, django_rest framework, and VueJs  plus some favorite web-dev technologies 
  like, Firebase, and Docker. Other skills I acquired during my time at MTN data solutions department 
  as a data and UX support consultant include ADB, USSD, Java Card, GSM and its network spectrum, Mobile and web-apps literacy. 
  I’m hardworking, a quick learner currently pursuing Google’s Data Analytics Certificate, highly organized and a great team player.
  `;
      } 
      else {
        this.send_to_terminal = `'${value}' is not recognized as an internal command or external,
          executable program or a batch file`;
      }
    }
  }
}
</script>