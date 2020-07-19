/* global Vue */
import vuex from 'vuex'

Vue.use(vuex)

export const store = new vuex.Store({
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
