<script setup>
import '/src/assets/css/create-post.css'
</script>

<template>
    <div class="create-post">
        <div class="header">
                <input type="text" placeholder="Add a title">
        </div>
        <div class="content" >
            <textarea rows="14" cols="100%" placeholder="what is your question?"></textarea>
        </div>
        <div class="footer">
            <div class="tags">
                <input type="text">
            </div>
            <div class="buttons">
                <button type="button" class="closed">Close</button>
                <button class="post">Submit Question</button>
            </div>
        </div>
    </div>
</template>