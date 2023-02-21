<template>
<Logo />
<div class="grid grid-cols-3">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="Generalstats-1">
        <h3 class="text-xl font-semibold pt-5 pb-3">General Statistics</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="C/Price-2">
        <h3 class="text-xl font-semibold pt-5 pb-3">Consumer price index by Region </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
        </p>
      </section>
      <section id="Markets-3">
        <h3 class="text-xl font-semibold pt-5 pb-3">Market statistics(IPO)</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
          <apexchart 
            id="RRA"
            width="500"
            type="radar"
            :options="RRA"
            :series="series"
            >
          </apexchart>
        </p>
        <section id="example-sub-A">
          <h3 class="text-xl font-semibold pt-5 pb-3">Best stocks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
        </section>
        <section id="example-sub-B">
          <h3 class="text-xl font-semibold pt-5 pb-3">All stocks</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
            minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
            quisquam obcaecati et reiciendis quaerat accusamus numquam.
          </p>
          <p>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
        <p>
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
    </div>
  </div>

  <div>
    <!-- Scrollspy -->
    <div id="scrollspy1" class="sticky-top pl-3 text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#Generalstats-1">General Statistics</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#C/Price-2">Consumer price index by Region</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Markets-3">Market statistics(IPO)</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#example-sub-A">Best Stocks</a>
            </li>
            <li>
              <a class="nav-link" href="#example-sub-B">All Stocks</a>
            </li>
          </ul>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Mobility-4">Transport & Traffic</a>
        </li>
      </ul>
    </div>
    <!-- Scrollspy -->
  </div>
</div>

</template>
<script>
  import Logo from '@/components/Lo-go.vue'
  import VueApexCharts from "vue3-apexcharts"
  
  export default {
    name: 'Apex-charts',
    components: {
      Logo, apexchart: VueApexCharts
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
  /* const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  ); */
</script>

<style scoped>
  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 600px;
    overflow: auto;
  }
</style>