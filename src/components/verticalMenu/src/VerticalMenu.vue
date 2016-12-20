<template>
    <div class="menu" :class="['theme-'+theme,{activeShow}]" >
        <slot></slot>
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
            theme: {
                type: String,
                default: 'dark'
            },
//            vueRouter: Boolean
            activeShow: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            changeActiveIndex(newActiveIndex){
                this.leafList[this.activeLeaf].active = false;
                this.leafList[newActiveIndex].active = true;
                this.activeLeaf = newActiveIndex;
            }
        }
    }
</script>

<style scoped rel="stylesheet/less" lang="less">

    .menu {
        height: 100%;
        user-select: none;
        overflow-y: auto;
    }

    .theme-dark {
        /*background-color: #1f2f3d;*/
        /*color: #c0ccda;*/
    }

</style>
