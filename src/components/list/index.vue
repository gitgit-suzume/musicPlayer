<template>
    <div class="list">
        <default-list></default-list>
        <create-list :list="createList"></create-list>
        <create-list :list="collectList"></create-list>
        <foot-list></foot-list>
    </div>
</template>
<script>
    import Default from './default-list.vue'
    import Create from './create-list.vue'
    import Collect from './collect-list.vue'
    import FootList from './foot-list.vue'
    export default {
        name:'list',
        computed: {
            createList() {
                return this.$store.state.createList;
            },
            collectList() {
                return this.$store.state.collectList;
            }
        },
        components:{
            'default-list':Default,
            'collect-list':Collect,
            'create-list':Create,
            'foot-list':FootList
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    .list{
        width: 100vw;
        margin-top: @header-height;
        padding-bottom: @foot-height;
    }
</style>