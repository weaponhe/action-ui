let Icon = require('./src/icon.vue')

Icon.install = function (Vue) {
    Vue.component(Icon.name, Icon)
}

module.exports = Icon