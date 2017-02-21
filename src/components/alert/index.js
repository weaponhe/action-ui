import Alert from './src/alert.vue'

Alert.install = function (Vue)
{
  Vue.component(Alert.name, Alert)
  // Vue.prototype.Alert = Alert
  // console.log(Alert)
}

module.exports = Alert
