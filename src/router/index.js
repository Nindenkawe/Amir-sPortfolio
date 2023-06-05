import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-View.vue'

const routes = [
  {
    path: '/',
    name: 'Home-View',
    component: Home
  },
  {
    path: '/Projects',
    name: 'Projects-View',
    component: () => import('../views/Projects-View.vue')
  },
  {
    path: '/finance_viz',
    name: 'finance_viz',
    component: () => import('../components/Dashboards/finance-data.vue')
  },
/*   {
    path: '/health_viz',
    name: 'health_viz',
    component: () => import('')
  } */
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router