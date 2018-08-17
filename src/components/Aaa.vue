<template>
  <div class="container">
    <BlockTitle title="工作经历"></BlockTitle>
    <p class="center">+添加项目内容</p>
  </div>

</template>

<script>
import BlockTitle from './BlockTitle'
export default {
  name: "Aaa",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container{
    max-width: 770px;
    height: 100px;
    padding: 20px 30px;
    background: rgba(0, 0, 0, .1);
    border-top: 1px solid #999;
    /*border-bottom: 1px solid #999;*/
  }
  .center{
    text-align: center;
    color: #555;
    padding:15px 0;
    height:10px;
    line-height:10px;
    font-size: 14px;
  }
  .center:hover{
    background: rgba(0,0,0,.1);
  }
</style>
