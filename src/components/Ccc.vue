<template>
  <div class="container">
    <BlockTitle title="社交主页"></BlockTitle>
    <div>
      <a href="https://github.com/zhuyingying000">https://github.com/zhuyingying000</a>
    </div>
    <p class="center">+添加项目内容</p>
  </div>

</template>

<script>
import BlockTitle from './BlockTitle'

export default {
  name: "Ccc",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container {
    max-width: 770px;
    height: 135px;
    padding: 20px 30px;
    background: rgba(0, 0, 0, .1);
    border-top: 1px solid #999;
    /*border-bottom: 1px solid #999;*/
  }

  .center {
    text-align: center;
    color: #555;
    padding: 15px 0;
    height: 10px;
    line-height: 10px;
    font-size: 14px;
  }

  .center:hover {
    background: rgba(0, 0, 0, .1);
  }


</style>


