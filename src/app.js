import Vue from 'vue'
import App from './App.vue'

import AppBar from '../dist/appBar'

Vue.component(AppBar.name, AppBar);

new Vue({
    el: '#app',
    render: h => h(App)
})