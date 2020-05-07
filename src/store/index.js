import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index'
import login from './modules/login/index'

Vue.use(Vuex)

const state = {
  example: '例子'
}

const getters = {
  example: state => state.example // 箭头函数，就是return：state里面的example
}

const mutations = {
  SET_EXAMPLE(state, data) {
    state.example = data
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    login
  }
})
