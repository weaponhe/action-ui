var Checkbox = require('./src/Checkbox.vue')

Checkbox.install = function (Vue)
{
  Vue.component(Checkbox.name, Checkbox)
}

module.exports = Checkbox