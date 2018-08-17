<template>
  <div class="container">
    <BlockTitle title="工作经历"></BlockTitle>
    <div class="blue">
      <p>
        <span>无</span>
        <span class="time"> 2018.04-至今</span>
      </p>
      <p class="web"> web前端</p>
      <p class="study">离职到目前为止，自学软件技术</p>
      <div class="radius">
        <span>Javascript</span>
        <span>Vue.js</span>
        <span> css3</span>
      </div>
    </div>
  </div>
</template>

<script>
import BlockTitle from './BlockTitle'

export default {
  name: "Experience",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container {
    max-width: 770px;
    height: 160px;
    padding: 20px 30px;
    background: rgba(0, 0, 0, .1);
    border-top: 1px solid #999;
  }

  .time {
    font-size: 10px;
    color: #999;
    margin: 0 10px;
  }

  .web {
    font-size: 14px;
    font-weight: 600;
  }

  .study {
    font-size: 14px;
    color: #666;
  }

  .radius span {
    font-size: 10px;
    color: #555;
    padding: 5px 10px;
    border: 1px solid #555;
    border-radius: 25px;
  }

  .blue{
    height:140px;
  }
  .blue:hover {
    background: rgba(0, 0, 0, .2);
  }
</style>
