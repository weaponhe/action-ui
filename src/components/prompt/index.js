var Prompt = require('./src/prompt.vue')


Prompt.install = function (Vue)
{
  Vue.component(Prompt.name, Prompt)
}

module.exports = Prompt
