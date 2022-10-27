<script setup>
import '/src/assets/css/sidebar-left.css'
</script>
<template>
    <div class="leftSidebar">
        <router-link to="/create-post">
          <button type="button" class="askQuestion">Ask Questions</button>
        </router-link>
      
        <ul>
          <router-link to="/"><li class="active">Questions</li></router-link>
          <li>Tags</li>
          <li>Users</li>
        </ul>
    </div>

</template>
