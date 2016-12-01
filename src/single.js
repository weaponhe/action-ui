import Vue from 'vue'
import App from './App.vue'

import AppBar from '../dist/appBar'
import Button from '../dist/button'
import VerticalMenu from '../dist/verticalMenu'
import Tooltip from '../dist/tooltip'
import Popup from '../dist/popup'
import Message from '../dist/message'
import MessageBox from '../dist/messageBox'
import Alert from '../dist/alert'
import Confirm from '../dist/confirm'
import Prompt from '../dist/prompt'

Vue.use(AppBar)
Vue.use(Button)
Vue.use(VerticalMenu)
Vue.use(Tooltip)
Vue.use(Popup)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Prompt)

new Vue({
    el: '#app',
    render: h => h(App)
})