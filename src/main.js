import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import shell from "../node_modules/vue-shell";

createApp(App).mount('#app')
Vue.use(shell)
