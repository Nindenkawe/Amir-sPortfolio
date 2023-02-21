<template>
  <Logo1 />
  <main class="p-5">
    <viz/>
  </main>
  <info_contact/>
 <!--  <Footer1/> -->
</template>

<script>
  import Logo1 from '@/components/Lo-go.vue'
  /* import Footer1 from '@/components/Foo-ter.vue' */
  import info_contact from '@/components/Info-contactMe.vue'
  import viz from '@/views/Data_visualization.vue'
export default {
    name: 'Home-View',
    components: { 
      Logo1, /* Footer1 */ info_contact, viz
    }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  height: 300px;
  display: block;
  background-color: rgb(5, 148, 60);
  /* background-image: url("@/assets/bitme/cool-background.png"); */
  font-family: 'Space Mono', monospace;
}
</style>