<script setup>
import AllPost from '/src/components/contents/posts/AllPost.vue'
import CreatePost from '/src/components/contents/posts/CreatePost.vue'
import '/src/assets/css/body.css'
</script>

<template>
    <div class="body-content">
        <create-post v-if="$route.name === 'create_post'"></create-post>
        <all-post v-if="$route.name === 'home'"></all-post>
    </div>
</template>


