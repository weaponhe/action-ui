<template>
    <message-box v-model="dataShow"
                 title="警告"
                 :showCancelButton="false"
                 @close="close"
                 @ok="ok">
        <slot></slot>
    </message-box>
</template>

<script>
  import MessageBox from '../../messageBox'
  import mixin from '../../mixin'

  export default {
    name: 'alert',
    components: {MessageBox},
    mixins: [mixin.ModelMixin],
    props: {
      show: Boolean,
      global: Boolean
    },
    data(){
      return {
        dataShow: false
      }
    },
    created(){
      console.log(this.show)
      if (this.global) {
        console.log("alter:", this.__proto__)
        this.constructor.prototype[this.$options.name] = {
          close: this.close,
          open: this.open
        }
      }
    },
    methods: {
      ok(){
        this.$emit('close')
        this.close()
      },
      open(){
        this.dataShow = false
      },
      close(){
        this.vModelValue = false
        this.dataShow    = false
        this.$emit('close')
      }
    },
    asd: {
//      open: this.methods.open,
//      close: this.methods.open
    }
  }
</script>

<style scoped>

</style>
