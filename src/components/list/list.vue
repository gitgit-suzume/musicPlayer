<template>
    <div class="list">
        <default-list></default-list>
        <create-list></create-list>
        <collect-list></collect-list>
    </div>
</template>
<style scoped>
    .list{
        margin: 50px 0 0 0;
    }
</style>
<script>
    import Default from './default-list.vue'
    import Create from './create-list.vue'
    import Collect from './collect-list.vue'
    export default {
        name:'list',
        data: function () {
            return {
                info:'list data'
            }
        },
        components:{
            'default-list':Default,
            'collect-list':Collect,
            'create-list':Create
        },
        created: function () {
            console.log('---------from list----------')
        }
    }
</script>