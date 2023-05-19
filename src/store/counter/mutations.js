export default {
  increament(state) {
    state.counter += 5;
  },

  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
