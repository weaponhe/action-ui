import Vue from 'vue'
import App from './App.vue'

import Action from '../dist/action'
console.log(Action)

Vue.use(Action)

new Vue({
    el: '#app',
    render: h => h(App)
})