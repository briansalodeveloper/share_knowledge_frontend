<script setup>
import '/src/assets/css/navbar.css'
</script>
<template>
<div class="nav-bar">
    <div class="navbar-content">
        <div class="logo">
            ShareKnowledge
        </div>
        <div class="search-box" style="">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
        </div>
        <div class="icons">
            <div><i class="far fa-user fa-lg"></i></div>
            <div class="notification">
                <i class="far fa-bell fa-lg">
                    <span class="number-of-notification">4</span>
                </i>
            </div>
            <div><i class="fas fa-trophy fa-lg"></i></div>
        </div>
    </div>
</div>
</template>
