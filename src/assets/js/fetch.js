import axios from 'axios'

const fetch = axios.create({
    // baseURL: 'http://gateway-dev.lexing360.com/',
    // baseURL: process.env.API_BASE,
    baseURL: 'localhost:3000/',
    timeout: 3000,
    validateStatus: function (status) {
        return status >= 200 && status <= 500 // default
    }
})
fetch.interceptors.response.ues(
    response => {
        if(response.status >= 400){
            return response.data
        }
        return response
    }
)

export default fetch
