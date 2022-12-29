import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import VueApexCharts from "vue3-apexcharts"

createApp(App).use(router, VueApexCharts).mount('#app')

Vue.config.productionTip = false

/* working on adding firebase */