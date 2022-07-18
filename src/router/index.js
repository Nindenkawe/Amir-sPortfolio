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
    // route level code-splitting
    // this generates a separate chunk (services.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume-View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router