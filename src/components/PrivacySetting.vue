<template>
  <div>
    <p class="align">隐私设置<a href="" class="zero">设置</a></p>

    <p class="setting-item  align">
      <span>设置简历:</span>
      <span class="pull-right">对外开放</span>
    </p>

    <p class="setting-item  align"> 屏蔽公司:
      <span class="pull-right">以屏蔽<span class="zero">0</span>个</span></p>
  </div>
</template>

<script>
export default {
  name: "PrivacySetting"
}
</script>

<style scoped>
  div {
    width: 210px;
    height: 150px;
    padding: 10px;
    background: beige;
  }
  .align{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  a{
    text-decoration: none;
  }
  .setting-item{
    padding-bottom:20px;
  }
  .pull-right{
    color: #999;
  }
  .zero{
    color:deepskyblue;
  }
</style>
