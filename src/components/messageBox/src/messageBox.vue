<template>
    <ac-mask v-model="vModelValue"
             @close="close">

        <div class="wrapper">

            <div class="header">
                <slot name="header">
                    <h3>
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
                    <ac-button v-if="showOKButton" type="success" @click="ok">确定</ac-button>
                    <ac-button v-if="showCancelButton" @click="close">取消</ac-button>
                </slot>
            </div>

        </div>
    </ac-mask>
</template>

<script>
  import AcMask from '../../Mask'
  import icon from '../../Icon'
  import AcButton from '../../button'
  import mixin from '../../mixin'

  export default {
    name: 'messageBox',
    mixins: [mixin.ModelMixin],
    components: {AcMask, AcButton, icon},
    props: {
      title: String,
      showCloseIcon: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      showOKButton: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      ok(){
        this.$emit('ok')
        this.vModelValue = false
      },
      close(){
        this.vModelValue = false
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
                /*float: left;*/
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
</style>
