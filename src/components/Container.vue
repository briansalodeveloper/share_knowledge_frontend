<script setup>
import Navbar from './layouts/Navbar.vue'
import SidebarLeft from './layouts/SidebarLeft.vue'
import BodyContent from './layouts/Body.vue'
import '/src/assets/css/container.css'
</script>
<template>
    <div class="parent-container">
        <nav-bar></nav-bar>
        <div class="child-container">
            <sidebar-left></sidebar-left>
            <body-content></body-content>
        </div>

    </div>

</template>
<script>
export default {
    components:{       
        'nav-bar': Navbar,
        'sidebar-left': SidebarLeft,
        'body-content': BodyContent,
    },
}
</script>
