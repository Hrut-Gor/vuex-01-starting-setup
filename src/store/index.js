import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import  rootGetters from './getters.js';
import NumberModule from './counter/index.js';  

const store = createStore({
  modules: {
    numbers: NumberModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters

});

export default store;
