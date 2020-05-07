import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index/Index')
const Home = () => import('@/views/home/Home')
const Login = () => import('@/views/login/Login')
const Introduction = () => import('@/views/introduction/Introduction')
const Advice = () => import('@/views/advice/Advice')
const Cadre = () => import('@/views/cadre/Cadre')
const BigEvent = () => import('@/views/bigEvent/BigEvent')
const Build = () => import('@/views/build/Build')

Vue.use(Router)

const router = new Router({
  name: 'router',
  mode: 'history',
  base: '/xialin/',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: Home
        },
        {
          path: '/introduction',
          name: 'introduction',
          component: Introduction
        },
        {
          path: '/cadre',
          name: 'cadre',
          component: Cadre,
          meta: {
            // requiresAuth: true
          }
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
            // requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
  if (to.meta.requiresAuth) {
    const a = 0
    if (a) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
