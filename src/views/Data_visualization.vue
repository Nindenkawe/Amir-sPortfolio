<template>
<Logo />
<div class="grid grid-cols-3 ">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="Generalstats-1">
        <h3 class="text-xl font-semibold pt-5 pb-3">General Statistics</h3>
        <div class="flex p-2 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg">
          <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
            Gross Domestic Product &middot; 2,709
          </button>
          <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6">
            Consumer Price Index &middot; 159.8
          </button>
          <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
            Life Expextancy at Birth &middot; 68.6
          </button>
          <button type="button" class="appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
            Size of the resident population &middot; 13,697,803
          </button>
        </div>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          <apexchart type="bar" height="350" :options="chartOptions" :series="series1"></apexchart>
        </p>
      </section>
      <section id="Price-2">
        <h3 class="text-xl font-semibold pt-5 pb-3">Consumer price index by Region </h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          <apexchart type="area" height="340" :options="chartOptions" :series="series1"></apexchart>
        </p>
      </section>
      <section id="Markets-3">
        <h3 class="text-xl font-semibold pt-5 pb-3">Market statistics(IPO)</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          <apexchart 
            id="RRA"
            width="500"
            type="radar"
            :options="RRA"
            :series="series"
            >
          </apexchart>
        </p>
        <section id="Markets-A">
          <h3 class="text-xl font-semibold pt-5 pb-3">Best stocks</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <br>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
        </section>
        <section id="Markets-B">
          <h3 class="text-xl font-semibold pt-5 pb-3">All stocks</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <br>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
            <apexchart 
            id="RRA"
            width="500"
            type="bar"
            :options="RRA"
            :series="series"
            >
          </apexchart>
          </p>
        </section>
      </section>
      <section id="Mobility-4">
        <h3 class="text-xl font-semibold pt-5 pb-3">Transport & Traffic</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          <apexchart type="bar" height="340" :options="chartOptions" :series="series1"></apexchart>
        </p>
      </section>
    </div>
  </div>

  <div>
    <div id="scrollspy1" class="sticky-top pl-3 text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#Generalstats-1">General Statistics</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Price-2">Consumer price index by Region</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Markets-3">Market statistics(IPO)</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#Markets-A">Best Stocks</a>
            </li>
            <li>
              <a class="nav-link" href="#Markets-B">All Stocks</a>
            </li>
          </ul>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Mobility-4">Transport & Traffic</a>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>
<script>
  import Logo from '@/components/Lo-go.vue'
  import VueApexCharts from "vue3-apexcharts"
  
  export default {
 
    components: {
      Logo, apexchart: VueApexCharts
    },

  data: function() {
    return {
      info: null,
      RRA: {
        chart: {
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
      series1: [{
            name: 'Sales',
            data: [216204, 217301,244112 ]
          }
        ],
          chartOptions: {
            chart: {
              height: 350
            },
            forecastDataPoints: {
              count: 7
            },
            stroke: {
              width: 3,
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ['12/31/2018', '12/31/2019','12/31/2020'],
              tickAmount: 10,
              labels: {
                formatter: function(value, timestamp, opts) {
                  return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
              }
            },
            title: {
              text: 'Source:NISR',
              align: 'left',
              style: {
                fontSize: "16px",
                color: '#666'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
              },
            },
            yaxis: {
              min: 0,
              max: 250000
            }
          },
    }

  }

    
  }
</script>

<style scoped>
  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 600px;
    overflow: auto;
  }
</style>