import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "views/Home.vue";
import Layout from "components/Layout/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import("views/Dashboard/index.vue"),
          meta: {title: 'dashboard'}
        }
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
      path: '/:pathMatch(.*)*',
      component: () => import("components/NotFound/index.vue")
    }

  ]
})

export default router
