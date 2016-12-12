<template>
    <select v-model="vModelValue" :class="{['size-'+size]:size}">
        <option class="option" v-for="(option,index) in options" :value="option.value">{{option.text}}</option>
    </select>
</template>

<script>
    import mixin from '../../mixin'
    export default {
        name: 'AcSelect',
        mixins: [mixin.ModelMixin],
        props: {
            options: {
                type: Array
            },
            size: {
                type: String,
                validator(value){
                    return value === 'large' ||
                        value === 'small' ||
                        value === 'mini'
                }
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    select {
        height: 36px;
        padding: 3px 10px;
        box-sizing: border-box;
        background-color: #fff;
        background-image: none;
        outline: none;
        border: 1px solid #c0ccda;
        border-radius: 4px;
        appearance: none;
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
        .option {
            font-size: 14px;
        }
        &.size-large .option {
            font-size: 16px;
        }
    }
</style>
