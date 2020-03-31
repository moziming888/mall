export default {
  userId: state => state.user_id,
  userPhone: state => state.user_phone,
  isLogin: state => state.isLogin,
  cartList(state) {
    return state.cartList
  },
  totalCount(state) {
    return state.cartList.reduce((preTotal, item) => preTotal + item.count, 0)
  },
  totalPrice(state) {
    return state.cartList.reduce(
      (preTotal, item) => preTotal + item.count * item.price,
      0
    )
  },
  cartLength(state) {
    return state.cartList.length
  },

  cartCount(state) {
    return state.cartCount
  }
}
