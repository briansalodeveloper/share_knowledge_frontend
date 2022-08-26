import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/login/Login.vue'
import Register from './components/login/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/Register', component: Register },
      ]
  })

export default router;