<template>
    <div class="song-sheet">
        <guide></guide>
        <intro></intro>
        <info></info>
        <playing-list></playing-list>
        <foot-order></foot-order>
    </div>
</template>
<style scoped>
    .song-sheet{
        position: absolute;
        z-index: 2000;
        height: 100%;
        background: #f2f2f2;
    }
</style>
<script>
    import Guide from './guide.vue'
    import Intro from './intro.vue'
    import Info from './sheet-info.vue'
    import PlayingList from './playing-list.vue'
    import FootOrder from './foot-order.vue'
    export default {
        name: 'song-sheet',
        data () {
            return {
                info:'from song sheet'
            }
        },
        components:{
            guide: Guide,
            intro:Intro,
            info:Info,
            'playing-list':PlayingList,
            'foot-order':FootOrder
        },
        created:function () {
            console.log('from song sheet');
        }
    }
</script>