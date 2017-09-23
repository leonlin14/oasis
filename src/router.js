import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import About from './components/About.vue'
import Coins from './components/Coins.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/coins/:id',
            name: 'Coins',
            component: Coins
        }
    ]
})
