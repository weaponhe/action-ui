<template>
    <message-box :show="show"
                 title="提示"
                 @close="close"
                 @ok="ok">

        <slot></slot>
        <div class="input"><input type="text" v-model="input"></div>
    </message-box>
</template>

<script>
    import MessageBox from '../../messageBox'
    export default {
        name: 'prompt',
        components: [MessageBox],
        data(){
            return {
                input: ''
            }
        },
        props: {
            show: Boolean
        },
        methods: {
            ok(){
                this.$emit('ok', this.input)
                this.close()
            },
            close(){
                this.input = ''
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .input {
        margin: 20px 0;
    }
</style>
