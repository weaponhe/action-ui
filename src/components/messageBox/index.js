import MessageBox from './src/messageBox.vue'

MessageBox.install = function (Vue)
{
  Vue.component(MessageBox.name, MessageBox)
}

module.exports = MessageBox

