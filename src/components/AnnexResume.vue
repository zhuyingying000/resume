<template>
  <div class="content">
<h3 class="title">简历附件</h3>
    <P class="size "> <i class="el-icon-document">朱莹莹简历.doc</i></P>
    <el-button type="primary">新增简历附件</el-button>
    <p class="gray">支持 DOC、DOCX、PDF、JPG、PNG格式附件，文件大小不超过10M</p>

  </div>
</template>

<script>
export default {
  name: "AnnexResume"
}
</script>

<style scoped>
.content{
  width:210px;
  height:253px;
  background: rgba(0,0,0,.1);
 padding: 10px;
}
  .title{
    font-size: 14px;
  }

  .gray{
   width:174px;
    height:75px;
    font-size: 10px;
   color:#999;
  }
  .el-button{
    width:152px;
    height:42px;
    background: deepskyblue;
  }
</style>
