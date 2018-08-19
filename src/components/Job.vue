<template>
  <div class="container">
    <BlockTitle title="职位期望"></BlockTitle>
    <p class="p1">
      <span><i class="iconfont icon-qian1 "></i>web前端</span>
      <span> <i class="iconfont icon-qian"> </i>4-5千</span>
      <span> <i class="iconfont icon-image"></i>移动互联网</span>
      <span><i class="iconfont icon-icon-"></i>大连</span>
    </p>
    <p class="p1">
      <span> <i class="iconfont icon-qian1"></i>TTML5</span>
      <span> <i class="iconfont icon-qian"></i>4-6k</span>
      <span> <i CLASS="iconfont icon-image"></i>不限</span>
      <span> <i class="iconfont icon-icon-"></i>大连</span>
    </p>
    <p class="push p1" > <i class="icongont icon-icon-"></i>+添加期望职位</p>

  </div>
</template>

<script>
import BlockTitle from './BlockTitle'
export default {
  name: "job",
  components: {
    BlockTitle
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 40px;
  }
  .container span{
  margin-right:50px;
    color:#777;
    font-size: 14px;
    height:30px;
    line-height: 30px;

  }
  .push{
    color:#555;
   position:relative;
  text-align: center;
    height:30px;
    line-height: 30px;
  }
  .p1:hover{
   background: #F2F5F9;
  }
</style>
