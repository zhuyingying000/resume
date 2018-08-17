<template>
  <div>


    <el-row class="update-time">
      <el-col :span="12">
        <div class="time">最后更新 2018.08.14 23:05</div>
      </el-col>
      <el-col :span="12" class="pre">
        <a>预览简历</a>
      </el-col>
    </el-row>

    <el-row class="detail">
      <el-col :span="18">
        <p class="name"> 朱莹莹</p>
        <div class="labels">
          <p><span> 6年经验</span>
            <span>本科学历</span>
            <span>离职-随时到岗</span></p>
          <span class="test"><i class="iconfont icon-weibiaoti-"></i> 13190130610</span>
          <span>z1798363558</span>
        </div>
      </el-col>
      <el-col :span="6" class="pre">
        <img src="../assets/name.jpg" alt="" class="avatar">
      </el-col>
    </el-row>


  </div>

</template>

<script>
export default {
  name: "Advantage"
}
</script>

<style scoped>
  .update-time {
    padding: 0 40px;
  }

  .pre {
    text-align: right;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .detail {
    margin: 20px 40px 0;
  }
</style>
