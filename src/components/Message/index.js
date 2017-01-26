import MessageComponent from './src/Message.vue'

export default function install(Vue)
{
  const inBrowser = typeof window !== 'undefined'

  let Message = {
    $vm: null,
    init (vm) {
      this.$vm = vm
    },
    add(msgObj){
      let messageList = this.$vm.Message.messageList
      if (typeof msgObj === 'string') {
        msgObj = {type: 'success', text: msgObj}
      }
      messageList.push(msgObj)
      setTimeout(() =>
      {
        messageList.splice(0, 1, null)
        Vue.nextTick(() =>
        {
          messageList.shift()
        })
      }, 2000 * messageList.length)
    }
  }

  // const progressOptions = Object.assign(DEFAULT_OPTION, options)

  const VueMessageEventBus = new Vue({
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
