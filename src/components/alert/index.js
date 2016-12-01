let Alert = require('./src/alert.vue')

Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert)
}

module.exports = Alert
