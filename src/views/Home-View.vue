<template>
  <Logo1 />
  <main class="p-5">
    <viz/>
  </main>
  <rackserver/>
 <!--  <Footer1/> -->
</template>

<script>
  import Logo1 from '@/components/Lo-go.vue'
  /* import Footer1 from '@/components/Foo-ter.vue' */
  import rackserver from '@/components/Rack-server.vue'
  import viz from '@/views/Data_visualization.vue'
export default {
    name: 'Home-View',
    components: { 
      Logo1, /* Footer1 */ rackserver, viz
    }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  height: 300px;
  display: block;
  background-color: rgb(166, 159, 184);
  /* background-image: url("@/assets/bitme/ideas.png"); */
  font-family: 'Space Mono', monospace;
}
</style>