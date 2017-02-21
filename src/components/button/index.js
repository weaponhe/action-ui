import Button from './src/button.vue'

Button.install = function (Vue)
{
  Vue.component(Button.name, Button)
}

module.exports = Button
