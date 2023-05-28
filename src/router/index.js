import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-View.vue'

const routes = [
  {
    path: '/',
    name: 'Home-View',
    component: Home
  },
  {
    path: '/Resume',
    name: 'Resume-View',
    component: () => import('../views/Resume-View.vue')
  },
  {
    path: '/Data_visualization',
    name: 'Data_visualization',
    component: () => import('../views/Data_visualization.vue')
  },
  {
    path: '/My_version_of_RSE.rw',
    name: 'My_version_of_RSE.rw',
    component: () => import('../views/RSE_rw.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})
export default router