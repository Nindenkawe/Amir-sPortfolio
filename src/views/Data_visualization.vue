<template>
<div class="grid grid-cols-3 ">
  <div class="col-span-2">
    <div data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200" class="scrollspy-example">
      <section id="Generalstats-1">
        <h3 class="text-xl dark:text-white font-semibold pt-5 pb-3">RW General Statistics</h3>
        <div class="flex p-2 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg">
          <button type="button" class="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6">
            Gross Domestic Product &middot; 2,709
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
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Rwanda's population is 13,246,394 people as of August 2022, with an annual growth rate of 2.3% from 2012 to 2022. 
          Females make up 51.5% and males 48.5% of the population. Life expectancy at birth is 69.6 years, up from 51.2 years in 2002 
          and 64.5 years in 2012.
        </p>
        <br>
<!--         <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
           add viz
        </p> -->
      </section>
      <section id="price index by Region">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Consumer price index by Region </h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          Rwanda's inflation measured by the CPI rose 19.3% YoY in Mar 2023 (down from 20.8% in Feb 2023).
          Food prices increased 41.3% YoY and 4.3% MoM, while alcoholic beverages, tobacco, 
          and narcotics increased 23.6% YoY and 0.7% MoM. Local products rose 20.8% YoY and 2.2% MoM, 
          while imported products rose 14.8% YoY and 0.6% MoM. Transport increased 12% YoY and was stable MoM.
          <General_CPI/>
          <b>Source:NISR</b>
        </p>
      </section>
      <section id="Market statistics(IPO)">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Market statistics(IPO)</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          The Rwanda Stock Exchange (RSE) had five listed companies with a total market capitalization of $4 billion as of September 2021.
          Despite the pandemic, the RSE All Share Index had increased by 12% since the beginning of the year. The RSE is working to attract more listings and investors, 
          with initiatives such as an alternative market for smaller companies and a mobile trading platform.
        </p>
        <br>
<!--         <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
        
        </p> -->
        <section id="All Stocks">
          <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">All stocks</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          </p>
          <br>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
      
            
          </p>
        </section>
        <section id="Performing Stocks">
          <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Performing Stocks</h3>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
        
            
          </p>
          <br>
          <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          <IPO_Data/>
          </p>
        </section>
      </section>
      <section id="Mobility-4">
        <h3 class="text-xl font-semibold pt-5 pb-3 dark:text-white">Transport & Traffic</h3>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          The bar chart below presents data on the number of cars and vehicle inspections between 2017-2021, sourced from RRA and RNP. 
          It's worth noting the difference in the number of cars, number of cars inspected, and number of inspections conducted. 
          One possible explanation for this difference is the import of old second-hand vehicles, but other factors may also be at play.
          <Cars_Inspections />
          <b>Source:NISR</b>
        </p>
        <br>
        <p class="flex-shrink-0 text-2xl mx-auto p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-lg shadow-md">
          According to the RNP's source data for the statistical year book of 2022, road accidents caused a death rate of 4.7 in 2021.
          To provide a better understanding of the types of accidents that occurred, we have prepared a visual representation of the data categorised by accident type.
          <BarChart/>
          <b>Source:NISR</b>
        </p>
      </section>
    </div>
  </div>

  <div>
    <div id="scrollspy1" class="sticky-top pl-3 dark:text-white text-sm">
      <ul class="nav nav-pills menu-sidebar">
        <li class="py-1">
          <a class="nav-link" href="#Generalstats-1">General Statistics</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#price index by Region">Consumer price index by Region</a>
        </li>
        <li class="py-1">
          <a class="nav-link" href="#Market statistics(IPO)">Market statistics(IPO)</a>
          <ul class="nav flex-column pl-3">
            <li class="py-1">
              <a class="nav-link" href="#All Stocks">All Stocks</a>
            </li>
            <li>
              <a class="nav-link" href="#Performing Stocks">Performing Stocks</a>
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
<script>
  import Cars_Inspections from '@/components/Cars_Inspections.vue'
  import BarChart from '@/components/accident_data.vue'
  import General_CPI from '@/components/CPI_Data.vue'
  import IPO_Data from '@/components/IPO_data.vue'
  
  export default{
    components: {
      Cars_Inspections, BarChart, General_CPI, IPO_Data
    }
    
  }
</script>

<style scoped>
  /* Styles required only for the example above */
  .scrollspy-example {
    position: relative;
    height: 600px;
    overflow: auto;
  }
</style>