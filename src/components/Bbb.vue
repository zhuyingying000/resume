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
  .container {
    padding: 10px 40px;
  }

  .text {
    font-weight: 700;
    font-size: 14px;
    padding: 20px;
  }

  .time {
    color: #999;
    font-size: 13px;
  }

  .hr {
    font-size: 14px;
    font-weight: 600;
    padding: 20px;
  }

  .ben {
    font-size: 14px;
    font-weight: 600;
    margin: 0 30px;
  }

  .jiaoyu {
    padding: 10px;
  }

  .blue:hover {
    background: #f2f5f9;
  }

  .center {
    font-size: 14px;
    text-align: center;
    color: #555;
    height: 40px;
    line-height:40px;
  }

  .center:hover {
    background: #f2f5f9;
  }
</style>

