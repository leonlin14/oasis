import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// require('../../node_modules/vuetify/src/stylus/main.styl')

// Customized components
import App from './views/App.vue';

new Vue(App).$mount('#app');
