var Input = require('./src/input.vue')

Input.install = function (Vue)
{
  Vue.component(Input.name, Input)
}

module.exports = Input