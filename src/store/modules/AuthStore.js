
const state = {
    token:  localStorage.getItem('tokenId') || null,
}

const getters = {
}

const mutations = {
    auth_setToken (state, tokenId) {
        state.token = tokenId;
        localStorage.setItem("tokenId", tokenId);
    }
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
