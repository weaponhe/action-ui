<template>
    <message-box :show="show"
                 title="提示"
                 @close="close"
                 @ok="ok">

        <slot></slot>
        <div class="input">
            <ac-input v-model="input"></ac-input>
        </div>
    </message-box>
</template>

<script>
    import MessageBox from '../../messageBox'
    import Input from '../../input'
    export default {
        name: 'prompt',
        components: [MessageBox, Input],
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
