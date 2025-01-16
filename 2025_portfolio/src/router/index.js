import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home-View',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Projects-View.vue'),
    },
  ],
})

export default router
