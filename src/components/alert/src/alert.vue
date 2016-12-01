<template>
  <message-box :show="show"
               title="警告"
               :showCancelButton="false"
               @close="close"
               @ok="ok">
    <slot></slot>
  </message-box>
</template>

<script>
  import MessageBox from '../../messageBox'
  export default {
    name: 'alert',
    components: [MessageBox],
    props: {
      show: Boolean
    },
    methods: {
      ok(){
        this.$emit('close')
        this.close()
      },
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
