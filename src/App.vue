<template>
  <Logo1 />
  <Menu1 />
  <Terminal />
  <Footer1 :Memoji="Memoji1"/>
</template>

<script>
  import Menu1 from './components/Me-nu.vue'
  import Logo1 from './components/Lo-go.vue'
  import Terminal from './components/Ter-minal.vue'
  import Footer1 from './components/Foo-ter.vue'

  export default {
    name: 'App',
    components: { 
      Menu1, Logo1, Terminal, Footer1
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
</style>
