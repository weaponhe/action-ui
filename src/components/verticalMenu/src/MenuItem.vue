<template scope="props">
    <a class="menu-item"
       :is="router?'router-link':'a'" :to="path" :href="'#'+path" exact>
        {{title}}
    </a>
</template>

<script>
  export default {
    name: 'menuItem',
    props: {
      title: String,
      path: [String, Object],
    },
    computed: {
//            opened(){
//                return !this.isLeaf && this.active
//            },
      root(){
        //保存verticalMenu节点
        let parent = this.$parent
        while (parent && parent.$options.name !== 'verticalMenu') {
          parent = parent.$parent
        }
        return parent
      },
      router(){
        return this.root.router
      }
    },
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

    .menu-item {
        display: block;
        line-height: 45px;
        cursor: pointer;
        padding: 0 1em;
        font-size: 15px;
        text-decoration: none;
        box-sizing: border-box;
        list-style: none;
        transition: color .2s cubic-bezier(.645, .045, .355, 1);
        border-left: 5px solid transparent;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .router-link-active {
        border-left: 5px solid #4fc08d;
        color: #4fc08d;
    }
</style>
