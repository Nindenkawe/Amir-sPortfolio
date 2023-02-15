<template>
  <Logo />
  <aside class="float-none" aria-hidden="true" fill="currentColor" text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700>
    <rackserver/>
  </aside>
  <main>
    <section class="my-0 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <div class="text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg shadow-md">
      <img class="w-10 h-10 rounded" src="../assets/bitme/mario.png" alt="Default avatar"/>
        <a href="https://github.com/Nindenkawe">
          <div class="w-30 p-4">
          <img style="position: relative; color: gold;" src="https://ghchart.rshah.org/Nindenkawe" alt="Nindankawe's git contribution" />
          </div>
        </a>
        <div>
          <a href="https://docs.google.com/document/d/1AlDBkqS5EMVm2bL_TGbeQUM_OaYRjPyu8Yo1pe7Ckvk/edit?usp=sharing" class="card-link">
          <b>Curriculum Vitae</b>
          <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </a>
          <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link" class="card-link">
            <b>Cert:</b>10x1000 Fintech Foundation Program
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </a>
          <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link" class="card-link">
            <b>Cert:</b>Google Data Analytics Professional Certificate
            <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </a>
        </div>
    </div>
    </section>
  </main>
  <Footer />
</template>

<script>
  import Logo from '@/components/Lo-go.vue'
  import Footer from '@/components/Foo-ter.vue'
  import rackserver from '@/components/Rack-server.vue'
  export default {
    name: 'Resume-View',
    components: {
      Logo,Footer,rackserver
    },
  }
</script>