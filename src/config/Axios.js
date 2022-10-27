import axios from 'axios'
import env from '@/config/Env.js'

export default (errorTriggered) => {

const axiosInstance = axios.create({
    baseURL: env.App_URL
})

axiosInstance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
  }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response.status === 401) {
            localStorage.removeItem('tokenId')
            console.log('session expired')
        }
        console.log(error +'\nThe error came from: ' + errorTriggered);
        return Promise.reject(error);
    
  });

return axiosInstance

}