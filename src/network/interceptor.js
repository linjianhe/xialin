import axios from 'axios'
import {Promise} from 'q'
import store from '@/store'
import {Message} from 'element-ui'
import router from '@/router/index'

const service = axios.create({
  baseURL: 'http://localhost:8333/',
  timeout: 150000
})

service.interceptors.request.use(
  config => {
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.data.code === 200 || response.data.code === '200') {
      console.log('axios拦截器【通过】：')
      if (response.data.pageInfo) {
          response.data.pageInfo.pageNum++
      }
      return Promise.resolve(response.data)
    } else if (response.data.code === 3) {
      // token过期，返回login
      store.dispatch('login/LogOut')
      Message.warning('您的token已过期，请重新登录!')
      router.push('/login')
    } else if (response.data.code === 2) {
      // token错误，返回login
      console.log('token验证错误')
      store.dispatch('login/LogOut')
      router.push('/login')
    } else {
      console.log('axios拦截器【失败】')
      return Promise.reject(response.data.msg) // 请求失败回调函数
    }
},
err => {
  // 请求异常
  console.log('axios拦截器【异常】')
  return Promise.reject(err)
}
)

export default service
