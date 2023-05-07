import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
/* import VueBrowserDetect from 'vue-browser-detect-plugin' */
import VueApexCharts from 'vue3-apexcharts'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL81bYrLhCHgayv27gsdechvyyWCRcArA",
  authDomain: "nindenkawe-3c105.firebaseapp.com",
  projectId: "nindenkawe-3c105",
  storageBucket: "nindenkawe-3c105.appspot.com",
  messagingSenderId: "527760969397",
  appId: "1:527760969397:web:6d9d1e52b18427152ab8fc",
  measurementId: "G-NMYZJK0HE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router, analytics, VueApexCharts).mount('#app')

Vue.component('apex-chart', VueApexCharts)


/* import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueBrowserDetectPlugin from 'vue-browser-detect-plugin'
import VueApexCharts from 'vue3-apexcharts'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL81bYrLhCHgayv27gsdechvyyWCRcArA",
  authDomain: "nindenkawe-3c105.firebaseapp.com",
  projectId: "nindenkawe-3c105",
  storageBucket: "nindenkawe-3c105.appspot.com",
  messagingSenderId: "527760969397",
  appId: "1:527760969397:web:6d9d1e52b18427152ab8fc",
  measurementId: "G-NMYZJK0HE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create the Vue app instance
const vueApp = createApp(App);

// Register plugins and mount app
vueApp.use(router);
vueApp.use(VueBrowserDetectPlugin);
vueApp.use(VueApexCharts);
vueApp.mount('#app');

// Add global properties
vueApp.config.globalProperties.$analytics = analytics;
vueApp.config.globalProperties.$device = Vue.$browserDetect.deviceType;

// Register global component
vueApp.component('apex-chart', VueApexCharts); */