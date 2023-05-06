<template>
    <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>
<script>
  import VueApexCharts from 'vue3-apexcharts'
  export default {
    components: {
      apexchart: VueApexCharts,
      },
    data: function() {
      return {
        series: [{
            name: 'Internet subscriptions',
            type: 'column',
            data: [8.349, 7.873, 7.943, 8.267, 8.327]
          }, {
            name: 'Internet subscriptions per 100 inhabitants',
            type: 'line',
            data: [64.44, 60.42, 60.62, 62.73, 62.86]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              width: [0, 4]
            },
            title: {
              text: 'Trend of internet subscriptions and internet subscriptions per 100 inhabitants'
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: ['30 dec 2021', '30 mar 2022', '30 jun 2022', '30 sep 2022', '30 dec 2022'],
            xaxis: {
              type: 'datetime'
            },
            yaxis: [{
              title: {
                text: '',
              },
            
            }, {
              opposite: true,
              title: {
                text: ''
              }
            }]
          },
    }
    },
  };
</script>