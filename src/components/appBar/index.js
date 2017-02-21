var AppBar = require('./src/appBar.vue')

AppBar.install = function (Vue)
{
  Vue.component(AppBar.name, AppBar)
}

module.exports = AppBar
