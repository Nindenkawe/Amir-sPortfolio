<!-- <template>
   <section class="my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
     <div class="text-2xl md:text-2xl container mx-auto p-4 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg shadow-md">
       <div class="float-none" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
         <img class="rounded w-36 h-36" src="../assets/bitme/help.png" alt="Help">
       </div>
       <h4 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
       {{Greetings}}
       <p>
       <span>{{Amir.En}}</span>
       <span>{{Amir.Arb}}</span>
       </p>
       </h4>
   
       <div id="input-line">
       </div>
       <div>
         <div class="flex inset-x-0 bottom-0 h-16">
         <input
           class=" placeholder:italic placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
           dark:text-white " required placeholder="/message: 'Your message'" type="text" name="search"
           autofocus
         />
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script>
   export default{
     data() {
     return {
       Banner:["hellp"],
       Header: null,
       Greetings: "Hello welcome to my portfolio web-app or my exercise page",
       send_mail: null,
       Amir:{
         En:"Amir",
         Arb:"amir"
       }
     }
 
   }
   }
 </script> -->
 
 <!-- <template>
  <div class="row">
      <div class="col-md-12">
          <h3>Cat Facts</h3>
      </div>
      <div class="col-md-12">
          <ul class="list-group">
              <li v-for="(fact, index) in catFacts" :key="index" class="list-group-item">{{index + 1}}. {{fact.text}}</li>
          </ul>
      </div>
      <div class="row mt-3">
          <div class="col-md-12 text-center">
              <button @click="loadMoreFacts" class="btn btn-md btn-primary">{{ fetchingFacts ? '...' : 'Load more' }}</button>
          </div>
      </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  interface AnimalFacts {
      text: string
  }
  export default defineComponent({
      name: 'AnimalFacts',
      data() {
          return {
              catFacts: [] as AnimalFacts[],
              fetchingFacts: false
          }
      },
      methods: {
          async fetchCatFacts() {
              const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
              this.catFacts = catFactsResponse.data
          },
          async loadMoreFacts() {
              this.fetchingFacts = true
              const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
              this.catFacts.push(...(catFactsResponse.data || []))

              this.fetchingFacts = false
          }
      },
      async mounted() {
          await this.fetchCatFacts()
      }
  })
</script> -->