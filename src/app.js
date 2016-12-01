import Vue from 'vue'
import App from './App.vue'

import AppBar from '../dist/appBar'
import Button from '../dist/button'

Vue.component(AppBar.name, AppBar);
Vue.component(Button.name, Button);

new Vue({
    el: '#app',
    render: h => h(App)
})