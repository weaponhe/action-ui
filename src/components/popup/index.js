let Popup = require('./src/popup.vue')

Popup.install = function (Vue) {
    Vue.component(Popup.name, Popup)
}

module.exports = Popup
