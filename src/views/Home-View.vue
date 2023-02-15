<template>
  <Logo1 />
  <main>
    <newcli/>
  </main>
  <aside class="float-none" aria-hidden="true" fill="currentColor" text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700>
    <rackserver/>
  </aside>
  <Footer1/>
</template>

<script>
  import Logo1 from '@/components/Lo-go.vue'
  import Footer1 from '@/components/Foo-ter.vue'
  import newcli from '@/components/Info-contactMe.vue'
  import rackserver from '@/components/Rack-server.vue'
export default {
    name: 'Home-View',
    components: { 
      Logo1, Footer1, newcli, rackserver
    }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  height: 300px;
  display: block;
  background-color: rgb(5, 148, 60);
  /* background-image: url("https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?w=900&t=st=1674208954~exp=1674209554~hmac=b0e1ef55f87573ee4b86b682194e0540592939ffc8dc64979806978c4c1eb21d"); */
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