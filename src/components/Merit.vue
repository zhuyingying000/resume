<template>
  <div class="container">
    <BlockTitle title="个人优势"></BlockTitle>
    <div class="hover">
      <p class="text">会日语和英语，能进行简单的会话。
        本人有一定的学习能力。转行自学软件技术，介意勿扰。</p>
      <p class="text"> 熟练HTML&CSS、了解HTML5&CSS3，</p>
      <p class="text"> 了解http协议和接口传输方式</p>
      <p class="text"> 熟悉javascript、jquery；bootstrap等传统框架。</p>
      <p class="text">了解vue组件化，vue-router，axios，scss</p>
      <p class="text">熟悉网站布局和页面架构，能够根据UI设计独立完成网站静态页面制作</p>
      <p class="text">本人有一定的学习能力。转行自学软件技术，介意勿扰。</p>
    </div>

  </div>
</template>

<script>
import BlockTitle from './BlockTitle'

export default {
  name: "merit",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 40px;
  }
  .text{
    font-size: 14px;
    color:#777;
  }
  .hover{
    width: 500px;

  }
.hover:hover{
  background:#CCFFFF;
  transition:2s;
}
</style>
