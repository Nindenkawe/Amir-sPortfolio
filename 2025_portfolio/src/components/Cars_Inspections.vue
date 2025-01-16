<template>
  <Bar :data="TrafficData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      TrafficData: {
        labels: ['2017', '2018', '2021'],
        datasets: [
          {
            label: 'Number of Vehicles',
            backgroundColor: '#00a1de',
            data: [198533, 216204, 268537],
          },
          {
            label: 'Vehicles inspected',
            backgroundColor: '#20603d',
            data: [75375, 75375, 141354],
          },
          {
            label: 'Inspections done',
            backgroundColor: '#fad201',
            data: [114185, 145835, 141354],
          },
        ],
      },
    }
  },
}
</script>
