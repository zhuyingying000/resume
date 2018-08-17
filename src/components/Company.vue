<template>
  <div class="container">
    <div class="blue">
    <div class="content">
      <span class="span1">大连摩尔登科技股份有限公司</span>
      <span class="span2"> 2014.04-2018.03</span>
    </div>
    <div class="hr">人力资源专员/助理</div>
    <div class="text">
      <p>1、 公司电话的接听来访客户的招待 </p>
      <p> 2、负责机票等出差票务的一定</p>
      <p> 3、负责公司的考勤制度</p>
      <p> 4、负责公司快件及传真的发放及传递</p>
      <p> 5、整理和归档办公室文件</p>
      <p> 6、主要负责公司的招聘工作，邀约面试，初面，复面安排，入职跟进。员工的绩效考核，员工入职、离职手续的交接办理</p>
      <p> 7、员工沟通关怀、疏导；</p>
      <p> 8、每月工资报表制作，公司员工档案管理，合理有效控制人力资源成本</p>
      <p> 9、建立并完善人力资源管理体系，制定并完善各项人力资源管理制度</p>
    </div>
    <div class="radius">人事</div>
    <div class="center">+添加工作经验</div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Company",
}
</script>

<style scoped>
  .container {
    max-width: 770px;
    margin-left:130px;
    height: 320px;
    padding: 20px 30px;
    border-top: 1px solid #999;
  }
  .text p{
    font-size: 14px;
    color: #999;
    line-height: 9px;
  }
  .content .span1{
font-size: 15px;
    font-weight: 600;
  }
  .content .span2{
    font-size: 10px;
    color: #999;
    padding: 0 25px;
  }
  .hr{
    font-size: 14px;
    font-weight: 600;
    padding:10px 0;
  }
  .radius  {
    width:40px;
    text-align: center;
    font-size: 10px;
    color: #777;
    padding: 1px  3px;
    border: 1px solid #999;
    border-radius: 25px;
  }
  .blue{
    height:310px;
  }
  .blue:hover{
    background: rgba(0, 0, 0, .2);
    transition:2s;
  }
  .center{
    text-align: center;
    color: #555;
    padding:15px 0;
  }
</style>
