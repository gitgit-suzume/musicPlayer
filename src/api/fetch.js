import axios from 'axios'

const fetch = axios.create({
    baseURL:'http://localhost:3000/',
    timeout: 0,
    validateStatus: function (status){
        return status >= 200 && status <= 500
    }
})

fetch.interceptors.response.use(
    response => {
        if(response.status >= 400){
            return response.data
        }
        return response
    }
)



export default fetch
