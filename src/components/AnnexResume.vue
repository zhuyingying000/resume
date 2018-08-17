<template>
  <div class="content1">
    <div class="title">简历附件</div>
    <div class="size "><i class="el-icon-document">朱莹莹简历.doc</i></div>
    <el-button type="primary">新增简历附件</el-button>
    <div class="gray">支持 DOC、DOCX、PDF、JPG、PNG格式附件，文件大小不超过10M</div>

  </div>
</template>

<script>
export default {
  name: "AnnexResume"
}
</script>

<style scoped>
  .content1 {
    background: #fff;
  }

  .title {
    font-size: 14px;
  }

  .gray {
    width: 174px;
    height: 75px;
    font-size: 10px;
    color: #999;
  }

  .el-button {
    width: 152px;
    height: 42px;
    background: deepskyblue;
  }
</style>
