import { createRouter, createWebHistory } from 'vue-router';
import Home from "views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import("@/views/Swiper.vue")
    },
    {
      path: '/confetti',
      name: 'confetti',
      component: () => import("@/views/CanvasConfetti.vue")
    },

    {
      path: '/template',
      component: () => import("views/Template/index.vue")
    },

    {
      path: '/:pathMatch(.*)*',
      component: () => import("views/NotFound.vue")
    }

  ]
})

export default router
