<template>
  <Logo1 />
  <rackserver />
  <Menu1 :data="Portfoliodata" />
  <Footer1 :Memoji="Memoji1"/>
  <newcli :commands="commands" @shell_output="prompt" :shell_input="send_to_terminal"/>
</template>

<script>
  import Menu1 from './components/Me-nu.vue'
  import Logo1 from './components/Lo-go.vue'
  import Footer1 from './components/Foo-ter.vue'
  import newcli from './components/new-cli.vue'
  import rackserver from './components/rack-server'

export default {
    name: 'App',
    components: { 
      Menu1, Logo1, Footer1, newcli,rackserver
    },
    data() {
    return {
      Portfoliodata:[],
      Memoji1: null,
      commands: null,
      send_to_terminal: null
      
    };

  },
    mounted() {
      fetch("http://localhost:3000/portfolio")
        .then(res => res.json())
        .then(data => this.Portfoliodata=data)
        .catch(err => console.log(err.message))
    },
    methods: {
    prompt(value) {
      if (value.trim() === "AboutMe") {
        this.send_to_terminal = `
      Hi am Nindenkawe اَمير. welcome to my portfolio website. I'm a back-end Web developer, Debugger, & a Technology enthusias, 
      fluent in languages like Python, JavaScript, with a broad understanding of Django,django_rest frameworks, and VueJs. 
        Other skills I acquired during my time in the telecom industry especially in MTN data solutions department as 
          a data and UX support consultant include ADB, GSM and its network spectrum, Mobile and web-apps literacy. 
              I'm hardworking, a quick learner, highly organized and a great team player. 
                        For more about me check my socials.`;
      } else {
        this.send_to_terminal = `'${value}' is not recognized as an internal command or external,
        an executable program or a batch file`;
      }
    }
  }
}
</script>

<style>
#app {
  align-items: flex-start;
  display: flex;
  text-align: center;
}
body{
  background-color: #333;

}
</style>
