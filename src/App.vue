<template>
  <div id="app">
    <guide></guide>
    <router-view></router-view>
    <foot></foot>
    <foot-list></foot-list>
    <user-info></user-info>
  </div>
</template>

<script>
    import guide from './components/guide.vue'
    import home from './components/home/home.vue'
    import foot from './components/foot.vue'
    import FootList from './components/foot-list.vue'
    import UserInfo from './components/user-info.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'fromg App.vue'
    }
  },
    components:{
      guide: guide,
        home:home,
        foot:foot,
        'foot-list':FootList,
        'user-info':UserInfo
    }
}
</script>

<style>
  @import "assets/css/INIT.css";
</style>
