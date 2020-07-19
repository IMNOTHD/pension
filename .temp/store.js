import Vue from 'vue'
/* global Vue */
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cityName: '定位'
  },
  mutations: {
    setCityName (state, value) {
      state.cityName = value
    }
  },
  actions: {
  }
})
