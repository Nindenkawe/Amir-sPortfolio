<!-- <template>
  <Line :data="band_width"/>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
        band_width: {
            labels: ['VueJs'],
            datasets: [
              {
                backgroundColor: ['#41B883'],
                data: [40]
              }
            ]
          },
          options:{
            responsive: true,
            maintainAspectRatio: false
          }
        }
    }
  }
</script>
 -->