import Vue from 'vue'

import Button from './components/button'
import AppBar from './components/appBar'

let install = function () {
    Vue.component(Button.name, Button);
    Vue.component(AppBar.name, AppBar);
}

export default {
    install,
    AppBar
}