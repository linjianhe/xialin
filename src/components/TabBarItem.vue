<template>
  <div class="tabBarItem" @click="choose">
    <img src="@/assets/img/header/nav_line.png"/>
    <div class="item-title"><slot name="title"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'tabBarItem',
    methods: {
      choose() {
        this.$emit('chooseItem')
      }
    }
  }
</script>

<style scoped>
  .tabBarItem{
    display: flex;
  }
  .tabBarItem img{
    width: 3px;
  }
  .item-title{
    width: 97px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-family: Tahoma, Verdana, Arial, 宋体;
    font-size: 14px;
  }
</style>
