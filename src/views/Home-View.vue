<template>
  <Logo />
  <section class="flex justify-center items-center h-screen">
  <div class="flex flex-col items-center">
    <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col justify-center lg:pr-0">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {{ greeting }}</span>
        {{ greetingc }}</h1>
        <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {{msgc}}
        </p>
        <p class="text-gray-500 dark:text-gray-400"> {{ msg }}</p>
        <div class="mb-2">
          <a href="https://www.linkedin.com/in/nindenkawe-amir-5713bb7a/" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>
      <img class="w-30 h-30 rounded" src="../assets/bitme/help.webp" alt="Default avatar" />
    </div>
  </div>
</section>
<section>
    <div class="container mx-auto">
    <div class="flex flex-col md:flex-row md:space-x-4 md:items-center">
      <div class="flex-shrink-0 text-2xl mx-auto p-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
        <div class="flex justify-center items-center">
          <img class="w-20 h-20 rounded" src="../assets/bitme/mario.webp" alt="Default avatar" />
          <a href="https://github.com/Nindenkawe" class="w-30">
            <img style="position: relative; color: rgb(57, 39, 214);" src="https://ghchart.rshah.org/Nindenkawe" alt="Nindankawe's git contribution" />
          </a>
        </div>
        <div class="flex flex-col justify-center items-center md:items-start mt-6 md:mt-0">
          <button type="button" class="card-link md:mr-6 p-2">
            <a href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link">
              <div class="flex items-center">
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
                <img class="w-20 h-20 rounded mr-4" src="../assets/bitme/ideas.webp" alt="Certificate image" />
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
</section>
<Footer />
</template>

<script>
  import Logo from '@/components/Lo-go.vue'
  import Footer from '@/components/Foo-ter.vue'
    export default {
      name: 'Home-View',
      components: { 
        Logo, Footer
      },
      data() {
        return {
          greeting: "Hi am Amir,",
          greetingc:"Welcome to my portfolio web page.",
          msg: "As a developer, I possess the necessary skills and knowledge to create dynamic and responsive web pages that cater to the needs of clients. Moreover, my proficiency in data analysis allows me to derive meaningful insights from complex datasets. Finally, my passion for data visualization enables me to present the findings in a clear and concise manner, making it easier for clients to understand and act on the information.",
          msgc:"This page serves as a platform to showcase my expertise as a web developer, data analyst, and data visualization enthusiast. "
        };
    }
    }
</script>
<style>
  .card-link:hover {
    color: #0078D7;
    text-decoration: none;
  }
</style>