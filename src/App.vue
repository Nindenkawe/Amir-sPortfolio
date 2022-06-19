<template>
  <Logo1 />
  <Menu1 />
  <Footer1 :Memoji="Memoji1"/>
  <newcli :commands="commands" @shell_output="prompt" :shell_input="send_to_terminal"/>
</template>

<script>
  import Menu1 from './components/Me-nu.vue'
  import Logo1 from './components/Lo-go.vue'
  import Footer1 from './components/Foo-ter.vue'
  import newcli from './components/new-cli.vue'

  export default {
    name: 'App',
    components: { 
      Menu1, Logo1, Footer1, newcli
    },
    
    data() {
      return {
        Memoji1: [
          {
            url: "./assests/bitme/404err.png"
          }
        ]
    };

    },
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
