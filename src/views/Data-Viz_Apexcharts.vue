<template>
  <Logo />
    <div class="wrapper">
    <div class="row">
      <div class="col">
        ...
        <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
      >
      </apexchart>
      </div>
      <div class="col">
        ...
        <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
      >
      </apexchart>
      </div>
    </div>
    <div class="row">
      <div class="col">
        ...
        <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
      >
      </apexchart>
      </div>
      <div class="col">
        ...
        <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
      >
      </apexchart>
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
    name: 'Apex-Charts',
    components: {
      Logo, Footer, Rackserver, apexchart: VueApexCharts
    },

    data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ['Vehicles', 'Vehicles Inspected', 'Inspections done', 'Traffic Accidents'],
        },
        
      },
      series: [
        {
          name: "2018 Data",
          data: [216.204, 75.375, 145.835, 5.611],
        },
        
      ],
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