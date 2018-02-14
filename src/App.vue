<template>
  <div id="app">
    <guide></guide>
    <router-view></router-view>
    <foot></foot>
    <foot-list></foot-list>
    <foot-order></foot-order>
    <user-info :username="userInfo.nickname"
               :lv="userInfo.version"
               :avatarUrl="userInfo.avatarUrl"
               :backgroundUrl="userInfo.backgroundUrl"></user-info>
    <song-sheet></song-sheet>
  </div>
</template>

<script>
    import store from './store/index.js'
    import guide from './components/guide.vue'
    import home from './components/home/home.vue'
    import foot from './components/foot/foot.vue'
    import FootList from './components/foot/foot-list.vue'
    import UserInfo from './components/user-info/user-info.vue'
    import SongSheet from './components/song-sheet/index.vue'
    import FootOrder from './components/foot/foot-order.vue'
    import {mapActions, mapGetters} from 'vuex'

    import GetData from './api/getData'
    export default {
        name: 'app',
        data() {
            return {
                userInfo:{
                    userId: 0,
                    nickname: '用户名字',
                    version: 0,
                    backgroundUrl: '#',
                    avatarUrl: '#'
                },
                test: 0
            }
        },
        components: {
            guide: guide,
            home: home,
            foot: foot,
            'foot-list': FootList,
            'user-info': UserInfo,
            'song-sheet': SongSheet,
            'foot-order': FootOrder
        },
        methods: {
            getPlayList (id) {
                GetData.playList(id).then(res => {
                    let data = res.data.playlist
                    let createList = [], collectList = [], len = data.length
                    for(let i of data){
                        if(i.userId === id){
                            createList.push(i)
                        } else {
                            collectList.push(i)
                        }
                    }
                    store.commit('setCreateList', createList)
                    store.commit('setCollectList', collectList)
                }).catch(err => {
                    console.log(err)
                })
                return null
            },
            login(cb){
                let cellPhone = 17854287241;
                let password = 'cyy5507889'
                GetData.login(cellPhone, password).then(res => {
                    store.commit('setUid', res.data.account.id)
                    this.userInfo.userId = res.data.profile.userId
                    this.userInfo.nickname = res.data.profile.nickname
                    this.userInfo.version = res.data.account.viptypeVersion
                    this.userInfo.avatarUrl = res.data.profile.avatarUrl
                    this.userInfo.backgroundUrl = res.data.profile.backgroundUrl
                    cb(this.userInfo.userId)
                }).catch(err => {
                    console.log('err', err)
                })
            }
        },
        created () {
            jQuery.get('../static/data.json', function (data, status) {
                const info = data;
                store.commit('initInfo', info);
            });
          this.login(this.getPlayList)
        }
    }
</script>

<style>
  @import "style/INIT.css";
</style>
