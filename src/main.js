import Vue from 'vue'

import Button from './components/button'
import AppBar from './components/appBar'
import VerticalMenu from './components/verticalMenu'

let install = function (Vue) {
    Vue.use(Button)
    Vue.use(AppBar)
    Vue.use(VerticalMenu)
}

module.exports = {
    install,
    AppBar,
    Button,
    VerticalMenu
}