<template>
    <div class="wrapper">
        <input type='text'
               :disabled="disabled"
               :placeholder="placeholder"
               :class="{['size-'+size]:size}"
               v-model="vModelValue">
    </div>
</template>

<script>
    import mixin from '../../mixin'
    export default {
        name: 'acInput',
        mixins: [mixin.ModelMixin],
        props: {
            disabled: Boolean,
            size: {
                type: String,
                validator(value){
                    return value === 'large' ||
                        value === 'small' ||
                        value === 'mini'
                }
            },
            placeholder: String,
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        margin: 10px 0;
    }

    input {
        width: 100%;
        height: 36px;
        padding: 3px 10px;
        box-sizing: border-box;
        background-color: #fff;
        background-image: none;
        outline: none;
        border: 1px solid #c0ccda;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        font-size: 14px;
        &[disabled] {
            background-color: #eff2f7;
            border-color: #d3dce6;
            color: #bbb;
            cursor: not-allowed;
        }
        &:focus {
            outline: none;
            border-color: #20a0ff;
        }
        &.size-large {
            height: 42px;
            font-size: 16px;
        }
        &.size-small {
            height: 30px;
        }
        &.size-mini {
            height: 22px;
        }
    }
</style>
