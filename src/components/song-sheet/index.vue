<template>
    <div class="song-sheet" v-show="showing">
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
        top: 0;
        left: 0;
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
//                showing:true,
                info:'from song sheet'
            }
        },
        computed:{
            showing:function () {
                return this.$store.getters.showSongSheet;
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
            console.log(this.$store);
            console.log('from song sheet');
        }
    }
</script>