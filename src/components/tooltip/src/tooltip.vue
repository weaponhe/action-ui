<template>
  <div class="tooltip">

    <div
      class="tooltip-rel"
      ref="reference"
      @mouseenter="handleShowPopper"
      @mouseleave="handleClosePopper">
      <slot></slot>
    </div>

    <div
      class="tooltip-popper"
      v-show="open"
      ref="popper"
      :class="['direction-' + direction,'theme-' + theme]"
    >
      <slot name="content">
        <div class="tooltip-popper-content" v-text="content"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tooltip',
    data(){
      return {
        open: false
      }
    },
    props: {
      openDelay: {
        type: Number,
        default: 0
      },
      content: String,
      direction: String,
      theme: {
        type: String,
        default: 'dark',
        validator: function (value) {
          return value === 'light' ? value : 'dark'
        }
      }
    },
    methods: {
      handleShowPopper(){
        this.timeout = setTimeout(() => {
          this.open = true
        }, this.openDelay)
      },
      handleClosePopper(){
        clearTimeout(this.timeout)
        this.open = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .tooltip {
    display: inline-block;
    position: relative;
    z-index: 1000000;
  }

  .tooltip-rel {
    display: inline-block;
  }

  .tooltip-popper {
    position: absolute;
    padding: 7px;
    border-radius: 3px;
  }

  .theme-dark {
    background-color: rgba(0, 0, 0, 0.8);
    color: #FFF;
  }

  .theme-light {
    background-color: #FFF;
    color: #555;
    border: 1px solid rgba(0, 0, 0, 0.8);
  }

  .theme-light::before {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    content: " ";
    border-width: 7px;
  }

  .tooltip-popper-content {
    white-space: nowrap;
  }

  .tooltip-popper::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    content: " ";
    border-width: 8px;
  }

  .direction-top {
    bottom: 100%;
    transform: translateX(-50%);
    left: 50%;
    margin-bottom: 10px;
  }

  .direction-bottom {
    top: 100%;
    transform: translateX(-50%);
    left: 50%;
    margin-top: 10px;
  }

  .direction-left {
    right: 100%;
    transform: translateY(-50%);
    top: 50%;
    margin-right: 10px;
  }

  .direction-right {
    left: 100%;
    transform: translateY(-50%);
    top: 50%;
    margin-left: 10px;
  }

  .direction-top::after {
    border-top-color: rgba(0, 0, 0, 0.8);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .theme-light.direction-top::before {
    border-top-color: #FFF;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    /*z-index: 1;*/
  }

  .direction-bottom::after {
    border-bottom-color: rgba(0, 0, 0, 0.8);
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .theme-light.direction-bottom::before {
    border-bottom-color: #FFF;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    /*z-index: 1;*/
  }

  .direction-left::after {
    border-left-color: rgba(0, 0, 0, 0.8);
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .theme-light.direction-left::before {
    border-left-color: #FFF;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    /*z-index: 1;*/
  }

  .direction-right::after {
    border-right-color: rgba(0, 0, 0, 0.8);
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .theme-light.direction-right::before {
    border-right-color: #FFF;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    /*z-index: 1;*/
  }

</style>
