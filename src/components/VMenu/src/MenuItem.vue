<template>
    <div class="menu-item"
         :class="{disable:path===undefined,autoActive}"
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
  import Icon from '../../Icon'
  export default {
    name: 'VMenuItem',
    components: {Icon},
    props: {
      title: String,
      path: [String, Object],
      expandable: Boolean,
      expanded: Boolean,
      router: {
        type: Boolean,
        default: true
      },
      autoActive: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      tag(){
        return this.path ? this.router ? 'router-link' : 'a' : 'div'
      }
    }
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
        &.autoActive.router-link-active {
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
