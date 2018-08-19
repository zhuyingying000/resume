<template>
  <div class="full-screen">
    <router-view class="full-screen"/>
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'
export default {
  name: 'App'
}
</script>

<style>

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
