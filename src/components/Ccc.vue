<template>
  <div class="container">
    <BlockTitle title="社交主页"></BlockTitle>
    <div class="link">
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
    padding: 10px 40px;
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

  .link {
    margin: 20px 20px 0 70px;
  }

  .link:hover {
    background: rgba(0, 0, 0, .1);
  }

  a {
    text-decoration: none;
    color: #999;
    font-size: 14px;
  }

</style>


