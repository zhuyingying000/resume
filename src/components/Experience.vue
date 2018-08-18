<template>
  <div class="container">
    <BlockTitle title="工作经历"></BlockTitle>
    <div class="blue" v-for="item in exp">
      <p>
        <span>{{item.companyName}}</span>
        <span class="time"> 2018.04-至今</span>
      </p>
      <p class="web">{{item.position}}</p>
      <p class="study" v-html="item.positionDetail"></p>
      <div class="radius">
        <span v-for="tag in item.tag" class="tag">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import BlockTitle from './BlockTitle'

export default {
  name: "Experience",
  components: {
    BlockTitle
  },
  props: {  // props声明传入的属性，不声明就接受不到。
    exp: {   //自定义的属性。
      type: Array
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 10px 40px;
  }
  .time {
    font-size: 10px;
    color: #999;
    margin: 0 10px;
  }

  .web {
    font-size: 14px;
    font-weight: 600;
  }

  .study {
    font-size: 14px;
    color: #666;
  }

  .radius span {
    font-size: 10px;
    color: #666;
    padding: 1px 8px;
    border: 1px solid #999;
    border-radius:25px;
  }

  .blue:hover {
    background: #f2f5f9;
  }
   .tag{
    margin-right:10px;
  }
</style>
