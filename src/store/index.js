import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)
const TokenKey = 'SAICHENG_USER'
export default new Vuex.Store({
  state: {
    user: getItem(TokenKey)
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TokenKey, state.user)
    }

  },
  actions: {
  },
  modules: {
  }
})
