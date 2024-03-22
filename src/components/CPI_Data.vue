<template>
  <GChart
    type="ComboChart"
    :data="chartData"
    :options="BarchartOptions"
  />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Urban CPI', 'Rural CPI', 'Rwanda CPI'],
        ['Aug-22', 149.2, 164.0, 173.4],
        ['Sep-22', 152.4, 169.1, 179.9],
        ['Oct-22', 156.5, 178.7, 193.6],
        ['Nov-22', 157.8, 180.9, 196.6],
        ['Dec-22', 157.8, 178.1, 191.7],
        ['Jan-23', 159.8, 181.9, 196.8],
        ['Feb-23', 162.7, 186.7, 203.0],
        ['Mar-23', 165.6, 193.0, 211.9],
      ],
      BarchartOptions: {
        title: 'General CPI Data',
        curveType: 'function',
        legend: { position: 'bottom' },
        width: 1000,
        height: 200,
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
    }
  }
}
</script>
