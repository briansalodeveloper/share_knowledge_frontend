import store from '@/store/indexStore.js';
import authService from '@/services/AuthService.js';

export default async function(){
    var rtn = true

    await authService.checkAuth(localStorage.getItem('tokenId'))
    .catch((error) => {
        store.commit('auth_setToken', null)
        rtn = false
    });

    return rtn;
 }
