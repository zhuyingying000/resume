<template>
  <div>
    <div class="paper">
      <header>
      <nav>
link
      </nav>
      </header>


      <div class="content" >
       <div class="rotate"></div>
       <div class="code"></div>
      </div>
     <footer>footer</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
header{
  height:70px;
  background: red;
}
  .content{
    height:auto;
    background: aquamarine;
  }
  .rotate{
    height:300px;
    background: chartreuse;
  }
  .code{
    height:300px;
    width:300px;
    background: dodgerblue;
  }
  footer{
    height:auto;
    background: darkred;
  }
</style>
<style>

</style>
