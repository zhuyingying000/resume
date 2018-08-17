<template>
  <div class="bg">
    <Navigation></Navigation>

    <div class="content">
      <el-row>
        <el-col :span="18">
          <div class="box-left">
            <Advantage></Advantage>
            <Divider></Divider>
            <Merit></Merit>
            <Divider></Divider>
            <Job></Job>
            <Divider></Divider>
            <Experience :exp="exp"></Experience>
            <Divider></Divider>
            <Aaa></Aaa>
            <Divider></Divider>
            <Bbb></Bbb>
            <Divider></Divider>
            <Ccc></Ccc>
          </div>
        </el-col>
        <el-col :span="6" style="padding-left: 20px;">
          <AnnexResume></AnnexResume>
          <PrivacySetting></PrivacySetting>
        </el-col>
      </el-row>
    </div>


    <Footer></Footer>


  </div>
</template>

<script>
import HelloWorld from './HelloWorld' //引用HelloWorld组件。
import MyPage from './MyPage' //引用/MyPage组件。
import Navigation from './Navigation' //引用/Navigation组件。
import Advantage from './Advantage' //引用Advantage 组件。
import Merit from './Merit' //引用Merit 组件。
import Job from './Job' //引用Job 组件。
import Experience from './Experience' //引用Experience 组件。
import Company from './Company' //引用 Company 组件。
import Aaa from './Aaa' //引用 Aaa 组件。
import Bbb from './Bbb' //引用 Bbb 组件。
import Ccc from './Ccc' //引用 Ccc 组件。
import Footer from './Footer' //引用 Footer组件。
import AnnexResume from './AnnexResume' //引用Navigation组件。
import PrivacySetting from './PrivacySetting' //引用 PrivacySetting组件。
import Divider from './Divider'


export default {
  name: "Home",
  components: {
    HelloWorld,
    MyPage,
    Navigation,
    Advantage,
    Merit,
    Job,
    Experience,
    Company,
    Aaa,
    Bbb,
    Ccc,
    Footer,
    AnnexResume,
    PrivacySetting,
    Divider,

  },//局部注册

  data() {
    return {
      exp: [{
        companyName: '无',
        position: 'web前端',
        positionDetail: '离职到目前为止，自学软件技术。',
      }, {
        companyName: '大连摩尔登科技股份有限公司',
        position: '人力资源专员/助理',
        positionDetail: `1、 公司电话的接听来访客户的招待<br>
2、负责机票等出差票务的一定<br>
3、负责公司的考勤制度<br>
4、负责公司快件及传真的发放及传递<br>
5、整理和归档办公室文件<br>
6、主要负责公司的招聘工作，邀约面试，初面，复面安排，入职跟进。员工的绩效考核，员工入职、离职手续的交接办理<br>
7、员工沟通关怀、疏导；<br>
8、每月工资报表制作，公司员工档案管理，合理有效控制人力资源成本<br>
9、建立并完善人力资源管理体系，制定并完善各项人力资源管理制度<br>`,
      },],
    }
  }
}
</script>

<style scoped>
  .bg {
    background: #f2f2f5;
  }

  .content {
    max-width: 1000px;
    margin: 20px auto;
  }

  .box-left {
    padding: 28px 0;
    background-color: #fff;
  }
</style>
