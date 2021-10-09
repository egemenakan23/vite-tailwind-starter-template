import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/index.html', redirect: '/' },

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:pathMatch(.*)*',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/panel/' : ''),
    baseUrl: process.env.NODE_ENV === 'production' ? '/panel/' : '/',
    routes,
})

export default router
