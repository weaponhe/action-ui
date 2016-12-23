let VerticalMenu = require('./src/VerticalMenu.vue')
let MenuItem     = require('./src/MenuItem.vue')
let MenuGroup    = require('./src/MenuGroup.vue')

VerticalMenu.install = function (Vue)
{
  Vue.component(VerticalMenu.name, VerticalMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(MenuGroup.name, MenuGroup)
}

module.exports = VerticalMenu