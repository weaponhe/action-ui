import Button from './components/button'
import AppBar from './components/appBar'
import VMenu from './components/VMenu'
import Tooltip from './components/tooltip'
import Popup from './components/popup'
import Message from './components/Message'
import MessageBox from './components/messageBox'
import Alert from './components/alert'
import Confirm from './components/confirm'
import Prompt from './components/prompt'
import Icon from './components/icon'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Select from './components/select'

import Mixin from './components/mixin'

let install = function (Vue)
{
  Vue.use(Button)
  Vue.use(AppBar)
  Vue.use(VMenu)
  Vue.use(Tooltip)
  Vue.use(Popup)
  Vue.use(Message)
  Vue.use(MessageBox)
  Vue.use(Alert)
  Vue.use(Confirm)
  Vue.use(Prompt)
  Vue.use(Icon)
  Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(Select)
}

module.exports = {
  install,
  AppBar,
  Button,
  VMenu,
  Tooltip,
  Popup,
  Message,
  MessageBox,
  Alert,
  Confirm,
  Prompt,
  Icon,
  Input,
  Checkbox,
  Select,

  Mixin
}