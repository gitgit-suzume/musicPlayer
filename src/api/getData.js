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

function detailList(id){
    return fetch({
        url: 'playlist/detail?id=' + id,
        method: 'get'
    })
}


export default {
    login,
    refresh,
    playList,
    detailList
}
export {
    login,
    refresh,
    playList,
    detailList
}