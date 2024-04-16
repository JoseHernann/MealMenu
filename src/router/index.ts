import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/mainPage.vue'), // Lazy load route component,
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: () => import('../pages/inputsPage.vue'),
    },
  ],
});

export default router;
