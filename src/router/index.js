import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import More from '../views/More.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/photosPage',
        name: 'PhotosPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PhotosPage.vue')
    },
    {
        path: '/more',
        name: 'More',
        component: More
    },
]

const router = new VueRouter({
    routes
})

export default router
