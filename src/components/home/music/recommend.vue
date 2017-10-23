<template>
    <div>
        <recommend-title></recommend-title>
        <recommend-list></recommend-list>
    </div>
</template>
<script>
    import recommendTitle from './recomend-title.vue'
    import recommendList from './recommend-list.vue'
    export default {
        name:'recommend',
        components:{
            'recommend-title': recommendTitle,
            'recommend-list': recommendList
        }
    }
</script>