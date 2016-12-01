import Vue from 'vue'

import Button from './components/button'
import AppBar from './components/appBar'
import VerticalMenu from './components/verticalMenu'
import Tooltip from './components/tooltip'
import Popup from './components/popup'
import Message from './components/message'

let install = function (Vue) {
    Vue.use(Button)
    Vue.use(AppBar)
    Vue.use(VerticalMenu)
    Vue.use(Tooltip)
    Vue.use(Popup)
    Vue.use(Message)
}

module.exports = {
    install,
    AppBar,
    Button,
    VerticalMenu,
    Tooltip,
    Popup,
    Message
}