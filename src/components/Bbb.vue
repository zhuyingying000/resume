<template>
  <div class="container">
    <BlockTitle title="教育经历"></BlockTitle>
    <div class="blue">
    <div class="jiaoyu">
      <span class="text"> 东北师范大学</span>
      <span class="time"> 2008-2012</span>
    </div>
    <div class="jiaoyu">
      <span class="hr">人力资源管理</span>
      <span class="ben">本科</span>
    </div>
    </div>
    <p class="center">+添加项目内容</p>
  </div>

</template>

<script>
import BlockTitle from './BlockTitle'
export default {
  name: "Bbb",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container{
    padding: 10px 40px;
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
  .text{
    font-weight: 700;
    font-size: 14px;
   padding:20px;
  }
  .time{
    color: #999;
    font-size: 13px;
  }
  .hr{
    font-size: 14px;
   font-weight: 600;
    padding:20px;

  }
  .ben{
    font-size: 14px;
    font-weight: 600;
    margin: 0 30px;
  }
  .jiaoyu{
    padding:10px;
  }
  .blue:hover{
    background: rgba(0,0,0,.1);
  }
</style>

