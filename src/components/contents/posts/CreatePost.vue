<script setup>
import '/src/assets/css/create-post.css'
import axios from 'axios'
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
            const token = localStorage.getItem('tokenId');
            axios.get('http://127.0.0.1:8000/api/all_tags', {params:{token:token}}).then((response) => {
                this.tagsOption = response.data;
            }).catch(error => {

            });
        },
        submit(){
            const getIdOfSelectedTags = this.fields.tagsSelected.map((item) => {
                return item.id;
            })
            //i override the fields.tagselected it will now return only an i.d.
            this.fields.tagsSelected = getIdOfSelectedTags;
            this.fields.token = this.$store.state.token;
            axios.post('http://127.0.0.1:8000/api/create_post', this.fields).then((response) => {
                this.$toast.success("Post Created Successfully.");
                this.$router.push({ name: 'home' });
            }).catch(error => {
                if(error.response.status == 401) {
                    this.$router.push({ name: 'login' });
                }
            });
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>