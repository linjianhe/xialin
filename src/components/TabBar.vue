<template>
  <div class="tabBar">
    <tabBarItem v-for="(item,index) in titles" :key="`index-${item.path}`" class="tabBar-item" >
      <div slot="title" :class="{active: currentIndex === index}" @click="chooseItem(index)">{{item.title}}</div>
    </tabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem'
  export default {
    name: 'tabBar',
    components: {
      TabBarItem
    },
    data() {
      return {
        currentIndex: 0,
        titles: [
          {title: '网站主页', path: '/index'},
          {title: '村子介绍', path: '/introduction'},
          {title: '两委班子', path: '/cadre'},
          {title: '村中大事记', path: '/bigEvent'},
          {title: '村庄建设', path: '/build'},
          {title: '建议和意见', path: '/advice'},
          {title: '全村名单', path: '/list'},
          {title: '特色产业', path: '/production'},
          {title: '登录/注册', path: '/login'}
        ]
      }
    },
    mounted() {
      const that = this
      this.titles.filter(function(item, index) {
        if (item.path === that.$route.fullPath) {
          that.currentIndex = index
        }
      })
    },
    methods: {
      chooseItem(index) {
        this.currentIndex = index
        this.$router.push(this.titles[index].path)
      }
    }
  }
</script>

<style scoped lang="less">
  .tabBar{
    display: flex;
    width: 980px;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
    background-image: url("../assets/img/header/nav_on.jpg");
  }
  .tabBar-item{
    position: relative;
    width: 100px;
    flex: 1;
    color: #fff;
    cursor: pointer;
    &:last-child {
      ::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 45px;
        line-height: 45px;
        top: 0;
        right: 0;
        background: url("../assets/img/header/nav_line.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .active{
    color: red;
  }
</style>
