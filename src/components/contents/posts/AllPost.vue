<script setup>
import '/src/assets/css/all-post.css'
</script>
<template>
    <h3>All Questions</h3>
    <div class="allpost">
        <div class="image">
            <img src="/src/assets/images/sample-user.jpg">
        </div>
        <div class="content">
            <div class="info-header">
                <div class="title">
                    <h5>Laravel 9 A copy of the letter to the clientLaravel 9 A copy of the letter to the client</h5>
                </div>
                <div class="status" >
                    <div class="view"><i class="far fa-eye"> 317</i></div>
                    <div class="comment"><i class="far fa-comments"> 42</i></div>
                    <div class="solve" style="align-text:center; width:70px; border-radius: 15px;background-color:blue; border: 2px #0074cc solid; height:30px;">
                        <i class="fas fa-check-circle" style="color:white">
                            <span>Solved</span>
                        </i>
                    </div>
                </div>   
            </div>
            <div class="info-content">
                Trying to deploy laravel to my project on shared hosting And I am getting this Unable to locate file in Vite manifest: resources/css/app.css.
                I have changed the env app_url to the current project and I have clear cache and config and I am still getting same error
            </div>
            <div class="info-footer">
                <div class="date-posted">css</div>
                <div class="tags">
                    posted: 2days ago
                </div>     
            </div>      
        </div>
    </div>            
</template>
