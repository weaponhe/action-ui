<template>
    <div>
        <div :is="container"
             :to="data.path"
             class="container">
            <div class="menu-item"
                 @click="handleClick"
                 :class="{active:isLeaf && active,opened:!isLeaf && active}"
                 :style="{ paddingLeft: ((depth + 1) * 20) + 'px'}">
          <span v-if="data.icon" class="item-icon">
            <icon :name="data.icon"></icon>
          </span>
                <span>
               {{data.title}}-{{depth}}-{{isLeaf?'leaf':'internal'}}
           </span>
                <span class="arrow-icon" v-if="!isLeaf">
            <icon v-if="opened" name="arrow-up"></icon>
            <icon v-else name="arrow-down"></icon>
            </span>
            </div>
        </div>

        <div v-if="!isLeaf" v-show="opened" :style="{backgroundColor:'rgba(5,5,5,' + 0.2*depth + ')'}">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import Icon from '../../icon'
    export default {
        name: 'menuItem',
        components: {Icon},
        props: {
            data: Object,
            vueRouter: Boolean
        },
        data() {
            return {
                active: false,
                isLeaf: true,
                container: this.vueRouter ? 'router-link' : 'div'
            }
        },
        computed: {
            opened(){
                return !this.isLeaf && this.active
            },
            root(){
                //保存verticalMenu节点
                let parent = this.$parent
                while (parent && parent.$options.name !== 'verticalMenu') {
                    parent = parent.$parent
                }
                return parent
            },
            depth(){
                let count = 0
                let parent = this.$parent
                while (parent && parent.$options.name !== 'verticalMenu') {
                    parent.$options.name === 'menuItem' && count++
                    parent = parent.$parent
                }
                return count
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
                    //叶子节点，改变根节点存储的状态
                    if (!this.active) {
                        this.root.changeActiveIndex(this.index)
                    }
                } else {
                    //中间节点，只改变状态
                    this.active = !this.active
                }
            }
        },
        mounted(){
            this.isLeaf = !(this.$slots && this.$slots.default)
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

<style scoped rel="stylesheet/less" lang="less">
    .container {
        color: #CCC;
        text-decoration: none;
    }

    .menu-item {
        display: block;
        position: relative;
        line-height: 55px;
        cursor: pointer;
        padding-right: 20px;
        font-size: 18px;
        box-sizing: content-box;
        list-style: none;
        transition: color .2s cubic-bezier(.645, .045, .355, 1);

        &:hover {
            background-color: #475669;
        }
        &.active {
            color: #03a9f4;
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
