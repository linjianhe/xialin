<template>
  <div class="cadre">
    <div class="cadre-banner">
      <img src="../../assets/img/top_news_tit.gif" alt=""/>
      <span class="cadre-title">听党的指挥，全心全意为人民服务</span>
    </div>
    <div class="jobList">
      <CadreItem v-for="item in jobList" :key="`index-${item.job}`">
        <p slot="job">{{item.job}}</p>
        <p slot="name">{{item.name}}</p>
      </CadreItem>
    </div>
  </div>
</template>

<script>
  import CadreItem from '@/components/CadreItem'
  export default {
    name: 'cadre',
    components: {
      CadreItem
    },
    data() {
      return {
        jobList: [
          {
            job: '党支书',
            name: '张三'
          },
          {
            job: '村长',
            name: '李四'
          },
          {
            job: '副村长',
            name: '王五'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .cadre{
    width: 990px;
    height: 400px;
    margin: 10px auto;
    border: 1px solid #ddd;
    .cadre-banner {
      width: 990px;
      height: 62px;
      margin: 0 auto;
      border: 1px solid #ddd;
      .cadre-title {
        line-height: 62px;
        font-size: 22px;
        letter-spacing: 8px;
        margin-left: 20px;
      }
      img{
        float: left;
        height: 62px;
      }
    }
    .jobList {
      display: flex;
      flex-wrap: wrap;
      &:first-child  {
        background-color: red;
        background: url("../../assets/img/cadre/example.jpg") no-repeat;
        background-size:80% 80%;
      }
    }
  }
</style>
