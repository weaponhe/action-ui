import Vue from 'vue'
import App from './App.vue'

import AppBar from '../dist/appBar'
import Button from '../dist/button'
import VerticalMenu from '../dist/verticalMenu'
import Tooltip from '../dist/tooltip'

Vue.use(AppBar)
Vue.use(Button)
Vue.use(VerticalMenu)
Vue.use(Tooltip)

new Vue({
    el: '#app',
    render: h => h(App)
})