import Api from '@/config/Axios.js'

export default {
    getAllTags(tokenId) {
        return Api('TagService.getAllTags').get('all_tags', {
            params: {
                token:tokenId
            }
        });
    },

}