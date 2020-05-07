<template>
  <div class="header">
    <img style="flex: 1" src="@/assets/img/header/top-bg.jpg"/>
    <div class="header-center">
      <div class="header-logo">
        <div class="name_1">
          <span>福建省 龙岩市 漳平市 溪南镇</span>
        </div>
        <div class="name_2">
          <span>下林村</span>
        </div>
      </div>
      <TabBar class="tabBar" />
    </div>
    <img style="flex: 1" src="@/assets/img/header/top-bg.jpg"/>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar'
  export default {
    name: 'headerTop',
    components: {
      TabBar
    }
  }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
    display: flex;
    text-align: center;
  }
  .header img {
    margin-top: -20px;
  }
  .header-center{
    display: flex;
    flex-direction: column;
  }
  .header-logo{
    background: url('../assets/img/header/logo.jpg') no-repeat 0 -20px;
    height: 137px;
    width: 980px;
  }
  .name_1{
    margin: 10px 0 0 -75px;
  }
  .name_1 span{
    font-size: 40px;
    color: rgb(0, 102, 255);
    font-family: 微软雅黑, 雅黑, 黑体;
  }
  .name_2{
    margin-left: -280px;
  }
  .name_2 span{
    color: rgb(222, 52, 55);
    font-size: 60px;
    font-family: 华文行楷;
  }
</style>
