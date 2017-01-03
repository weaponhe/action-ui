<template>
    <div class="menu">
        <slot>
        </slot>
    </div>
</template>

<script>
  export default {
    name: 'VMenu'
  }
</script>

<style scoped rel="stylesheet/less" lang="less">

    .menu {
        height: 100%;
        user-select: none;
        overflow-y: auto;
    }

</style>
