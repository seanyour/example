import { createRouter, createWebHistory } from 'vue-router';
import Home from "views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/example',
      name: 'home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import("views/NotFound.vue")
    }

  ]
})

export default router
