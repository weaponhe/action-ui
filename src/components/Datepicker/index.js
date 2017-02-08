let Datepicker = require('./src/Datepicker.vue')

Datepicker.install = function (Vue)
{
  Vue.component(Datepicker.name, Datepicker)
}

module.exports = Datepicker