import Tooltip from './src/tooltip.vue'
Tooltip.install = function (Vue)
{
  Vue.component(Tooltip.name, Tooltip)
}
module.exports  = Tooltip
