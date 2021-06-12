import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    language: 'English',
    availableLanguages: ['English', 'French'],
    navOptions: {
      english: ['Our Story', 'Wedding Details', 'RSVP', 'Registry'],
      french: ['Notre Histoire', 'Infos Mariage', 'RSVP', 'Registry']
    }
  },
  getters: {
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language
    }
  }
})

export default store;