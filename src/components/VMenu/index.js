import Menu from './src/Menu.vue'
import MenuItem from './src/MenuItem.vue'
import MenuGroup from './src/MenuGroup.vue'

Menu.install = function install(Vue)
{
  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(MenuGroup.name, MenuGroup)
}

export default Menu