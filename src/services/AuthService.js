import Api from '@/config/Axios.js'

export default {
    login(credentials) {
        return Api('AuthService.login').post('login',credentials);
    },
    facebookLogin(credentials) {
        return Api('AuthService.facebookLogin').get('facebook',credentials);
    },
    facebookCallback(generatedCode) {
        return Api('AuthService.facebookCallback').get('callback/facebook', {
            params: {
                code:generatedCode
            }
        });
    },
    checkAuth(tokenId) {
        return Api('AuthService.checkAuth').get('checkAuth', {
            params: {
                token:tokenId
            }
        });
    },
}