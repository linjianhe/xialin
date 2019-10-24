<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <router-view/>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop'
export default {
  name: 'App',
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">
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
