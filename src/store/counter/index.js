import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';
const NumberModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },

  mutations: counterMutations,

  actions: counterActions,

  getters: counterGetters,
};

export default NumberModule;
