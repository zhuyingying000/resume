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
  html, body {
    width:100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .full-screen{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #8cc5ff;
  }
</style>
