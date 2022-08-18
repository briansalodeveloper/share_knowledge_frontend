import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
      ]
  })


createApp(App).use(router).mount('#app')
