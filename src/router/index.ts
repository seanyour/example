import { createRouter, createWebHistory } from 'vue-router';
import Home from "views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/example/',
      name: 'home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/example/swiper',
      name: 'swiper',
      component: () => import("@/views/Swiper.vue")
    },
    {
      path: '/example/confetti',
      name: 'confetti',
      component: () => import("@/views/CanvasConfetti.vue")
    },

    {
      path: '/:pathMatch(.*)*',
      component: () => import("views/NotFound.vue")
    }

  ]
})

export default router
