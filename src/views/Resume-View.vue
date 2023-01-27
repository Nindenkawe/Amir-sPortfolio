<template>
<div class="container mx-auto px-4 flex-col min-h-screen">
<section class="my-0 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
<div class="text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg shadow-md">
  <img class="w-10 h-10 rounded" src="../assets/bitme/mario.png" alt="Default avatar"/>
    <a href="#">
      <div class="w-30 p-4">
      <img style="position: relative; color: gold;" src="https://ghchart.rshah.org/Nindenkawe" alt="Nindankawe's git contribution" />
      </div>
    </a>
<!--     <blockquote class="max-w-auto mb-3 font-light text-gray-500 dark:text-gray-400">
      Hi am Nindenkawe اَمير. welcome to my portfolio page(SPA). I'm an Aspiring data analyst,
      backend web developer, comfortable in languages like Python, JavaScript, with a broad 
      understanding of Django, django_rest framework, and VueJs  plus some favorite web-dev technologies 
      like, Firebase, and Docker. Other skills I acquired during my time at MTN data solutions department 
      as a data and UX support consultant include ADB, USSD, Java Card, GSM and its network spectrum, Mobile and web-apps literacy. 
      I’m hardworking, a quick learner currently pursuing Google’s Data Analytics Certificate, highly organized and a great team player.
    </blockquote> -->
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
  <Logo />
  <!-- <Rackserver /> -->
  <Footer />
</div>
</template>

<script>
  import Logo from '../components/Lo-go.vue'
  import Footer from '../components/Foo-ter.vue'
  /* import Rackserver from '../components/rack-server.vue' */
  export default {
    name: 'Resume-View',
    components: {
      Logo,Footer,/* Rackserver */
    },
  }
</script>