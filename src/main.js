import Vue from 'vue'

import AppBar from './components/appBar'

let install = function () {
    Vue.component(AppBar.name, AppBar);
}

export default {
    install,
    AppBar
}