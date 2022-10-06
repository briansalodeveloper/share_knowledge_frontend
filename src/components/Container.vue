<script setup>
import Navbar from './layouts/Navbar.vue'
import '/src/assets/css/container.css'
</script>
<template>
    <div class="container">
        <nav-bar></nav-bar>
    </div>

</template>
<script>
export default {
    components:{       
        'nav-bar': Navbar,
    },
}
</script>
