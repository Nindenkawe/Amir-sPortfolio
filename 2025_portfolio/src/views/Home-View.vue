<template>
  <Logo />
  <main class="flex justify-center items-center h-screen">
    <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col justify-center lg:pr-0">
        <h1 class="mb-4 text-3xl font-extrabold text-white text-white md:text-5xl lg:text-6xl">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 animate-pulse"
          >
            <!-- Added animate-pulse class for the text -->
            {{ greeting }}
          </span>
          {{ greetingc }}
        </h1>
        <p
          class="mb-3 text-white text-gray-400 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"
        >
          {{ msgc }}
        </p>
        <p class="text-white dark:text-white transition-opacity">
          <!-- Added transition-opacity class for the text -->
          {{ msg }}
        </p>
        <div class="mb-2">
          <a
            href="https://www.linkedin.com/in/nindenkawe-amir-5713bb7a/"
            class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
          </a>
        </div>
      </div>
      <img
        class="w-30 h-30 rounded animate-pulse duration-75"
        src="../assets/bitme/help.webp"
        alt="Default avatar"
      />
      <!-- Added animate-bounce class for the image -->
    </div>
  </main>
  <!-- Added fade-in-section class for the section -->
  <section>
    <!-- Added fade-in-section class for the section -->
    <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div
        class="flex-shrink-0 text-2xl mx-auto p-2 border-gray-200 dark:border-gray-700 text-white dark:text-gray-400 rounded-lg shadow-md"
      >
        <div
          class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          Certificates & Git contributions
        </div>
        <div class="p-2 flex justify-center items-center">
          <a href="https://github.com/Nindenkawe">
            <img
              style="color: #3d2c66"
              src="https://ghchart.rshah.org/Nindenkawe"
              alt="Nindankawe's git contribution"
            />
          </a>
        </div>
        <div class="flex flex-col justify-center items-center md:items-start mt-6 md:mt-0">
          <button type="button" class="card-link md:mr-6 p-2">
            <a
              href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link"
            >
              <div class="flex items-center">
                <img
                  class="w-20 h-20 rounded mr-4"
                  src="../assets/bitme/Finteck_Expert.webp"
                  alt="Certificate image"
                />
                <div class="text-left">
                  <div class="text-base font-semibold">10x1000 Fintech Expert Program</div>
                  <div class="text-sm">Issued by: 10x1000 Tech for Inclusion</div>
                </div>
              </div>
            </a>
          </button>
          <button type="button" class="card-link md:mr-6 p-2">
            <a
              href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link"
            >
              <div class="flex items-center">
                <img
                  class="w-20 h-20 rounded mr-4"
                  src="../assets/bitme/Foundation_flex.webp"
                  alt="Certificate image"
                />
                <div class="text-left">
                  <div class="text-base font-semibold">10x1000 Fintech Foundation Program</div>
                  <div class="text-sm">Issued by: 10x1000 Tech for Inclusion</div>
                </div>
              </div>
            </a>
          </button>
          <button type="button" class="card-link md:mr-6 p-2">
            <a
              href="https://drive.google.com/drive/folders/1kho5k9r8ecm0WyUbcmlPREMaXfpOMkdI?usp=share_link"
            >
              <div class="flex items-center">
                <img
                  class="w-20 h-20 rounded mr-4"
                  src="../assets/bitme/Process_data.webp"
                  alt="Certificate image"
                />
                <div class="text-left">
                  <div class="text-base font-semibold">
                    Google Data Analytics Professional Certificate
                  </div>
                  <div class="text-sm">Issued by: Grow with Google</div>
                  <div class="text-sm">Still learning</div>
                </div>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
  <Footer1 />
</template>

<script>
import Logo from '@/components/Lo-go.vue'
import Footer1 from '@/components/Foo-ter.vue'

export default {
  name: 'Home-View',
  components: {
    Logo,
    Footer1,
  },
  data() {
    return {
      greeting: 'Hi am Amir,',
      greetingc: 'Welcome to my portfolio web page.',
      msg: "Data engineer, web developer, comfortable in Python, JavaScript, with a broad understanding of Django, Django_rest framework, FastApi and Vue, plus some favorite web developer tools like, Firebase, Googled cloud platform (Bigquery Studio, Cloud_Run) and Docker. Other skills I acquired during my time at MTN data solutions department as a data and CX support consultant include Android Debug Bridge(ADB), Unstructured Supplementary Service Data(USSD), GSM and it's network spectrum, Mobile and web-apps literacy. I’m hardworking, a quick learner, highly organized and a great team player.",
      msgc: 'This page serves as a platform to showcase my expertise as a web developer, data analyst, and data visualization enthusiast. ',
    }
  },
}
</script>

<style>
.card-link:hover {
  color: #0078d7;
  text-decoration: none;
}
</style>
