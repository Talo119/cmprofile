import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    desktop_mode:true
  },
  mutations: {
    setDesktopMode(state, payload){
      state.desktop_mode = payload
    },
  },
  actions: {
    vefiricarResolucion({commit,state}){
      if (screen.width <= 1024) {
        commit('setDesktopMode', false);
      }else{
        commit('setDesktopMode', true);
      };
    }
  },
  modules: {
  }
})
