let VerticalMenu = require('./src/VerticalMenu.vue')
let MenuItem = require('./src/MenuItem.vue')
let MenuItemList = require('./src/MenuItemList.vue')

VerticalMenu.install = function (Vue) {
    Vue.component(VerticalMenu.name, VerticalMenu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(MenuItemList.name, MenuItemList)
}

module.exports = VerticalMenu