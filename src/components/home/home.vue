<template>
    <div class="home">
        <guide></guide>
        <router-view></router-view>
    </div>
</template>
<script>
    import guide from './home-guide.vue'
    export default {
        name: 'home',
        data: function(){
            return {}
        },
        components: {
            guide: guide,
        },
    };
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    @padding-top: (@home-guide-heigth + @header-height);
    .home{
        overflow: hidden;
        padding: @padding-top 0 50px 0;
    }
</style>