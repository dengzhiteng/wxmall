import { createStore } from "vuex";

export default createStore({
  state: {
    cartNum: 0,
  },
  mutations: {
    setCartNum(state, cartNum) {
      console.log(cartNum);
      state.cartNum = cartNum;
    },
  },
  actions: {},
  modules: {},
});
