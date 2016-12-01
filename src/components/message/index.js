let Message = require('./src/message.vue')

Message.install = function (Vue) {
    Vue.component(Message.name, Message)
}

module.exports = Message