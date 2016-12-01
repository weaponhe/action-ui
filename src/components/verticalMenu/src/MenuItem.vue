<template>
    <div>
        <li class="menu-item"
            @click="handleClick"
            :class="{active:isLeaf && active,opened:!isLeaf && active}"
            :style="{paddingLeft:((depth+1)*20)+'px'}">
      <span v-if="data.icon" class="item-icon">
        <icon :name="data.icon"></icon>
      </span>
            {{data.title}}
            <span class="arrow-icon" v-if="!isLeaf">
        <icon v-if="opened" name="arrow-up"></icon>
        <icon v-else name="arrow-down"></icon>
      </span>
        </li>
        <menu-item-list v-if="!isLeaf"
                        v-show="opened"
                        :data="data.children"
                        :depth="depth+1">
        </menu-item-list>
    </div>
</template>

<script>
    import Icon from '../../icon'
    export default {
        name: 'menuItem',
        components: {Icon},
        data() {
            return {
                active: false
            }
        },
        props: {
            data: Object,
            depth: Number
        },
        computed: {
            isLeaf(){
                return !(this.data.children && this.data.children.length)
            },
            opened(){
                return !this.isLeaf && this.active
            },
            root(){
                let parent = this.$parent
                while (parent.$options.name !== 'verticalMenu') {
                    parent = parent.$parent
                }
                return parent
            }
        },
        watch: {
            active(newActive){
                if (newActive) {
                    let parentItem = this.$parent.$parent
                    if (parentItem.$options.name === 'menuItem') {
                        parentItem.active = true
                    }
                }
            }
        },
        methods: {
            handleClick(){
                if (this.isLeaf) {
                    this.root.changeActiveIndex(this.index)
                    //changeHash
                } else {
                    this.active = !this.active
                }
            }
        },
        created(){
            if (this.isLeaf) {
                this.index = this.root.leafList.length
                this.root.leafList.push(this)
                if (this.data.active) {
                    this.root.changeActiveIndex(this.index)
                }
            } else {
                this.index = this.root.branchList.length
                this.root.branchList.push(this)
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .menu-item {
        position: relative;
        line-height: 55px;
        cursor: pointer;
        padding-right: 20px;
        font-size: 18px;
        box-sizing: content-box;
        list-style: none;

        &:hover {
            background-color: #475669;
        }
        &.active {
            color: #03a9f4;
        }
        &.opened {

        }
        .arrow-icon {
            position: absolute;
            right: 20px;
            font-size: 10px;
        }
        .item-icon {
            margin-right: 10px;
        }
    }
</style>
