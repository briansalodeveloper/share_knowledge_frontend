import { createStore } from 'vuex'
import authStore from '@/store/modules/AuthStore.js'

export default createStore({
    modules: {
        authStore,
    }

})
