import Vue from 'vue'
import App from './App.vue'
import Message from '../src/components/Message2'
Vue.use(Message)
new Vue({
  el: '#app',
  render: h => h(App)
})