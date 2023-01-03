<template>
  <Logo />
  <div class="wrapper">
   
  </div>
  <Rackserver />
  <Footer />
</template>

<script>
  import Logo from '../components/Lo-go.vue'
  import Footer from '../components/Foo-ter.vue'
  import Rackserver from '../components/rack-server.vue'
  
  export default {
    name: 'Vue-Charts',
    components: {
      Logo, Footer, Rackserver
    },
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  width: 1195px;
  height: 497px;
  left: 298px;
  top: 120px;
  border-radius: 10px;
  border: 2px solid black;
  color: darkgreen;
  background-color: whitesmoke;
  font-size: 11pt;
  font-family: Inconsolata, monospace;
  padding: 0.5em 1.5em 1em 1em;
  overflow: scroll;
  box-shadow: 2px 2px 5px black;
}
</style>