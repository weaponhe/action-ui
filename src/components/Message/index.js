import MessageComponent from './src/Message.vue'

export default function install(Vue)
{
  var inBrowser = typeof window !== 'undefined'

  var Message = {
    $vm: null,
    init: function (vm)
    {
      this.$vm = vm
    },
    add: function (msgObj)
    {
      var messageList = this.$vm.Message.messageList
      if (typeof msgObj === 'string') {
        msgObj = {type: 'success', text: msgObj}
      }
      messageList.push(msgObj)
      setTimeout(function ()
      {
        messageList.splice(0, 1, null)
        Vue.nextTick(function ()
        {
          messageList.shift()
        })
      }, 2000 * messageList.length)
    }
  }

  // const progressOptions = Object.assign(DEFAULT_OPTION, options)

  var VueMessageEventBus = new Vue({
    data: {
      Message: {
        messageList: []
      }
    }
  })

  if (inBrowser) {
    window.VueMessageEventBus = VueMessageEventBus
    Message.init(VueMessageEventBus)
  }

  Vue.component('message', MessageComponent)

  Vue.prototype.$Message = Message
}
