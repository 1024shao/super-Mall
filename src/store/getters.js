export const getters = {
  cartLength(state) {
    return state.CartList.length
  },
  cartList(state) {
    return state.CartList
  }
}