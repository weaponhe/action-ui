<template>
  <i class="icon iconfont" :class="'icon-'+name" :style="{fontSize:size+'px'}"></i>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 16
      }
    }
  }
</script>

<style scoped>

  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1479430523383'); /* IE9*/
    src: url('iconfont.eot?t=1479430523383#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('iconfont.woff?t=1479430523383') format('woff'), /* chrome, firefox */ url('iconfont.ttf?t=1479430523383') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('iconfont.svg?t=1479430523383#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-email:before {
    content: "\e605";
  }

  .icon-atm:before {
    content: "\e606";
  }

  .icon-calendar:before {
    content: "\e607";
  }

  .icon-account:before {
    content: "\e608";
  }

  .icon-favorite:before {
    content: "\e609";
  }

  .icon-success:before {
    content: "\e60a";
  }

  .icon-warning:before {
    content: "\e60b";
  }

  .icon-prompt:before {
    content: "\e60c";
  }

  .icon-error:before {
    content: "\e60d";
  }

  .icon-favorites-filling:before {
    content: "\e60e";
  }

  .icon-arrow-right:before {
    content: "\e610";
  }

  .icon-arrow-left:before {
    content: "\e611";
  }

  .icon-arrow-up:before {
    content: "\e612";
  }

  .icon-arrow-down:before {
    content: "\e613";
  }

  .icon-add:before {
    content: "\e614";
  }

  .icon-minus:before {
    content: "\e615";
  }

  .icon-arrow-double-left:before {
    content: "\e616";
  }

  .icon-arrow-double-right:before {
    content: "\e617";
  }

  .icon-close:before {
    content: "\e618";
  }

  .icon-search:before {
    content: "\e619";
  }

  .icon-arrow-down-filling:before {
    content: "\e61a";
  }

  .icon-arrow-up-filling:before {
    content: "\e61b";
  }

  .icon-ascending:before {
    content: "\e61c";
  }

  .icon-descending:before {
    content: "\e61d";
  }

  .icon-ashbin:before {
    content: "\e61e";
  }

  .icon-box:before {
    content: "\e61f";
  }

  .icon-cart:before {
    content: "\e620";
  }

  .icon-clock:before {
    content: "\e621";
  }

  .icon-cry:before {
    content: "\e622";
  }

  .icon-delete-filling:before {
    content: "\e623";
  }

  .icon-download:before {
    content: "\e624";
  }

  .icon-share:before {
    content: "\e625";
  }

  .icon-filter:before {
    content: "\e626";
  }

  .icon-help:before {
    content: "\e627";
  }

  .icon-history:before {
    content: "\e628";
  }

  .icon-phone:before {
    content: "\e62a";
  }

  .icon-picture:before {
    content: "\e62b";
  }

  .icon-refresh:before {
    content: "\e62d";
  }

  .icon-select:before {
    content: "\e62e";
  }

  .icon-semi-select:before {
    content: "\e62f";
  }

  .icon-service:before {
    content: "\e630";
  }

  .icon-smile:before {
    content: "\e631";
  }

  .icon-sorting:before {
    content: "\e632";
  }

</style>
