<template>
  <Logo />
  <div class="container mx-auto p-20">
    <div class="flex flex-col md:flex-row md:space-x-4 md:items-center">
      <div class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
        <div class="flex justify-center items-center">
          <img class="w-20 h-20 rounded" src="../assets/bitme/mario.png" alt="Default avatar" />
          <a href="https://github.com/Nindenkawe" class="w-30 p-4">
            <img style="position: relative; color: gold;" src="https://ghchart.rshah.org/Nindenkawe" alt="Nindankawe's git contribution" />
          </a>
        </div>
        <div class="flex flex-col justify-center items-center md:items-start mt-6 md:mt-0">
          <button type="button" class="card-link md:mr-6 p-2">
            <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link">
              <div class="flex items-center">
                <img class="w-20 h-20 rounded mr-4" src="../assets/bitme/Finteck_Expert.png" alt="Certificate image" />
                <div class="text-left">
                  <div class="text-base font-semibold">10x1000 Fintech Expert Program</div>
                  <div class="text-sm">Issued by: 10x1000 Tech for Inclusion</div>
                  <div class="text-sm">Issued on: April 2023</div>
                </div>
              </div>
            </a>
          </button>
          <button type="button" class="card-link md:mr-6 p-2">
            <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link">
              <div class="flex items-center">
                <img class="w-20 h-20 rounded mr-4" src="../assets/bitme/Foundation_flex.png" alt="Certificate image" />
                <div class="text-left">
                  <div class="text-base font-semibold">10x1000 Fintech Foundation Program</div>
                  <div class="text-sm">Issued by: 10x1000 Tech for Inclusion</div>
                  <div class="text-sm">Issued on: November 2022</div>
                </div>
              </div>
            </a>
          </button>
          <button type="button" class="card-link md:mr-6 p-2">
            <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link">
              <div class="flex items-center">
                <img class="w-20 h-20 rounded mr-4" src="../assets/bitme/ideas.png" alt="Certificate image" />
                <div class="text-left">
                  <div class="text-base font-semibold">Google Data Analytics Professional Certificate</div>
                  <div class="text-sm">Issued by: Grow with Google</div>
                  <div class="text-sm">Issued on: Still learning</div>
                </div>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
  <rackserver/>
  <Footer/>
</template>

<script>
  import Logo from '@/components/Lo-go.vue'
  import rackserver from '@/components/Rack-server.vue'
  import Footer from '@/components/Foo-ter.vue'

  export default {
    name: 'ResumeView',
    components: {
      Logo,Footer,rackserver
    },
  }
</script>

<style>
  .card-link:hover {
    color: #0078D7;
    text-decoration: none;
  }
</style>
