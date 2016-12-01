let Tooltip = require('./src/tooltip.vue')
Tooltip.install = function (Vue) {
    Vue.component(Tooltip.name, Tooltip)
}
module.exports = Tooltip
