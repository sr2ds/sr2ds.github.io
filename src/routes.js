import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home.vue'
import Trajectory from '@/pages/Trajectory.vue'
import Updates from '@/pages/Updates.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/trajectory', component: Trajectory, name: 'trajectory' },
    { path: '/updates', component: Updates, name: 'updates' }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router