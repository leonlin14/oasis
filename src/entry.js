import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Customized components
import App from './views/App.vue';

new Vue(App).$mount('#app');
