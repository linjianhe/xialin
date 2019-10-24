import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username1: 'ljh1'
}

const getters = {
  username1: state => state.username1 // 箭头函数，就是return：state里面的example
}

const mutations = {
  SET_USERNAME(state, data) {
    state.usernamel = data
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
