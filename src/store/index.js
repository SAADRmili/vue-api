import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    loggedIn: false,
    user: null
  },
  mutations: {
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    get_loggedIn(state){
      return state.loggedIn;
    }
  }
});
