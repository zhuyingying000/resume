<template>
  <div >
    <div class="align">隐私设置<a href="" class="zero">设置</a></div>

    <div class="setting-item ">
      <span>设置简历:</span>
      <span class="pull-right">对外开放</span>
    </div>

    <div class="setting-item  "> 屏蔽公司:
      <span class="pull-right">以屏蔽<span class="zero">0</span>个</span></div>
  </div>
</template>

<script>
export default {
  name: "PrivacySetting"
}
</script>

<style scoped>
  div {
    background: #fff;
  }
  .align{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top:20px;
    padding:20px 20px 0  20px;
  }
  a{
    text-decoration: none;
  }
  .setting-item{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding:20px;
  }
  .pull-right{
    color: #999;
  }
  .zero{
    color:#65b3d4;
  }
</style>
