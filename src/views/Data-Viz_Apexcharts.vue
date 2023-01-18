<template>
  <Logo />
    <div class="flex justify-center md:container md:mx-auto overscroll-scroll p-4 object-cover h-58 w-96">
    <div class="absolute max-w-lg p-4 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-l-lg">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-r-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                  <apexchart 
                    id="RRA"
                    width="500"
                    type="bar"
                    :options="RRA"
                    :series="series"
                    >
                  </apexchart>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                  <apexchart 
                    id="RRA"
                    width="500"
                    type="radar"
                    :options="RRA"
                    :series="series"
                    >
                  </apexchart>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                  <apexchart 
                    id="RRA"
                    width="500"
                    type="area"
                    :options="RRA"
                    :series="series"
                    >
                  </apexchart>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
      </table>
</div>
</div>
</div>
  <Rackserver />
  <Footer />
</template>
<script>
  import Logo from '../components/Lo-go.vue'
  import Footer from '../components/Foo-ter.vue'
  import VueApexCharts from "vue3-apexcharts"
  import Rackserver from '../components/rack-server.vue'
  
  export default {
    name: 'Apex-charts',
    components: {
      Logo, Footer, Rackserver, apexchart: VueApexCharts
    },

  data: function() {
    return {
      RRA: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['NV', 'MI', 'RA', 'CPI', 'GDP', 'LEB', '', '...', '...'],
        },
        yaxis: {
          title: {
            text: 'Source:(RRA & RNP)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "Thousands"
            }
          }
        }
        
      },
      series: [{
        name: '2018',
        data: [216204, 145835, 5611, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
      }, {
        name: '2020',
        data: [244112, 0, 4203, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
      }, {
        name: '2022',
        data: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
      }],
    }

  }
    
  }
</script>

<style scoped>
.wrapper{
  position: absolute;
  width: 1195px;
  height: 497px;
  left: 298px;
  top: 120px;
  border-radius: 10px;
  border: 2px solid black;
  color: darkgreen;
  background-color: black;
  font-size: 11pt;
  font-family: Inconsolata, monospace;
  padding: 0.5em 1.5em 1em 1em;
  overflow: scroll;
  box-shadow: 2px 2px 5px black;
}
</style>