import { createStore } from 'vuex'
// https://www.cnblogs.com/mica/p/10757965.html
export default createStore({
  state: {
    searchResultList:"1"
  },
  mutations: {
    searchResultList_c(state, param){
      console.log('param',param)
      state.searchResultList = param
    }
  },
  actions: {
  },
  modules: {
  }
})
