import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
import { getters } from './getters'

const state = {
  CartList: []
}
const store = new Vuex.Store({
  state,
  mutations: {
    addToCart(state, value) {
      let key = false
      state.CartList.forEach(item => {
        if (item.iid === value.iid) {
          item.count += 1
          key = true
        }
      })
      if (!key) state.CartList.push(value)
    }
  },
  getters
})

export default store