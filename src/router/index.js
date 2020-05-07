import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const Home = () => import('@/views/home/Home')
const Index = () => import('@/views/index/Index')
const Introduction = () => import('@/views/introduction/Introduction')
const Cadre = () => import('@/views/cadre/Cadre')
const BigEvent = () => import('@/views/bigEvent/BigEvent')
const Build = () => import('@/views/build/Build')
const Advice = () => import('@/views/advice/Advice')
const List = () => import('@/views/list/List')
const CharacterIndustry = () => import('@/views/characterIndustry/CharacterIndustry')
const Login = () => import('@/views/login/Login')

Vue.use(Router)

const router = new Router({
  name: 'router',
  mode: 'history',
  base: '/xialin/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/introduction',
          name: 'introduction',
          component: Introduction
        },
        {
          path: '/cadre',
          name: 'cadre',
          component: Cadre
        },
        {
          path: '/bigEvent',
          name: 'bigEvent',
          component: BigEvent
        },
        {
          path: '/build',
          name: 'build',
          component: Build
        },
        {
          path: '/advice',
          name: 'advice',
          component: Advice,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/list',
          name: 'list',
          component: List,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/characterIndustry',
          name: 'characterIndustry',
          component: CharacterIndustry
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/login'
    }
  ],
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach(function(to, from, next) {
  // 获取store里面的token
  let token = store.getters['login/token']
  if (to.meta.requiresAuth) {
    console.log('需要认证')
    if (token) {
      // 检验token
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将目的路由地址存入login的query中
      })
    }
  } else {
    next()
  }
})
export default router
