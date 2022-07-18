<template>
  <Logo1 />
  <rackserver />
  <Footer1 :Memoji="Memoji1"/>
</template>

<script>
  import Logo1 from '../components/Lo-go.vue'
  import Footer1 from '../components/Foo-ter.vue'
  import rackserver from '../components/rack-server'
  export default {
    name: 'Resume-View',
    components: {
      Logo1, Footer1,rackserver
    },
  }
</script>