import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('@/views/details.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
