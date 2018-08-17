<template>
  <div class="full-screen">
    <router-view class="full-screen"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 797256 */
    src: url('//at.alicdn.com/t/font_797256_0re3syekm7m.eot');
    src: url('//at.alicdn.com/t/font_797256_0re3syekm7m.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_797256_0re3syekm7m.woff') format('woff'),
    url('//at.alicdn.com/t/font_797256_0re3syekm7m.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_797256_0re3syekm7m.svg#iconfont') format('svg');
  }

  html, body {
    width:100%;
    /*height: 100%;*/
    padding: 0;
    margin: 0;
  }
  .full-screen{
    width:100%;
    height: 100%;
    padding: 0;

    /*background:rgba(0,0,0,.1)*/
  }
</style>
