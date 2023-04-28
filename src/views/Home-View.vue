<template>
  <Logo />
  <main class="p-2">
    <div class="flex justify-center items-center">
      <img class="w-30 h-30 rounded" src="../assets/bitme/mario.png" alt="Default avatar" />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 left-0">
        <div class="flex flex-col justify-center lg:pl-0 lg:pr-8">
          <h1 class="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl dark:text-white">{{ greeting }}</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-white">
            {{ msg }}
          </p>
          <div class="mb-2">
            <a href="https://www.linkedin.com/in/nindenkawe-amir-5713bb7a/" class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style="background-color: #0077b5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>`
        </div>
      </div>
    </div>
    <viz/>
  </main>
  <rackserver/>
</template>

<script>
  import Logo from '@/components/Lo-go.vue'
  import rackserver from '@/components/Rack-server.vue'
  import viz from '@/views/Data_visualization.vue'
export default {
    name: 'Home-View',
    components: { 
      Logo, rackserver, viz
    },
    data() {
      return {
        greeting: "Hi am Nindenkawe Amir, Welcome to my portfolio web-app.",
        msg: "This page serves as a platform to showcase my expertise as a web developer, data analyst, and data visualization enthusiast. As a developer, I possess the necessary skills and knowledge to create dynamic and responsive web pages that cater to the needs of clients. Moreover, my proficiency in data analysis allows me to derive meaningful insights from complex datasets. Finally, my passion for data visualization enables me to present the findings in a clear and concise manner, making it easier for clients to understand and act on the information."
      };
    }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  height: 300px;
  display: block;
  background-color: rgb(5, 3, 10);
  /* background-image: url("@/assets/bitme/ideas.png"); */
  font-family: 'Space Mono', monospace;
}
</style>