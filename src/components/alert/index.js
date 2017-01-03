let Alert = require('./src/alert.vue')

Alert.install = function (Vue)
{
  Vue.component(Alert.name, Alert)
  // Vue.prototype.Alert = Alert
  console.log(Alert)
}

module.exports = Alert
