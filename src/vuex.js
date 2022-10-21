import { createStore } from 'vuex'
import axios from 'axios'
let tokenId = localStorage.getItem("tokenId");

export default createStore({
  state () {
    return {
      token: tokenId
    }
  },
  mutations: {
    getToken (state, tokenId) {
      state.token = tokenId;
    }
  },
  actions: {
    async checkTokenIfStillAuth({commit}) {
      let tokenId = localStorage.getItem("tokenId");
        await axios.get('http://127.0.0.1:8000/api/checkAuth', {params:{token:tokenId}}).then((response) => {
          
        }).catch((error) => {
          localStorage.removeItem('tokenId');
          commit('getToken', null)  
        });
    }
  },

})

