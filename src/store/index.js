import { createStore } from 'vuex';

export default createStore({
  state: {
    // Everything that needs tracking in the store needs a default value, otherwise it won't update
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
