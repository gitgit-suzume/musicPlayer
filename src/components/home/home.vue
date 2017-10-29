<template>
    <div class="home">
        <guide></guide>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .home{
        overflow: hidden;
        padding: 86px 0 50px 0;
    }
</style>
<script>
    import guide from './home-guide.vue'
    export default {
        name: 'home',
        data: function(){
            return {}
        },
        components: {
            guide: guide,
//            music:music
//            showing: showing,
//            meeting: meeting,
//            recommend: recommend
        },
        created:function () {
            console.log('---------from home----------')
        }
    };
</script>