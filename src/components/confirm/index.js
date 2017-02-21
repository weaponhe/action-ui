var Confirm = require('./src/confirm.vue')

Confirm.install = function (Vue)
{
  Vue.component(Confirm.name, Confirm)
}

module.exports = Confirm
