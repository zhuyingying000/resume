<template>
  <div class="line">
    <div class="left">

      <el-row>


        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
          <div class="link">
            <p class="black">企业服务</p>
            <a href="">搜索职位</a>
            <a href="">新闻搜索</a>
            <a href="">BOSS直聘APP</a>
          </div>
        </el-col>


        <el-col :span="5">
          <div class="grid-content bg-purple"></div>
          <div class="link">
            <p class="black">使用与帮助</p>
            <a href="">用户协议与隐私政策</a>
            <a href="">防骗指南</a>
            <a href="">职位发布规则</a>
            <a href="">使用帮助</a>
          </div>
        </el-col>


        <el-col :span="9">
          <div class="grid-content bg-purple-light"></div>
          <div class="connection">
            <p class="black">联系我们</p>
            <p>北京华品博睿网络技术有限公司</p>
            <p>公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302</p>
            <p> 联系电话 010-8415063</p>
          </div>
        </el-col>


        <el-col :span="6" class="right">
          <div class="grid-content bg-purple-light"></div>
          <div class="boss">
            <img src="../assets/footer-logo.png" alt="">
            <p>企业服务热线 400 065 5799</p>
            <p>工作日 9:30 - 18:30</p>
          </div>
          <div class="">
            <div class="icon-border">
              <i class="iconfont icon-xinlang icon"></i>
            </div>
            <div class="icon-border">
              <i class="iconfont icon-weixin1 icon"></i>
            </div>
            <div class="icon-border">
              <i class="iconfont icon-app-store icon"></i>
            </div>
          </div>
        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .line {
    background: #fff;
    padding-top: 10px;
  }

  .left {
    max-width: 1000px;
    margin: 0 auto;

  }

  .link a {
    text-decoration: none;
    color: #999;
    font-size: 10px;
    display: block;
    padding: 5px 0;
  }

  .link a:hover {
    color: #00d7c6;
  }

  p {
    font-size: 10px;
    color: #555;
  }

  .right {
    text-align: right;
  }

  .right img {
    width: 88px;
    height: 16px;
    padding-top: 10px;
  }

  .icon-border {
    border: 1px solid #f0000000;
    border-radius: 50%;
    display: inline-block;
    height: 40px;
    width: 40px;
    text-align: center;
    padding-top: 8px;
    box-sizing: border-box;
  }

  .icon {
    font-size: 20px;
    color: #899;
  }

  .icon-border:hover {
    border: 1px solid gray;
   transition: 2s;
  }
</style>
