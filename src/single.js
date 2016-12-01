import Vue from 'vue'
import App from './App.vue'

import AppBar from '../dist/appBar'
import Button from '../dist/button'
import VerticalMenu from '../dist/verticalMenu'

Vue.use(AppBar)
Vue.use(Button)
Vue.use(VerticalMenu)

new Vue({
    el: '#app',
    render: h => h(App)
})