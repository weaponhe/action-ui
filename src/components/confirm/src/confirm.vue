<template>
    <message-box :show="show"
                 title="确认"
                 @close="close"
                 @ok="ok">
        <slot></slot>
    </message-box>
</template>

<script>
    import MessageBox from '../../messageBox'
    export default {
        name: 'confirm',
        components: [MessageBox],
        props: {
            show: Boolean,
            message: String
        },
        methods: {
            ok(){
                this.$emit('ok')
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
