<template>
  <div class="container">

    <div class="update-time">
      <p class="time">最后更新 2018.08.14 23:05</p>
      <el-button type="text" class="btn">预览简历</el-button>
    </div>

    <div class="item-primary">
      <div class="user-con">
        <p class="name"> 朱莹莹</p>
        <div class="labels">
          <p><span> 6年经验</span>
            <span>本科学历</span>
            <span>离职-随时到岗</span></p>
          <span class="test"><i class="iconfont icon-weibiaoti-"></i> 13190130610</span>
          <span>z1798363558</span>
        </div>
      </div>
      <img src="../assets/name.jpg" alt="" class="avatar">
    </div>

  </div>

</template>

<script>
export default {
  name: "Advantage"
}
</script>

<style scoped>
  .container {
    max-width: 770px;
    padding: 20px 30px;
    margin: 0 auto;
    height: 200px;
    background: whitesmoke;
    position: relative;
  }

  .update-time {
    display: flex;
    justify-content: space-between;
  }

  .update-time .time {
    font-size: 10px;
    color: #999;
  }

  .update-time .btn {
    color: black;
  }

  .name {
    font-size: 20px;
    font-weight: 600;
  }

  .item-primary {
    width: 730px;
    height: 138px;
  }

  .user-con {
    width: 413px;
    height: 138px;
  }
.labels{
  margin-left:-15px;
}
  .labels span {
    margin-left: 20px;
    font-size: 14px;
    color: #999;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  img {
    position: absolute;
    right: 30px;
    top: 70px;
  }

  .test:before{
    content: '';
  }
</style>
