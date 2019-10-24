import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: 'ljh'
}

const getters = {
  username: state => state.username // 箭头函数，就是return：state里面的example
}

const mutations = {
  SET_USERNAME(state, data){
    state.username = data
  }
}

const actions = {

}

export default{
  state,
  getters,
  mutations,
  actions
}
