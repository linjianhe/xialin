<template>
  <div class="home">
    <HeaderTop></HeaderTop>
    <router-view/>
  </div>
</template>

<script>
  import HeaderTop from '@/components/HeaderTop'
  export default {
    name: 'home',
    components: {
      HeaderTop
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
  .home{
    width: 100%;
  }
</style>
