<template>
    <div class="menu-group">
        <menu-item :title="title" :path="path"></menu-item>
        <div class="child-menu-list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import MenuItem from './MenuItem.vue'
  export default {
    name: 'menuGroup',
    components: {MenuItem},
    props: {
      title: String,
      path: [String, Object],
//      expandable: {
//        type: Boolean,
//        default: true
//      }
    }
//    data() {
//      return {
//        active: false,
//        isLeaf: true,
////                container: this.vueRouter ? 'router-link' : 'div'
//      }
//    },
//    computed: {
//      opened(){
//        return !this.isLeaf && this.active
//      },
//      root(){
//        //保存verticalMenu节点
//        let parent = this.$parent
//        while (parent && parent.$options.name !== 'verticalMenu') {
//          parent = parent.$parent
//        }
//        return parent
//      },
//      depth(){
//        let count  = 0
//        let parent = this.$parent
//        while (parent && parent.$options.name !== 'verticalMenu') {
//          parent.$options.name === 'menuItem' && count++
//          parent = parent.$parent
//        }
//        return count
//      }
//    },
//    watch: {
//      active(newActive){
//        if (newActive) {
//          let parentItem = this.$parent.$parent
//          if (parentItem.$options.name === 'menuItem') {
//            parentItem.active = true
//          }
//        }
//      }
//    },
//    methods: {
//      handleClick(){
//        if (this.isLeaf) {
//          //叶子节点，改变根节点存储的状态
//          if (!this.active) {
//            this.root.changeActiveIndex(this.index)
//          }
//        } else {
//          //中间节点，只改变状态
//          this.active = !this.active
//        }
//      }
//    },
//    mounted(){
//      this.isLeaf = !(this.$slots && this.$slots.default)
//      if (this.isLeaf) {
//        this.index = this.root.leafList.length
//        this.root.leafList.push(this)
//        if (this.data.active) {
//          this.root.changeActiveIndex(this.index)
//        }
//      } else {
//        this.index = this.root.branchList.length
//        this.root.branchList.push(this)
//      }
//    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">

    .menu-group {
        .child-menu-list {
            text-indent: 1em;
        }
    }
</style>
