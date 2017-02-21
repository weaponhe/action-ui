var Select = require('./src/Select.vue')

Select.install = function (Vue)
{
  Vue.component(Select.name, Select)
}

module.exports = Select