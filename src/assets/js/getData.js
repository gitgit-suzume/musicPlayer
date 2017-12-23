import fetch from './fetch'

function getUserBaseData(phone, password) {
    let urlPhone = 'phone=' + phone
    let urlPassword = 'password=' + password
    return fetch({
        url: '/v1/forms?' + urlPhone + '&' + urlPassword,
        method: 'get'
    })
}

export {
    getUserBaseData
}
