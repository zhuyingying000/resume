<template>
  <div class="container">
    <BlockTitle title="社交主页"></BlockTitle>
    <div class="link">
      <a href="https://github.com/zhuyingying000"><i class="iconfont icon-githubsquare cat"></i>https://github.com/zhuyingying000</a>
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
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .center:hover {
    background: #f2f5f9;
  }

  .link {
    padding-top: 20px;
    height: 40px;
    line-height: 40px;
  }

  .link:hover {
    background: #f2f5f9;
  }

  a {
    text-decoration: none;
    color: #999;
    font-size: 14px;
  }

  .cat {
    font-size: 30px;
    padding: 0 20px;

  }
</style>


