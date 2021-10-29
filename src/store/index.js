import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    // Everything that needs tracking in the store needs a default value, otherwise it won't update
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({
      // state, getters, commit, dispatch,
      commit,
    }) {
      // Function depends on API server (https://github.com/jmcooper/build-a-bot-server)
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
