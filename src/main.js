import Vue from 'vue'

import Button from './components/button'
import AppBar from './components/appBar'
import VerticalMenu from './components/verticalMenu'
import Tooltip from './components/tooltip'
import Popup from './components/popup'

let install = function (Vue) {
    Vue.use(Button)
    Vue.use(AppBar)
    Vue.use(VerticalMenu)
    Vue.use(Tooltip)
    Vue.use(Popup)
}

module.exports = {
    install,
    AppBar,
    Button,
    VerticalMenu,
    Tooltip,
    Popup
}