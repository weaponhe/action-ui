<template>
    <transition name="popup">
        <popup v-if="show"
               :open="show"
               modal
               @close="close">

            <div class="wrapper">

                <div class="header">
                    <slot name="header">
                        <h3 class="clearfix">
                            <span class="title">{{title}}</span>
                            <span v-if="showCloseIcon" class="close" @click="close">
                                <icon name="error" :size="20"></icon>
                              </span>
                        </h3>
                    </slot>
                </div>

                <div class="main">
                    <slot>
                    </slot>
                </div>

                <div class="footer">
                    <slot name="footer">
                        <ac-button type="success" @click="ok">确定</ac-button>
                        <ac-button v-if="showCancelButton" @click="close">取消</ac-button>
                    </slot>
                </div>

            </div>
        </popup>
    </transition>
</template>

<script>
    import popup from '../../popup'
    import icon from '../../icon'
    import acButton from '../../button'
    export default {
        name: 'messageBox',
        components: {popup, acButton},
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: String,
            showCloseIcon: {
                type: Boolean,
                default: true
            },
            showCancelButton: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            ok(){
                this.$emit('ok')
            },
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .wrapper {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 70%;
        max-width: 700px;
        background-color: #FFF;

        .header {
            margin: 20px 0;
            padding: 0 20px;
            .title {
                float: left;
                color: #42b983;
            }
            .close {
                float: right;
                cursor: pointer;
                &:hover {
                    color: #999;
                }
            }
        }

        .main {
            margin: 20px 0;
            padding: 0 20px;
        }

        .footer {
            padding: 20px;
            text-align: right;
        }
    }

    .popup-enter-active, .popup-leave-active {
        transition: all .3s ease;
    }

    .popup-enter, .popup-leave-active {
        opacity: 0;
        transform: scale(1.1);
    }
</style>
