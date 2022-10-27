<script setup>
import '/src/assets/css/create-post.css'
</script>

<template>
    <form @submit.prevent="submit" class="signin-form">
    <div class="create-post">
        <div class="header">
                <input type="text" placeholder="Add a title" v-model="fields.title">
        </div>
        <div class="content" >
            <textarea rows="14" cols="100%" placeholder="what is your question?" v-model="fields.content"></textarea>
        </div>
        <div class="footer">
            <div class="tags">
                <VueMultiselect
                    v-model="fields.tagsSelected"
                    :multiple="true"
                    label="name"
                    track-by="name"
                    placeholder="Select tag"
                    :options="tagsOption"
                    >
                </VueMultiselect>
            </div>
            <div class="buttons">
                <button type="button" class="closed">Close</button>
                <button type="submit" class="post">Submit Question</button>
            </div>
        </div>
    </div>
    </form>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import postService from '@/services/PostService.js'
import tagService from '@/services/TagService.js'

export default {
    components: { VueMultiselect },
    mounted() {
        this.getTags();
    },
    data() {
        return {
            fields: {tagsSelected: []},
            errors: {},
            tagsOption: [],
        }
    },
    methods: {
        getTags() {
            tagService.getAllTags(localStorage.getItem('tokenId'))
                .then((response) => {
                    this.tagsOption = response.data;
                })
        },
        submit(){
            const getIdOfSelectedTags = this.fields.tagsSelected.map((item) => {
                return item.id;
            })
            //i override the fields.tagselected it will now return only an i.d.
            this.fields.tagsSelected = getIdOfSelectedTags;
            this.fields.token = this.$store.state.authStore.token;
            postService.createPost(this.fields)
                .then((response) => {
                    this.$toast.success("Post Created Successfully.");
                    this.$router.push({ name: 'home' });
                });
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>