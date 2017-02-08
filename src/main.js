import Button from './components/button'
import AppBar from './components/appBar'
import VMenu from './components/VMenu'
import Tooltip from './components/tooltip'
import Mask from './components/Mask'
import Message from './components/Message'
import MessageBox from './components/messageBox'
import Alert from './components/alert'
import Confirm from './components/confirm'
import Prompt from './components/prompt'
import Icon from './components/icon'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Select from './components/select'
import Datepicker from './components/Datepicker'

import Mixin from './components/mixin'

let install = function (Vue)
{
  Vue.use(Button)
  Vue.use(AppBar)
  Vue.use(VMenu)
  Vue.use(Tooltip)
  Vue.use(Mask)
  Vue.use(Message)
  Vue.use(MessageBox)
  Vue.use(Alert)
  Vue.use(Confirm)
  Vue.use(Prompt)
  Vue.use(Icon)
  Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(Select)
  Vue.use(Datepicker)
}

export default {
  install,
  AppBar,
  Button,
  VMenu,
  Tooltip,
  Mask,
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