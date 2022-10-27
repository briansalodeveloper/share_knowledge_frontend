import Api from '@/config/Axios.js'

export default {
    createPost(data) {
        return Api('PostService.createPost').post('create_post', data);
    },

}