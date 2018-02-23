<template>
    <div class="song-player">
        <guide></guide>
        <record></record>
        <info></info>
        <progress-bar ref="player"></progress-bar>
        <setting></setting>
    </div>
</template>
<script>
    import Guide from './components/guide.vue'
    import Record from './components/record.vue'
    import Info from './components/info.vue'
    import ProgressBar from './components/progress-bar.vue'
    import Setting from './components/setting.vue'
    import GetData from '../../api/getData'
    export default {
        name: 'song-player',
        data(){
            return {
                enter: true
            }
        },
        // computed:{
        //     info(){
        //         let index = this.$store.state.playingIndex
        //         let list = this.$store.state.playingList
        //         return list[index]
        //     }
        // },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.enter = true
            })
        },
        beforeRouteLeave(to, from, next) {
            this.enter = false
            next()
        },
        components: {
            guide: Guide,
            record: Record,
            info: Info,
            setting: Setting,
            'progress-bar': ProgressBar
        },
    }
</script>
<style lang="less" scoped>
    @import (less) "../../style/mixin";
    .song-player{
        position: fixed;
        z-index: 300;
        width: 100%;
        height: 100%;
        background: black;
    }
</style>