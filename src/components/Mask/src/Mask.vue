<template>
    <transition name="mask">
        <div class="mask"
             v-if="vModelValue"
             :style="{zIndex:popupIndex,backgroundColor: transparent}"
             @click.self="handleClick">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
  import mixin from '../../mixin'

  export default {
    name: 'acMask',
    mixins: [mixin.PopupMixin, mixin.ModelMixin],
    props: {
      closeOnClickModal: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleClick(){
        if (this.closeOnClickModal) {
          this.vModelValue = false
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .mask-enter-active, .mask-leave-active {
        transition: all .2s ease;
    }

    .mask-enter, .mask-leave-active {
        opacity: 0;
        transform: scale(1.1);
    }

</style>
