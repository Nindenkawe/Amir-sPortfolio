<template>
  <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Market share</h3>
              <p class="my-4">
                <apexchart type="donut" width="380" :options="chartOptions" :series="Market_share"></apexchart>
              </p>
          </blockquote>  
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">On Net</h3>
              <p class="my-4">
                <apexchart type="pie" width="380" :options="chartOptions" :series="On_net"></apexchart>
              </p>
          </blockquote>
          
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Off Net</h3>
              <p class="my-4">
                <apexchart type="pie" width="380" :options="chartOptions" :series="Off_net"></apexchart>
              </p>
          </blockquote>
        
      </figure>
      <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">International</h3>
              <p class="my-4">
                
              </p>
          </blockquote>
      </figure>
  </div>
</template>

<script>
 
  export default {
    components: {
      
      },
    data: function() {
      return {
        /* Market_share: [64.4, 35.6],
        On_net: [77,23],
        Off_net: [39, 61],
        International: [76, 24],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['MTN Rwanda', 'Airtel Rwanda'],
            colors: ['#FFFF00', '#FF0000'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 100
                },
                legend: {
                  position: 'center'
                }
              }
            }]
        }, */
      }
    },
  };
</script>