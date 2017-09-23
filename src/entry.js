import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)

// require('../../node_modules/vuetify/src/stylus/main.styl')

// Customized components
import App from './App.vue';

// new Vue(App).$mount('#app');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
