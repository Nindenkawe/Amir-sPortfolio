<template>
  <Logo />
  <Aboutme/>
  <Rackserver />
  <Footer />
</template>

<script>
  import Logo from '../components/Lo-go.vue'
  import Footer from '../components/Foo-ter.vue'
  import Rackserver from '../components/rack-server.vue'
  import Aboutme from '../components/about-me.vue'
  export default {
    name: 'Resume-View',
    components: {
      Logo,Footer,Rackserver,Aboutme
    },
  }
</script>