<template>
    <div class="detail">
        <guide></guide>
        <classify></classify>
    </div>
</template>
<style scoped>
    .detail{
        position: relative;
        left: 0;
        top: 0;
        z-index: 1001;
    }
</style>
<script>
    import Guide from './guide.vue'
    import Classify from './classify.vue'
    export default {
        name:'detail',
        data:function () {
            return {
                info:'from detail'
            }
        },
        components:{
            guide:Guide,
            classify:Classify
        }
    }
</script>