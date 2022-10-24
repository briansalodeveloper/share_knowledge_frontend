import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './vuex'
import Toaster from "@meforma/vue-toaster";

createApp(App)
.use(router)
.use(vuex)
.use(Toaster, {position: 'top-right'})
.mount('#app')
