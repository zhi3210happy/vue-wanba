import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: false
  },
  mutations: {
    // 登录
    login(state, user) {
      state.user = user
    },
    // 退出
    logout(state, user) {
      state.user = false
    }
  }
})
