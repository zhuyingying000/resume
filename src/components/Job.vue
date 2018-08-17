<template>
  <div class="container">
    <BlockTitle title="职位期望"></BlockTitle>
    <p class="p1">
      <span>web前端</span>
      <span>4-5千</span>
      <span>移动互联网</span>
      <span>大连</span>
    </p>
    <p class="p1">
      <span>TTML5</span>
      <span>4-6k</span>
      <span>不限</span>
      <span>大连</span>
    </p>
    <p class="push p1" >+添加期望职位</p>

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
    max-width: 770px;
    height: 150px;
    padding: 20px 30px;
    background: rgba(0,0,0,.1);
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
    background:rgba(0,0,0,.2);
  }
</style>
