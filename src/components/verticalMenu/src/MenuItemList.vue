<template>
    <div class="menu-item-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MenuItemList',
        mounted(){
            console.log('Mounted')
        }
    }
</script>

<style scoped rel="stylesheet/less" lang="less">
    .menu-item-list {
        /*background-color: rgba(5, 5, 5, 0.2);*/
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
