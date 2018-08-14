<template>
  <div>
    <button v-on:click="goHome">go home</button>

    <router-link to="/home">Go to home</router-link>
    <button v-on:click="page">eeeee</button>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goHome(){
      this.$router.push('home')
    },
    page(){
      this.$router.push('MyPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
