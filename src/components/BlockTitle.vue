<template>
  <div>
    <div>
      <div class="left"></div>
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockTitle",
  props: {
    title: {
      type: String,
      defaultValue: '默认标题',
      required: true
    }
  }
}
</script>

<style scoped>
  .left {
    height: 100%;
    min-height: 15px;
    margin-right: 5px;
    min-width: 3px;
    vertical-align: bottom;
    display: inline-block;
    background-color: #11b4bd;
  }
</style>
