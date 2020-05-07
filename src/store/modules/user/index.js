import Vue from 'vue'
import Vuex from 'vuex'
import interceptor from '@/network/interceptor'

Vue.use(Vuex)

const state = {
  userInfo: {
    name: '',
    username: '',
    userId: ''
  }
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  SET_USERINFO(state, data) {
    state.userInfo = data
  }
}

const actions = {
  SetUserInfo({commit}) {
    return new Promise((resolve, reject) => {
        interceptor({
            url: 'user/getMyInfo',
            method: 'get'
        }).then(res => {
            sessionStorage.setItem('userInfo', JSON.stringify(res.data))
            commit('SET_USERINFO', res.data)
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
