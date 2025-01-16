<template>
  <GChart type="BarChart" :data="chartData" :options="BarchartOptions" />
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Traffic Accidents', 'Traffic Accidents 2021'],
        ['Fatal ', 621],
        ['Serious injury', 471],
        ['Minor injury', 3688],
        ['Property damage', 3859],
        ['Total', 8639],
      ],
      BarchartOptions: {
        chart: {
          title: 'Traffic Accidents',
          width: 300,
          height: 200,
        },
      },
    }
  },
}
</script>
