<template>
    <div class="menu" :class="'theme-'+theme">
        <menu-item-list :data="data"></menu-item-list>
    </div>
</template>

<script>
    export default {
        name: 'verticalMenu',
        data(){
            return {
                leafList: [],
                branchList: [],
                activeLeaf: 0
            }
        },
        props: {
            data: Array,
            theme: {
                type: String,
                default: 'dark'
            }
        },
        methods: {
            changeActiveIndex(newActiveIndex){
                this.leafList[this.activeLeaf].active = false;
                this.leafList[newActiveIndex].active = true;
                this.activeLeaf = newActiveIndex;
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .menu {
        height: 100%;
        user-select: none;
        overflow-y: auto;
    }

    .theme-dark {
        background-color: #1f2f3d;
        color: #c0ccda;
    }

    .theme-light {

    }
</style>
