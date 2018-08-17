<template>
  <div>
    <Navigation></Navigation>
    <AnnexResume></AnnexResume>
    <PrivacySetting></PrivacySetting>
    <Footer></Footer>
    <Advantage></Advantage>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld' //引用HelloWorld组件。
import MyPage from './MyPage' //引用/MyPage组件。
import Navigation from './Navigation' //引用/Navigation组件。
import AnnexResume from './AnnexResume' //引用Navigation组件。
import PrivacySetting from './PrivacySetting' //引用 PrivacySetting组件。
import Advantage from './Advantage' //引用 Footer组件。



export default {
  name: "Home",
  components: {
    HelloWorld,
    MyPage,
    Navigation,
    AnnexResume,
    PrivacySetting,
    Footer,
    Advantage,

  },//局部注册

  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
