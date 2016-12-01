<template>
    <div id="app">
        <app-bar></app-bar>
        <vertical-menu :data="navTree"></vertical-menu>
        <tooltip content="left tooltip" direction="bottom">
            <ac-button type="success">点击</ac-button>
        </tooltip>
        <popup open modal></popup>
    </div>
</template>

<script>
    let navTree = [
        {
            title: "item1",
            icon: "smile",
            children: [
                {
                    title: "item1-1"
                }, {
                    title: "item1-2",
                    children: [
                        {
                            title: "item1-2-1",
                            active: true
                        },
                        {
                            title: "item1-2-2",
                            active: true
                        }
                    ]
                }
            ]
        },
        {
            title: "item2",
            icon: "smile",
            children: [
                {
                    title: "item2-1"
                }, {
                    title: "item2-2",
                    icon: "smile"
                }
            ]
        }, {
            title: "item3",
            icon: "smile",
            children: [
                {
                    title: "item3-1"
                }, {
                    title: "item3-2"
                }
            ]
        }
    ]

    export default {
        name: 'app',
        data () {
            return {
                navTree
            }
        }
    }
</script>

<style>

</style>
