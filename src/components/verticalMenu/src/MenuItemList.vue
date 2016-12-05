<template>
    <ul class="menu-item-list">
        <menu-item v-for="item in data"
                   :data="item"
                   :depth="depth">
        </menu-item>
    </ul>
</template>

<script>
    export default {
        name: 'MenuItemList',
        props: {
            data: Array,
            depth: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped rel="stylesheet/less" lang="less">
    .menu-item-list {
        background-color: rgba(5, 5, 5, 0.2);
        padding-left: 0;
    }
</style>
