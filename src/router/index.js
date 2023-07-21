import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home-View.vue';

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
  }
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // If a saved position is available, restore it
    return savedPosition;
  } else if (to.hash) {
    // If the route has a hash (anchor), scroll to it
    return {
      el: to.hash,
      behavior: 'smooth'
    };
  } else {
    // Scroll to the top of the page
    return { top: 0, behavior: 'smooth' };
  }
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

// Track scroll events
/* let scrollTimeout = null;
let scrollCount = 0;
const timeoutDuration = 3500; // 3.5 seconds

window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollCount++;
  scrollTimeout = setTimeout(checkScrollEnd, timeoutDuration);
});

function checkScrollEnd() {
  if (scrollCount >= 7) {
    const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isScrolledToBottom) {
      router.push('/Projects');
    }
  }

  // Reset scroll count after the timeout
  scrollCount = 0;
} */

export default router;
