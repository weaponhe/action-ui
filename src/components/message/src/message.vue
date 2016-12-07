<template>
  <transition name="message">
    <div class="message"
         v-if="open"
         :class="type"
         :style="{zIndex:popupIndex}">
      <span class="content"><slot></slot></span>
    </div>
  </transition>
</template>

<script>
  import mixin from '../../mixin'
  export default {
    name: 'message',
    mixins: [mixin.PopupMixin],
    props: {
      type: {
        type: String,
        default: 'success'//success/warning/info/error
      },
      duration: {
        type: Number,
        default: 2000
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .message {
    position: fixed;
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
  }

  @opacity: 0.6;
  .success {
    /*background-color: #4fc08d;*/
    background-color: rgba(79, 192, 141, @opacity);
  }

  .info {
    /*background-color: #20A0FF;*/
    background-color: rgba(32, 160, 255, @opacity);
  }

  .warning {
    /*background-color: #F7BA2A;*/
    background-color: rgba(247, 186, 42, @opacity);
  }

  .error {
    /*background-color: #FF4949;*/
    background-color: rgba(255, 73, 73, @opacity);
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
