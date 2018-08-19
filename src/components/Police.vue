<template>
  <div class=" police">
    <p class="content">
      <span>Copyright © 2018 BOSS直聘</span>
      <span>京ICP备14013441号-5</span>
      <img src="../assets/icon-badge-1.png" alt="">
      <a href="https://www.zhipin.com">电子营业执照 </a>
      <a href="http://www.beian.gov.cn"> 京公网安备11010502032801</a>
      <img src="../assets/icon-beian.png" alt="">
      <a href="http://sdwj.zhipin.com"> 首都网警</a>
    </p>
  </div>
</template>


<script>
export default {
  name: "Police"
}
</script>

<style scoped>
  .content {
    background: #fff;
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  .content img {
    width: 16px;
    height: 16px;
  }

  .content span {
    font-size: 10px;
    color: #999;
    margin-right: 15px;
  }

  .content a {
    text-decoration: none;
    font-size: 10px;
    color: #555;
    margin-right: 15px;
  }
  .content a:hover{
    color: #6adbcf;
    transition: 1s;
  }
</style>
