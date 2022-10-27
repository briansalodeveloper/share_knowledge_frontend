import { createApp } from 'vue'
import App from './App.vue'
import router from './router/RouterV1.js'
import store from './store/indexStore.js'
import Toaster from "@meforma/vue-toaster";

createApp(App)
.use(router)
.use(store)
.use(Toaster, {position: 'top-right'})
.mount('#app')
