<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  #app{
    height: 100%;
    width: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
  }
</style>
