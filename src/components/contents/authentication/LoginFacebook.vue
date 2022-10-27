
<template></template>

<script>
import authService from '@/services/AuthService.js'

export default {
    created() {
        this.callbackFacebook()
    },
    methods: {
        callbackFacebook(){
            authService.facebookCallback(this.$route.query.code)
                .then((response) => {
                    this.$store.commit('auth_setToken', response.data.token);
                    this.$router.push({ name: 'home' });                   
                })
        }
    },
}
</script>