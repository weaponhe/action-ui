<template>
    <div class="wapper">
        <input type="checkbox" name="" v-model="vModelValue"/>
        <label @click.stop="clickLabel" :class="'size-'+size">
        </label>
    </div>
</template>

<script>
    import mixin from '../../mixin'
    export default {
        name: 'AcCheckbox',
        mixins: [mixin.ModelMixin],
        props: {
            size: {
                type: String,
                default: 'default',
                validator(value){
                    return value === 'large' ||
                        value === 'small' ||
                        value === 'mini' ||
                        value === 'default'
                }
            }
        },
        methods: {
            clickLabel(){
                this.vModelValue = !this.vModelValue
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

    .wapper {
        display: inline-block;
        position: relative;
        width: auto;

        input {
            opacity: 0;
        }

        input[type=checkbox]:checked + label::after {
            opacity: 1;
        }

        label {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            background: #eee;
            border: 1px solid #ddd;

            &:after {
                opacity: 0.1;
                content: '';
                position: absolute;
                background: transparent;
                border-top: none !important;
                border-right: none !important;
                transform: rotate(-45deg);
            }

            &.size-mini {
                width: 12px;
                height: 12px;
            }

            &.size-mini:after {
                border: 2px solid #333;
                width: 5px;
                height: 3px;
                top: 2.5px;
                left: 3px;
            }

            &.size-small {
                width: 15px;
                height: 15px;
            }

            &.size-small:after {
                border: 2px solid #333;
                width: 6px;
                height: 4px;
                top: 3px;
                left: 4px;
            }

            &.size-default {
                width: 20px;
                height: 20px;
            }

            &.size-default:after {
                border: 3px solid #333;
                width: 8px;
                height: 4px;
                top: 5px;
                left: 5px;
            }

            &.size-large {
                width: 25px;
                height: 25px;
            }

            &.size-large:after {
                border: 3px solid #333;
                width: 9px;
                height: 5px;
                top: 6px;
                left: 7px;
            }

            &:hover::after {
                opacity: 0.5;
            }
        }

    }
</style>
