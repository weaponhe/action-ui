<template>
    <div class="menu-item"
         :class="{disable:path===undefined}"
         :is="tag"
         :to="path"
         :href="'#'+path?path:''"
         exact>
        <span v-if="expandable"
              @click="$emit('expand')">
            <icon name="arrow-right"
                  :size="12"
                  class="icon-arrow"
                  :class="{expanded}">
            </icon>
        </span>
        <span>{{title}}</span>
    </div>
</template>

<script>
  import Icon from '../../icon'
  export default {
    name: 'VMenuItem',
    components: {Icon},
    props: {
      title: String,
      path: [String, Object],
      expandable: Boolean,
      expanded: Boolean
    },
    computed: {
      root(){
        //保存verticalMenu节点
        let parent = this.$parent
        while (parent && parent.$options.name !== 'VMenu') {
          parent = parent.$parent
        }
        return parent
      },
      router(){
        return this.root.router
      },
      tag(){
        return this.path ? this.router ? 'router-link' : 'a' : 'div'
      }
    }
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
        line-height: 35px;
        padding: 0 1.5em 0 2em;
        font-size: 15px;
        text-decoration: none;
        box-sizing: border-box;
        transition: color .2s ease, border-color .2s ease;
        border-left: 5px solid transparent;
        cursor: default;
        color: #555;

        &:not(.disable):hover {
            background-color: #ddd;
            cursor: pointer;
        }
        &.router-link-active {
            border-color: #4fc08d;
            color: #4fc08d;
        }
        .icon-arrow {
            float: left;
            width: 2em;
            text-align: center;
            cursor: pointer;
            margin-left: -2em;
            transition: transform .2s ease;
            &.expanded {
                display: inline-block;
                transform: rotate(90deg);
            }
        }
    }

</style>
