<template>
  <div class="content1">
    <h3 class="title">简历附件</h3>
    <div class="size "><i class="el-icon-document">朱莹莹简历.doc</i></div>
    <div style="text-align: center;">

    <button class="primary">新增简历附件</button>
    </div>
    <p class="gray">支持 DOC、DOCX、PDF、JPG、PNG格式附件，文件大小不超过10M</p>

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
    padding: 20px;
  }

  .size {
    font-size: 14px;
    color: #555;
    padding: 10px 0;
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

  .primary{
   border:none;
    font-size: 14px;
    padding:8px 30px;
    background: #53cac3;
    color: #fff;
   margin:10px;




  }
</style>
