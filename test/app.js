import Vue from 'vue'
import App from './App.vue'

import Action from '../src/main.js'

Vue.use(Action)

new Vue({
  el: '#app',
  render: h => h(App)
})