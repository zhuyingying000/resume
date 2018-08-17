<template>
  <div>
    <div class="width">
      <div class="align">
        <div class="link">
          <p class="black">企业服务</p>
          <a href="">搜索职位</a>
          <a href="">新闻搜索</a>
          <a href="">BOSS直聘APP</a>
        </div>
        <div class="link">
          <p class="black">使用与帮助</p>
          <a href="">用户协议与隐私政策</a>
          <a href="">防骗指南</a>
          <a href="">职位发布规则</a>
          <a href="">使用帮助</a>
        </div>
        <div class="connection">
          <p class="black">联系我们</p>
          <p>北京华品博睿网络技术有限公司</p>
          <p>公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302</p>
          <p> 联系电话 010-8415063</p>
        </div>
        <div class="boss">
          <img src="../assets/footer-logo.png" alt="">
          <p>企业服务热线 400 065 5799</p>
          <p>工作日 9:30 - 18:30</p>
        </div>
      </div>


      <div class="icon">
        <a href="http://www.weibo.com/bosszhipin"><img src=""  class="icon-weibo"></a>


      </div>
      <div class=" remark">
        <p>Copyright © 2018 BOSS直聘京ICP备14013441号-5
          <a href="" class="black">电子营业执照</a>
          <a href="" class="black">公安网备案11010502032801</a>
          <a href="" class="black">首都管网</a>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  div {
    background: honeydew;
  }

  .width {
    height: 203px;
    max-width: 1000px;
    margin: 0 auto;
    padding:10px 0;
  }

  .align {
    display: flex;
    justify-content: space-around;
  }

  .align a {
    display: block;

  }
  .align a:hover {
   color: deepskyblue;
    transition:1s;
  }

  a {
    text-decoration: none;
    color: #999;
    font-size: 10px;
  }

  p {
    font-size: 10px;
    color:#999;

  }
.boss img{
  width:100px;
  margin-top:15px;
}
  .black{
color: black;
    margin:20px 0;
  }
  .link a{
    padding:5px;
  }
</style>
