let VMenu      = require('./src/VMenu.vue')
let VMenuItem  = require('./src/VMenuItem.vue')
let VMenuGroup = require('./src/VMenuGroup.vue')

VMenu.install = function (Vue)
{
  Vue.component(VMenu.name, VMenu)
  Vue.component(VMenuItem.name, VMenuItem)
  Vue.component(VMenuGroup.name, VMenuGroup)
}

module.exports = VMenu