<template>
  <div class="cadreItem">
    <div class="item-job"><slot name="job"></slot></div>
    <div class="item-name"><slot name="name"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'cadreItem',
    methods: {
    }
  }
</script>

<style scoped lang="less">
  .cadreItem {
    width: 80px;
    height: 120px;
    .item-job {
      height: 25px;
    }
    .item-img {
      height: 70px;
    }
    .item-name {
      height: 25px;
    }
  }
</style>
