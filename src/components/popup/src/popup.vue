<template>
    <div v-if="open"
         class="popup"
         :class="{modal,transparent}"
         :style="{zIndex:popupIndex,backgroundColor: transparent}"
         @click.self="close">
        <slot></slot>
    </div>
</template>

<script>
    import mixin from '../../popup-mixin'

    export default {
        name: 'popup',
        mixins: [mixin],
        props: {
            closeOnClickModal: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            close(){
                if (this.closeOnClickModal) {
                    this.$emit('close')
                }
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }

    .modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

</style>
