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
/*   {
    path: '/Data_visualization',
    name: 'Data_visualization',
    component: () => import('')
  }, */
/*   {
    path: '/My_version_of_RSE.rw',
    name: 'My_version_of_RSE.rw',
    component: () => import('')
  } */
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router