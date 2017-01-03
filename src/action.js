let Button = require('./components/button')
let AppBar = require('./components/appBar')
let VMenu  = require('./components/VMenu')
let Tooltip    = require('./components/tooltip')
let Popup      = require('./components/popup')
let Message    = require('./components/message')
let MessageBox = require('./components/messageBox')
let Alert      = require('./components/alert')
let Confirm    = require('./components/confirm')
// let Prompt     = require('./components/prompt')
let Icon       = require('./components/icon')
// let Input    = require('./components/input')
let Checkbox   = require('./components/checkbox')
let Select     = require('./components/select')

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
  // Vue.use(Prompt)
  Vue.use(Icon)
  // Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(Select)
}

module.exports = {
  install
  // AppBar,
  // VMenu,
  // Tooltip,
  // Popup,
  // Message,
  // MessageBox,
  // Alert,
  // Confirm,
  // Prompt,
  // Icon,
  // Input,
  // Checkbox,
  // Select
}