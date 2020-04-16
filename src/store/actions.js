import {
  INCREMENT_CART_COUNT,
  DECREMENT_CART_COUNT,
} from './mutation-types'
export default {
  addCart({ commit, state }, payload) {
    // 1.查看是否添加过
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    // 2.+1 或者新添加
    if (oldProduct) {
      commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      // state.cartList.push(payload)
      commit('addToCart', payload)
    }
  },
  // 同步更新购物车中item的count值
  updateFoodCount({ commit }, { isAdd, item }) {
    if (isAdd) {
      commit(INCREMENT_CART_COUNT, { item })
    } else {
      commit(DECREMENT_CART_COUNT, { item })
    }
  },

}
