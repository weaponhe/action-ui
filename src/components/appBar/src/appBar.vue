<template>
  <div class="ac-appbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot>
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appBar',
    props: {
      title: {
        type: String,
        default: ''
      },
      fixed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>


<style scoped lang="less" rel="stylesheet/less">

  .ac-appbar {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 8px;
    background-color: #1f2f3d;
    color: #c0ccda;
    .left, .right {
      display: flex;
      height: 100%;
      flex-shrink: 1;
      align-items: center;
      padding: 10px;
      cursor: pointer;
    }
    .middle {
      display: flex;
      padding-left: 8px;
      padding-right: 8px;
      flex-grow: 1;
      height: 100%;
      align-items: center;
    }
  }

  .fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
