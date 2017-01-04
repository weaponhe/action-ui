<template>
    <transition name="message">
        <div v-if="messageList[0]"
             class="message"
             :class="messageList[0].type">
            <span class="content">{{messageList[0].text}}</span>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
      console.log('Message Mounted:', this.messageList)
    },
    computed: {
      messageList(){
        return window.VueMessageEventBus.Message.messageList
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

    .message {
        position: fixed;
        z-index: 100000;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        min-width: 300px;
        max-width: 800px;
        padding: 0;
        height: 50px;
        line-height: 50px;
        background-color: #FFF;
        vertical-align: middle;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
        transition: all 0.4s;

        background-color: rgba(79, 192, 141, 0.6);
    }

    .success {
        /*background-color: #4fc08d;*/
        background-color: rgba(79, 192, 141, 0.6);
    }

    .info {
        /*background-color: #20A0FF;*/
        background-color: rgba(32, 160, 255, 0.6);
    }

    .warning {
        /*background-color: #F7BA2A;*/
        background-color: rgba(247, 186, 42, 0.6);
    }

    .error {
        /*background-color: #FF4949;*/
        background-color: rgba(255, 73, 73, 0.6);
    }

    .content {
        padding: 0 30px;
        color: #FFF;
        font-size: 18px;
    }

    .message-enter-active, .message-leave-active {
        top: 0;
    }

    .message-enter, .message-leave-active {
        opacity: 0;
        top: -50px;
    }
</style>