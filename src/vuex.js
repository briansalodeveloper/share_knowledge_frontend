import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      token: ''
    }
  },
  mutations: {
    getToken (state, {tokenId}) {
      state.token = tokenId;
    }
  }
})

