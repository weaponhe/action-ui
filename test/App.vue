<template>
    <div id="app">
        <vertical-menu>
            <menu-item :data="menu_today" vueRouter>
                <menu-item-list :data="menulist_project"></menu-item-list>
                <menu-item :data="menu_tomorrow" vueRouter>
                    <menu-item-list :data="menulist_project"></menu-item-list>
                </menu-item>
            </menu-item>
        </vertical-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                menu_today: {
                    title: '今日待办',
                    path:'/foo'
                },
                menu_tomorrow: {
                    title: '明日待办',
                    path:'/bar'
                },
                menulist_project: [{
                    title: '项目1',
                    active: true
                }, {
                    title: '项目2'
                }, {
                    title: '项目3'
                }]
            }
        }
    }
</script>

<style>

</style>
