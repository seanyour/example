import {createRouter, createWebHashHistory} from 'vue-router';
import Layout from "components/Layout/Layout.vue";
import components from "router/modules/components";

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
                    name: 'Dashboard',
                    meta: {title: 'dashboard'},
                    component: () => import("views/Dashboard/Dashboard.vue"),
                },
                {
                    path: 'clipboard',
                    name: 'Clipboard',
                    meta: {title: 'clipboard'},
                    component: () => import("views/Clipboard/Clipboard.vue"),
                },
                {
                    path: 'guide',
                    name: 'Guide',
                    meta: {title: 'guide'},
                    component: () => import("views/Guide/Guide.vue"),
                },
                {
                    path: 'theme',
                    name: 'Theme',
                    meta: {title: 'theme'},
                    component: () => import("views/Theme/Theme.vue"),
                },
                {
                    path: 'i18n',
                    name: 'I18n',
                    meta: {title: 'i18n'},
                    component: () => import("views/I18n/I18n.vue"),
                },
                components,
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
            component: () => import("components/NotFound/NotFound.vue")
        },
    ]
})

export default router
