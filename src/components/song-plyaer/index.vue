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
    export default {
        name: 'song-player',
        data () {
            return {
                info: 'song-player'
            }
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
        z-index: 450;
        width: 100%;
        height: 100%;
        background: black;
    }
</style>