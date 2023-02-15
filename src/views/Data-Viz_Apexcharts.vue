<template>
  <Logo />
<div class="grid grid-cols-3">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="example-1">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
          <apexchart 
            id="RRA"
            width="500"
            type="bar"
            :options="RRA"
            :series="series"
            >
          </apexchart>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel
          minima quod error maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus
          quisquam obcaecati et reiciendis quaerat accusamus numquam.
        </p>
      </section>
      <section id="example-2">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 2</h3>
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
      <section id="example-3">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 3</h3>
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
        <section id="example-sub-A">
          <h3 class="text-xl font-semibold pt-5 pb-3">Subsection A</h3>
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
          <h3 class="text-xl font-semibold pt-5 pb-3">Subsection B</h3>
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
      </section>
      <section id="example-4">
        <h3 class="text-xl font-semibold pt-5 pb-3">Section 4</h3>
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
    </div>
  </div>

  <div>
    <!-- Scrollspy -->
    <div id="scrollspy1" class="sticky-top pl-3 text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#example-1">Section 1</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-2">Section 2</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-3">Section 3</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#example-sub-A">Subsection A</a>
            </li>
            <li>
              <a class="nav-link" href="#example-sub-B">Subsection B</a>
            </li>
          </ul>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#example-4">Section 4</a>
        </li>
      </ul>
    </div>
    <!-- Scrollspy -->
  </div>
</div>

  <Footer />
</template>
<script>
  import Logo from '@/components/Lo-go.vue'
  import Footer from '@/components/Foo-ter.vue'
  import VueApexCharts from "vue3-apexcharts"
  
  export default {
    name: 'Apex-charts',
    components: {
      Logo, Footer, apexchart: VueApexCharts
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
.parent {
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.child {
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
}

  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 600px;
    overflow: auto;
  }
</style>