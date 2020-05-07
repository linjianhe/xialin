import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookie'
import interceptor from '@/network/interceptor'

Vue.use(Vuex)

const state = {
  token: null,
  username: null
}

const getters = {
  token: state => state.token,
  username: state => state.username
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USERNAME(state, username) {
    state.username = username
  }
}

const actions = {
  Login({commit}, data) {
    return new Promise((resolve, reject) => {
        interceptor({
            url: 'login/confirm',
            method: 'post',
            data: data
        }).then(res => {
            commit('SET_TOKEN', res.data.token)
            sessionStorage.setItem('userInfo', JSON.stringify(res.data.user))
            let id = res.data.user.userId
            cookie.set('token' + id, res.data.token)
            // this.dispatch('webSocket/InitWebSocket', id)
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
