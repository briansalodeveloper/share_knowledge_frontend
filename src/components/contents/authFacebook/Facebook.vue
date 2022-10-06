<script setup>
import axios from 'axios'
</script>

<template></template>

<script>
export default {
    created() {
        this.callbackFacebook()
    },
    methods: {
        callbackFacebook(){
            axios.get('http://127.0.0.1:8000/api/callback/facebook?code=' + this.$route.query.code).then((response) => {
                    let tokenId = response.data.token;
                    this.$store.commit('getToken', {tokenId});
                    this.$router.push({ name: 'home' });
            }).catch(error => {

            });
        }
    },
}
</script>