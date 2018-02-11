<template>
  <div id="app">
    <guide></guide>
    <router-view></router-view>
    <foot></foot>
    <foot-list></foot-list>
    <foot-order></foot-order>
    <user-info></user-info>
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

    import Login from './api/login'
    export default {
        name: 'app',
        data() {
            return {
                msg: 'fromg App.vue'
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
        created: function () {
            jQuery.get('../static/data.json', function (data, status) {
                const info = data;
                store.commit('initInfo', info);
            });
          // Login.login('17854287241', 'cyy5507889').then(res => {
          //     this.msg = res
          //     console.log('res', res)
          // }).catch(err => {
          //     console.log('err', err)
          // })
        }
    }
</script>

<style>
  @import "style/INIT.css";
</style>
