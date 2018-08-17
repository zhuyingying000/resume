<template>
  <div>
    <Navigation></Navigation>
    <AnnexResume></AnnexResume>
    <PrivacySetting></PrivacySetting>
    <Footer></Footer>
    <Advantage></Advantage>
    <Merit></Merit>
    <Job></Job>
    <Experience></Experience>
    <Company></Company>
    <Aaa></Aaa>
    <Bbb></Bbb>
    <Ccc></Ccc>

  </div>
</template>

<script>
import HelloWorld from './HelloWorld' //引用HelloWorld组件。
import MyPage from './MyPage' //引用/MyPage组件。
import Navigation from './Navigation' //引用/Navigation组件。
import AnnexResume from './AnnexResume' //引用Navigation组件。
import PrivacySetting from './PrivacySetting' //引用 PrivacySetting组件。
import Footer from './Footer' //引用 Footer组件。
import Advantage from './Advantage' //引用Advantage 组件。
import Merit from './Merit' //引用Merit 组件。
import Job from './Job' //引用Job 组件。
import Experience from './Experience' //引用Experience 组件。
import  Company from './Company' //引用 Company 组件。
import Aaa from './Aaa' //引用 Aaa 组件。
import Bbb from './Bbb' //引用 Bbb 组件。
import Ccc  from './Ccc' //引用 Ccc 组件。





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
    Merit,
    Job,
    Experience,
    Company,
    Aaa,
    Bbb,
    Ccc

  },//局部注册

  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
