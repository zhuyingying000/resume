<template>


  <div class="container">

    <div class="navigation">

      <nav class="left">
        <a href="" class="logo">BOSS直聘</a>
        <a href="">首页</a>
        <a href="">求职</a>
        <a href=""> APP</a>
        <a href=""> 通讯</a>
      </nav>

      <nav class="right">
        <a href="">消息</a>
        <a href="" class="blue">简历</a>
        <a href=""> 朱莹莹</a>
      </nav>

    </div>
  </div>


</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped>
  .container {
    height: 50px;
    background: black;
  }

  .navigation {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
  }

  .navigation a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  .navigation a:hover {
    color: deepskyblue;
    transition: 1s;
    /*transition-duration: 1s;*/
  }

  .left a {
    margin-right: 30px;
  }

  .logo {
    color: aqua !important;
    font-size: 30px;
  }

  .right a {
    margin-left: 30px;
  }

  .blue {
    color: aqua !important;;
  }

</style>
