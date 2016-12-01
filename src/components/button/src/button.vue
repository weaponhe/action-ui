<template>
  <span
          class="button"
          @click="handleClick"
          :class="[
      'button--' + type,
      'size--' + size,
      disabled ? 'disabled' : ''
      ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </span>
</template>

<script>
    export default {
        name: 'acButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(e){
                if (!this.disabled) {
                    this.$emit('click', e);
                }
            }
        }
    }

</script>

<style scoped lang="less" rel="stylesheet/less">
    .button {
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        transition: all .3s ease;
        line-height: 1;
    }

    .size--default {
        margin: 0 5px;
        padding: 8px 20px;
        border-radius: 4px;
        font-size: 14px;
    }

    .size--lg {
        margin: 0 5px;
        padding: 10px 30px;
        border-radius: 6px;
        font-size: 18px;
    }

    .size--sm {
        margin: 0 3px;
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 10px;
    }

    .button--default {
        border-color: #e1e1e1;
        background: #f9f9f9 linear-gradient(180deg, #fff, #f9f9f9);
        color: #646464;
        &:hover {
            background: #eee linear-gradient(180deg, #f5f5f5, #eee);
        }
    }

    .button--primary {
        border-color: #5c81e3;
        background: #678ee7 linear-gradient(to bottom, #678ee7, #5078df);
        color: #FFF;
        &:hover {
            background: #6c8cd4 linear-gradient(180deg, #6c8cd4, #4769c2);
        }
    }

    .button--danger {
        border-color: #d43f3a;
        background: #d9534f linear-gradient(to bottom, #d9534f, #d03f3a);
        color: #FFF;
        &:hover {
            background: #c9302c linear-gradient(180deg, #c9302c, #b2302c);
        }
    }

    .button--success {
        border-color: #4cae4c;
        background: #5cb85c linear-gradient(to bottom, #5cb85c, #408439);
        color: #FFF;
        &:hover {
            background: #449d44 linear-gradient(180deg, #449d44, #408439);
        }
    }

    .button.disabled {
        border-color: #afafaf;
        background: #a9a9a9 linear-gradient(180deg, #b8b8b8, #a9a9a9);
        color: #FFF;
        cursor: not-allowed;
    }
</style>
