import fetch from './fetch'

function login(phone, password) {
    return fetch({
        url: 'login/cellphone?phone=' + phone + '&password=' + password,
        method: 'get'
    })
}

function refresh() {
    return fetch({
        url: '/login/refresh',
        method: 'get'
    })
}

function playList(uid) {
    return fetch({
        url: '/user/playlist?uid=' + uid,
        method: 'get'
    })
}

export default {
    login,
    refresh
}
export {
    login,
    refresh
}

    // useid = 560325858
