import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/contents/authentication/Login.vue'
import Register from './components/contents/authentication/Register.vue'
import Home from './components/Container.vue'
import Facebook from './components/contents/authFacebook/Facebook.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', name:'login', component: Login },
        { path: '/register', name:'register', component: Register },
        { path: '/', name:'home', component: Home },
        { path: '/callback/facebook', name:'callback_facebook', component: Facebook },
      ]
  })

export default router;