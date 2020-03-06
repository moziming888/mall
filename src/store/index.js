import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters"

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // 1.查看是否添加过
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.+1 或者新添加
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit("addCounter", oldProduct)
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload)
        context.commit("addToCart", payload)

      }
    }
  },
  getters
})
