import Vuex from "vuex";



export default new Vuex.Store({
  state: {
    messsage : "Hello World Here"
  },
  getters: {
    GetMessage(state){
        return state.messsage
    }
  },

  mutations: {
    
  },
//   plugins: [
//     createPersistedState({
//       // You can specify where you want to save the state
//       storage: window.localStorage, // or use sessionStorage
//     }),
//   ],
  actions: {},
  modules: {},
});
