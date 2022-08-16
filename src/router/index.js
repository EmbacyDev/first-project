import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: HomeView
  },
  {
    path: '/brands',
    name: 'brands',
    props: true,
    component: () => import('../views/BrandsView.vue')
  },
  {
    path: '/career',
    name: 'career',
    props: true,
    component: () => import('../views/CareerView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    props: true,
    component: () => import('../views/BlogView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
