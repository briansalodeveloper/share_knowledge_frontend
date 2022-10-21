import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/contents/authentication/Login.vue'
import Register from './components/contents/authentication/Register.vue'
import Container from './components/Container.vue'
import Facebook from './components/contents/authFacebook/Facebook.vue'
import store from './vuex.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', name:'login', component: Login },
        { path: '/register', name:'register', component: Register },
        { path: '/', name:'home', component: Container },
        { path: '/callback/facebook', name:'callback_facebook', component: Facebook },
        { path: '/create-post', name:'create_post', component: Container, meta: { requiresAuth: true } },
      ]
  })
router.beforeEach(async (to, from, next) => {

    if(to.meta.requiresAuth) {
        await store.dispatch('checkTokenIfStillAuth')
        if(store.state.token) {
            next();
        }else{
            next({name:'login'});
        } 
    }else{
        next();
    }

    
});
export default router;