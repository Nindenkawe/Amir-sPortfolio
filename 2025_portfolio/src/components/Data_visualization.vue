<template>
  <div class="grid grid-cols-3 p-2">
    <div class="col-span-2">
      <div
        data-bs-spy="scroll"
        data-bs-target="#scrollspy1"
        data-bs-offset="200"
        class="scrollspy-example"
      >
        <div class="p-2" id="Generalstats">
          <h3
            class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            General Statistics
          </h3>
          <div
            class="flex dark:bg-white-800 dark:border-gray-700 w-auto text-sm text-left text-white dark:text-black-400 border-gray-200 rounded-sm"
          >
            <button
              type="button"
              class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              :class="{ 'text-blue-dark border-b border-blue-dark': activeTab === 'gdp' }"
              @click="activeTab = 'gdp'"
            >
              <span :class="{ 'font-bold': activeTab === 'gdp' }">Gross Domestic Product</span>
              {{ GDP }}
            </button>
            <button
              type="button"
              class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              :class="{ 'text-blue-dark border-b border-blue-dark': activeTab === 'cpi' }"
              @click="activeTab = 'cpi'"
            >
              <span :class="{ 'font-bold': activeTab === 'cpi' }">Consumer Price Index</span> 159.8
            </button>
            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              :class="{ 'text-blue-dark border-b border-blue-dark': activeTab === 'life' }"
              @click="activeTab = 'life'"
            >
              <span :class="{ 'font-bold': activeTab === 'life' }">Life Expectancy at Birth</span>
              69.6
            </button>
            <button
              type="button"
              class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              :class="{ 'text-blue-dark border-b border-blue-dark': activeTab === 'srp' }"
              @click="activeTab = 'srp'"
            >
              <span :class="{ 'font-bold': activeTab === 'srp' }"
                >Size of the Resident Population</span
              >
              13,246,394
            </button>
          </div>
          <br />
          <p
            class="flex-shrink-0 text-2xl mx-auto p-2 border border-purple-700 text-white dark:text-black-400 rounded-lg shadow-md"
            v-show="activeTab === 'srp' || activeTab === 'srp'"
          >
            Rwanda's population is 13,246,394 people as of August 2022, with an annual growth rate
            of 2.3% from 2012 to 2022. Females make up 51.5% and males 48.5% of the population. Life
            expectancy at birth is 69.6 years, up from 51.2 years in 2002 and 64.5 years in 2012.
          </p>
          <p
            class="flex-shrink-0 text-2xl mx-auto p-2 border border-green-700 text-white dark:text-black-400 rounded-lg shadow-md"
            v-show="activeTab === 'gdp'"
          >
            In 2022, GDP at current market prices was estimated at Frw 13,716 billion, up from Frw
            10.930 billion in 2021. The service sector contributed 47%, Agriculture contributed 25%,
            and Industry contributed 21% while 7% was attributed to adjustment for taxes less
            subsidies on products.
          </p>
          <p
            class="flex-shrink-0 text-2xl mx-auto p-2 border border-yellow-400 text-white dark:text-black-400 rounded-lg shadow-md"
            v-show="activeTab === 'cpi'"
          >
            Urban CPI increased by 19.3% on annual basis and increased by 1.8% on monthly basis. The
            annual average inflation rate between March 2022 and March 2023 was 17.5%.
          </p>
          <p
            class="flex-shrink-0 text-2xl mx-auto p-2 border border-blue-700 text-white dark:text-black-400 rounded-lg shadow-md"
            v-show="activeTab === 'life'"
          >
            The evolution of mortality data shows that the average annual increase in life
            expectancy at birth during the period 1978-1991 were respectively 0.45 years for men,
            0.68 years for females and 0.56 years for both sexes, while for the period 1991-2002 the
            average annual decrease in life expectancy at birth was about 0.23 years for the entire
            population. Between 2002 and 2012 the average annual increase rate in life expectancy at
            birth is 1.33 years
          </p>
        </div>
        <div class="p-2" id="price index by Region">
          <h3
            class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Consumer price index by Region
          </h3>
          <p
            class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
          >
            Rwanda's inflation measured by the CPI rose 19.3% YoY in Mar 2023. Food prices increased
            41.3% YoY and 4.3% MoM, while alcoholic beverages, tobacco, and narcotics increased
            23.6% YoY and 0.7% MoM. Local products rose 20.8% YoY and 2.2% MoM, while imported
            products rose 14.8% YoY and 0.6% MoM. Transport increased 12% YoY and was stable MoM.
            <General_CPI />
            <a>Source:NISR 2022</a>
          </p>
        </div>
        <div class="p-2" id="Telecommunications">
          <h3
            class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Telecommunications
          </h3>
          <p
            class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 shadow-md"
          >
            During the fourth quarter of 2022, the mobile telephone services were dominated by two
            operators, namely MTN Rwanda Ltd and Airtel Rwanda Ltd. At the end of December 2022,
            Postpaid subscriptions were 149,448 & Prepaid was 10,852,630. making a total number of
            active mobile subscriptions of 11,002,078 SIM cards. Also during that period, a total of
            8,279,430 SIM cards were active and connected to the internet. The table provided below
            displays the number of subscriptions per operator.
          </p>
          <table
            class="table-auto w-full flex-shrink-0 text-2xl mx-auto p-2 border-gray-200 dark:border-gray-700 text-white dark:text-black-400 shadow-md"
          >
            <thead>
              <tr>
                <th class="px-4 py-2"></th>
                <th class="px-4 py-2">December 2021</th>
                <th class="px-4 py-2">December 2022</th>
                <th class="px-4 py-2">Quarterly Variation</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                <td>MTN Rwanda Ltd</td>
                <td class="px-4 py-2">6,954,523</td>
                <td class="px-4 py-2">7,088,906</td>
                <td class="px-4 py-2"><b>1.93%</b></td>
              </tr>
              <tr
                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <td>Airtel Rwanda Ltd</td>
                <td class="px-4 py-2">3,948,466</td>
                <td class="px-4 py-2">3,913,172</td>
                <td class="px-4 py-2">0.89%</td>
              </tr>
              <tr
                class="text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
              >
                <td>Total</td>
                <td class="px-4 py-2">10,902,989</td>
                <td class="px-4 py-2">11,002,078</td>
                <td class="px-4 py-2">0.91%</td>
              </tr>
            </tbody>
          </table>
          <div class="p-2" id="Top Players">
            <h3
              class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
            >
              Top Players
            </h3>
            <p
              class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
            >
              Based on the RURA report of 2022, a summarized market share of on-net and off-net
              minutes for MTN Rwanda Ltd and Airtel Rwanda Ltd in percentages representing the
              proportion of total minutes generated by each mobile network operator within their
              respective categories. It's important to note that these market shares are specific to
              the fourth quarter of 2022 and may change over time based on various factors such as
              network quality, pricing, promotions, and customer preferences.
              <Telecom_Data />
              <a>Source:RURA 2022</a>
            </p>
          </div>
          <div class="p-2" id="Internet">
            <h3
              class="mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
            >
              Internet
            </h3>
            <p
              class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
            >
              In Q4 2022, the country had a total international internet bandwidth capacity of
              187,954 Mbps, out of which the average utilized bandwidth was 108,273 Mbps.
              <Band_width />
              <a>Source:RURA 2022</a>
            </p>
            <br />
            <p
              class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
            >
              By December 2022, there was a 49.6% increase in fixed internet subscriptions as
              compared to Q4 2021. Of the total fixed internet subscriptions, 99.8% were subscribed
              to speeds equal to or greater than 256 kbps, while only 0.2% were subscribed to speeds
              below 256 kbps.
              <Internet_Distubution />
              <a>Source:RURA 2022</a>
            </p>
          </div>
        </div>
        <div id="Mobility" class="bg-transparent py-5 p-2">
          <h3
            class="pt-5 pb-3 mb-4 text-2xl font-extrabold md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Transport & Mobility
          </h3>
          <p
            class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
          >
            The bar chart below presents data on the number of cars and vehicle inspections between
            2017-2021. It's worth noting the difference in the number of cars, number of cars
            inspected, and number of inspections conducted. One possible explanation for this
            difference is the import of old second-hand vehicles, but other factors may also be at
            play.
            <Cars_Inspections />
            <a>Source:NISR 2022</a>
          </p>
          <br />
          <p
            class="flex-shrink-0 text-2xl mx-auto border-gray-200 dark:border-gray-700 text-white dark:text-black-400 rounded-lg shadow-md"
          >
            According to RNP's source data from the statistical year book of 2022, road accidents
            caused a death rate of 4.7 in 2021. To provide a better understanding of the types of
            accidents that occurred, I prepared a visual representation of the data categorised by
            accident type.
            <BarChart />
            <a>Source:NISR 2022</a>
          </p>
        </div>
      </div>
    </div>
    <div id="scrollspy1" class="sticky-header pl-3 text-white text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="nav-item py-1">
          <a class="nav-link" href="#Generalstats">General Statistics</a>
        </li>
        <li class="nav-item py-1">
          <a class="nav-link" href="#price index by Region">Consumer price index by Region</a>
        </li>
        <li class="nav-item py-1">
          <a class="nav-link" href="#Telecommunications">Telecommunications</a>
          <ul class="nav flex-column pl-3">
            <li class="nav-item py-1">
              <a class="nav-link" href="#Top Players">Top Players</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Internet">Internet</a>
            </li>
          </ul>
        </li>
        <li class="nav-item py-1">
          <a class="nav-link" href="#Mobility">Transport & Mobility</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cars_Inspections from '@/components/Cars_Inspections.vue'
import BarChart from '@/components/accident_data.vue'
import General_CPI from '@/components/CPI_Data.vue'
import Telecom_Data from '@/components/Telecom_data.vue'
import Internet_Distubution from '@/components/Internet_Distubution.vue'
/* import Band_width from '@/components/band_width.vue' */

export default {
  components: {
    Cars_Inspections,
    BarChart,
    General_CPI,
    Internet_Distubution,
    Telecom_Data /* Band_width */,
  },
  data() {
    return {
      activeTab: 'gdp',
      GDP: '',
    }
  },
}
</script>

<style scoped>
/*   .scrollspy-example {
    position: relative;
    height: 800px;
    overflow: auto;
  }
  .nav-pills .nav-link:hover {
  background-color: #999faa;
  color: #000;
} */

/* Tailwind CSS classes */
.scrollspy-example {
  position: relative;
  height: 800px;
  overflow: auto;
}

.nav-pills .nav-link:hover {
  background-color: #999faa;
  color: #000;
}

/* Animation Classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
