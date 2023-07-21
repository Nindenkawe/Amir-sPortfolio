<template>
  <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-white dark:text-white">Market share</h3>
              <p class="max-w-auto">
                <Doughnut :data="marketshare" :options="options" />
              </p>
          </blockquote>  
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-white dark:text-white">On Net</h3>
              <p class="max-w-auto">
                <Doughnut :data="on_net" :options="options" />
              </p>
          </blockquote>
          
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r  dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-white dark:text-white">Off Net</h3>
              <p class="max-w-auto">
                 <Doughnut :data="off_net" :options="options" />
              </p>
          </blockquote>
        
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-br-lg  dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-white dark:text-white">International</h3>
              <p class="max-w-auto">
               <Doughnut :data="Internatinal" />
              </p>
          </blockquote>
      </figure>
  </div>
</template>
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
      return {
          marketshare: {
            labels: ['MTN', 'Airtel'],
            datasets: [
              {
                backgroundColor: ['#fad201', '#DD1B16'],
                data: [64.4, 35.6]
              }
            ]
          },
          on_net: {
            labels: ['MTN', 'Airtel'],
            datasets: [
              {
                backgroundColor: ['#fad201', '#DD1B16'],
                data: [77, 23]
              }
            ]
          },
          off_net: {
            labels: ['MTN', 'Airtel'],
            datasets: [
              {
                backgroundColor: ['#fad201', '#DD1B16'],
                data: [39, 61]
              }
            ]
          },
          Internatinal: {
            labels: ['MTN', 'Airtel'],
            datasets: [
              {
                backgroundColor: ['#fad201', '#DD1B16'],
                data: [76, 24]
              }
            ]
          },
          options:{
            responsive: true,
            maintainAspectRatio: false
          }
        }
    }
  }
</script>