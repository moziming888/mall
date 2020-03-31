import { INCREMENT_CART_COUNT, DECREMENT_CART_COUNT } from './mutation-types'

export default {
  // 本地localStorage的用户名同步到vuex
  handleUserName: (state, user_id) => {
    state.user_id = user_id
    localStorage.setItem('user_id', JSON.stringify(user_id))
  },
  // 本地localStorage的手机号同步到vuex
  handleUserPhone: (state, user_phone) => {
    state.user_phone = user_phone
    localStorage.setItem('user_phone', JSON.stringify(user_phone))
  },
  isLogin(state, status) {
    state.isLogin = status
    localStorage.setItem('isLogin', status)
  },
  // 退出登录
  loginOut(state) {
    localStorage.clear()
    state.user_id = ''
    state.user_phone = ''
    state.isLogin = false
  },
  [INCREMENT_CART_COUNT](state, { item }) {
    if (!item.count) {
      // 第一次增加
      Vue.set(item, 'count', 1) // 让新增的属性也有数据绑定
      // 将item添加到cartFoods中
      state.cartFoods.push(item)
      // state.goodFoods.push(item)
    } else {
      item.count++
    }
  },
  [DECREMENT_CART_COUNT](state, { item }) {
    if (item.count > 1) {
      // 只有有值才去减
      item.count--
    }
  },
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
