import {
  INCREMENT_CART_COUNT,
  DECREMENT_CART_COUNT,
  CLEAR_CART
} from './mutation-types'
export default {
  addCart(context, payload) {
    // 1.查看是否添加过
    let oldProduct = context.state.cartList.find(
      item => item.iid === payload.iid
    )
    // 2.+1 或者新添加
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit('addToCart', payload)
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

  // 同步清空购物车
  clearCart({ commit }) {
    commit(CLEAR_CART)
  }
}
