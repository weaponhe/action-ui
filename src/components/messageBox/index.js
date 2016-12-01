let MessageBox = require('./src/messageBox.vue')

MessageBox.install = function (Vue) {
    Vue.component(MessageBox.name, MessageBox)
}

module.exports = MessageBox

