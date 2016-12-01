import Vue from 'vue'
import App from './App.vue'

import Action from '../src/main'

Vue.use(Action)

new Vue({
  el: '#app',
  render: h => h(App)
})