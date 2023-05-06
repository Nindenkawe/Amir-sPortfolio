<template>
<div class="grid grid-cols-3 ">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="Generalstats">
        <h3 class="text-xl dark:text-white font-semibold pt-5 pb-3">RW General Statistics</h3>
        <div class="flex p-2 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-black-400 border-gray-200 rounded-lg">
          <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
            Gross Domestic Product &middot; {{ GDP }}
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
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
          Rwanda's population is 13,246,394 people as of August 2022, with an annual growth rate of 2.3% from 2012 to 2022. 
          Females make up 51.5% and males 48.5% of the population. Life expectancy at birth is 69.6 years, up from 51.2 years in 2002 
          and 64.5 years in 2012.
        </p>
        <br>
<!--         <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
           add viz
        </p> -->
      </section>
      <section id="price index by Region">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Consumer price index by Region </h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
          Rwanda's inflation measured by the CPI rose 19.3% YoY in Mar 2023 (down from 20.8% in Feb 2023).
          Food prices increased 41.3% YoY and 4.3% MoM, while alcoholic beverages, tobacco, 
          and narcotics increased 23.6% YoY and 0.7% MoM. Local products rose 20.8% YoY and 2.2% MoM, 
          while imported products rose 14.8% YoY and 0.6% MoM. Transport increased 12% YoY and was stable MoM.
          <General_CPI/>
          <b>Source:NISR 2022</b>
        </p>
      </section>
      <section id="Telecommunications">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Telecommunications</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 shadow-md">
          During the fourth quarter of 2022, the mobile telephone services were dominated by two operators, namely MTN Rwanda Ltd and Airtel Rwanda Ltd.
          At the end of December 2022, the total number of active mobile subscriptions reported was 11,002,078 SIM cards. 

          Within the last 90 days, a total of 8,279,430 SIM cards were active and connected to the internet. 
          In addition, there were 47,857 active fixed internet subscriptions recorded at the end of the 4th quarter of 2022. 
          The table provided below displays the number of subscriptions per operator.
        </p>
          <table class="table-auto w-full flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 shadow-md">
            <thead>
              <tr>
                <th class="px-4 py-2"></th>
                <th class="px-4 py-2">December 2021</th>
                <th class="px-4 py-2">December 2022</th>
                <th class="px-4 py-2">Quarterly Variation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="px-4 py-2 font-medium">MTN Rwanda Ltd</td>
                <td class="px-4 py-2">6,954,523</td>
                <td class="px-4 py-2">7,088,906</td>
                <td class="px-4 py-2"><b>1.93%</b></td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="px-4 py-2 font-medium">Airtel Rwanda Ltd</td>
                <td class="px-4 py-2">3,948,466</td>
                <td class="px-4 py-2">3,913,172</td>
                <td class="px-4 py-2">0.89%</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="px-4 py-2 font-medium">Total</td>
                <td class="px-4 py-2">10,902,989</td>
                <td class="px-4 py-2">11,002,078</td>
                <td class="px-4 py-2">0.91%</td>
              </tr>
            </tbody>
          </table>
        <section id="Top Players">
          <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Top Players</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
              Based on the RURA report of 2022, we can summarize the market share of on-net and off-net minutes for MTN Rwanda Ltd and Airtel Rwanda Ltd as follows:
              <ul class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
                <li class="text-lg font-bold">
                  On-net minutes market share: <br>
                  - MTN Rwanda Ltd: 77% <br>
                  - Airtel Rwanda Ltd: 23%
                </li>
                <li class="text-lg font-bold">
                  Off-net minutes market share: <br>
                  - MTN Rwanda Ltd: 39% <br>
                  - Airtel Rwanda Ltd: 61%
                </li>
                <li class="text-lg font-bold">
                  International minutes market share: <br>
                  - MTN Rwanda Ltd: 76% <br>
                  - Airtel Rwanda Ltd: 24%
                </li>
              </ul>    
              These percentages represent the proportion of total minutes generated by each mobile network operator within their respective categories.

              It's important to note that these market shares are specific to the fourth quarter of 2022 and may change over time based on various factors such as network quality, pricing, promotions, and customer preferences.
          <Telecom_Data/>
          <b>Source:RURA 2022</b>

          </p>
        </section>
        <section id="Internet">
          <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Internet</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
            In Q4 2022, the country had a total international internet bandwidth capacity of 187,954 Mbps, out of which the average utilized bandwidth was 108,273 Mbps.
            <Band_width />  
            <b>Source:RURA 2022</b>          
          </p>
          <br>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
            By December 2022, there was a 49.6% increase in fixed internet subscriptions as compared to Q4 2021. Of the total fixed internet subscriptions, 99.8% were subscribed to speeds equal to or greater than 256 kbps, while only 0.2% were subscribed to speeds below 256 kbps.
            <Internet_Distubution/>
            <b>Source:RURA 2022</b>
          </p>
        </section>
      </section>
      <section id="Mobility-4">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Transport & Traffic</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
          The bar chart below presents data on the number of cars and vehicle inspections between 2017-2021, sourced from RRA and RNP. 
          It's worth noting the difference in the number of cars, number of cars inspected, and number of inspections conducted. 
          One possible explanation for this difference is the import of old second-hand vehicles, but other factors may also be at play.
          <Cars_Inspections />
          <b>Source:NISR 2022</b>
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-black-400 rounded-lg shadow-md">
          According to RNP's source data from the statistical year book of 2022, road accidents caused a death rate of 4.7 in 2021.
          To provide a better understanding of the types of accidents that occurred, we have prepared a visual representation of the data categorised by accident type.
          <BarChart/>
          <b>Source:NISR 2022</b>
        </p>
      </section>
    </div>
  </div>

  <div>
    <div id="scrollspy1" class="sticky-top pl-3 dark:text-white text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#Generalstats">General Statistics</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#price index by Region">Consumer price index by Region</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Telecommunications">Telecommunications</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#Top Players">Top Players</a>
            </li>
            <li>
              <a class="nav-link" href="#Internet">Internet</a>
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
<script lang="js">
  import Cars_Inspections from '@/components/Cars_Inspections.vue'
  import BarChart from '@/components/accident_data.vue'
  import General_CPI from '@/components/CPI_Data.vue'
  import Telecom_Data from '@/components/Telecom_data.vue'
  import Internet_Distubution from '@/components/Internet_Distubution.vue'
  import Band_width from '@/components/band_width.vue'
  import axios from 'axios'
  import cheerio from 'cheerio'
  
  export default{
    components: {
      Cars_Inspections, BarChart, General_CPI, Telecom_Data, Internet_Distubution, Band_width
    },
    data(){
      return{
        GDP:''
      }
    },
    mounted() {
      axios.get('https://www.statistics.gov.rw/')
        .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          const GDP = $('div.col-md-4 > div.figure-value > h1').text()
          this.GDP = GDP;
        })
        .catch(error => {
          console.log(error)
        })
    }
}
</script>

<style scoped>
  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 800px;
    overflow: auto;
  }
</style>