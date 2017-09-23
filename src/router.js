import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import About from './components/About.vue'
import Coins from './components/Coins.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
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
