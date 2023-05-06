<template>
    <div id="chart">
       <apexchart type="rangeBar" height="390" :options="chartOptions" :series="series"></apexchart>
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
         series: [
            {
              data: [
                {
                  x: 'Q4 2021',
                  y: [155.127, 80.013]
                },
                {
                  x: 'Q1 2022',
                  y: [156.835, 84.809]
                },
                {
                  x: 'Q2 2022',
                  y: [173.649, 94.705]
                },
                {
                  x: 'Q3 2022',
                  y: [178.032, 90.234]
                },
                {
                  x: 'Q4 2022',
                  y: [187.954, 108.273]
                }
              ]
            }
          ],
          chartOptions: {
            chart: {
              height: 390,
              type: 'rangeBar',
              zoom: {
                enabled: false
              }
            },
            colors: ['#FFA500', '#00FF00'],
            plotOptions: {
              bar: {
                horizontal: true,
                isDumbbell: false,
                dumbbellColors: [['#00FF00', '#FFA500']]
              }
            },
            title: {
              text: 'Trend of international internet bandwidth (Mbps) from Q4 2021 to Q4 2022'
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              position: 'top',
              horizontalAlign: 'left',
              customLegendItems: ['Equipped bandwidth', 'Used bandwidth']
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#36BDCB'],
                inverseColors: false,
                stops: [0, 100]
              }
            },
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            }
          },
    }
    },
  };
</script>