import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    messsage: "Hello World Here",
    DefaultTheme: "dark",
    darkTheme: true,
    LightTheme: false,
  },
  getters: {
    GetMessage(state) {
      return state.messsage;
    },

    GetDefaultTheme(state) {
      return state.DefaultTheme;
    },
    GetdarkTheme(state) {
      return state.darkTheme;
    },
    GetLightTheme(state) {
      return state.LightTheme;
    },
  },

  mutations: {},
  //   plugins: [
  //     createPersistedState({
  //       // You can specify where you want to save the state
  //       storage: window.localStorage, // or use sessionStorage
  //     }),
  //   ],
  actions: {},
  modules: {},
});
