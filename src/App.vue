<template>
  <div id="app">
    <guide></guide>
    <router-view></router-view>
    <foot></foot>
    <foot-list></foot-list>
  </div>
</template>

<script>
    import guide from './components/guide.vue'
    import home from './components/home/home.vue'
    import foot from './components/foot.vue'
    import FootList from './components/foot-list.vue'
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
        'foot-list':FootList
    }
}
</script>

<style>
  @import "assets/css/INIT.css";
</style>
