<template>
    <transition name="song-sheet">
    <div class="song-sheet" v-show="showing">
        <guide></guide>
        <intro :coverImgUrl="info.coverImgUrl"
               :creator="info.creator.nickname"
               :userImg="info.creator.avatarUrl"
               :listener="info.playCount"
               :name="info.name"></intro>
        <info :collect="info.subscribedCount"
              :share="info.shareCount"
              :comment="info.commentCount"></info>
        <playing-list :count="info.trackCount" :list="info.tracks"></playing-list>
        <!--<foot-list></foot-list>-->
    </div>
    </transition>
</template>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @keyframes to-up {
         0%{
             top:75%;
             opacity: 0;
         }
         100%{
             top: 0;
             opacity: 1;
         }
     }
    .song-sheet-enter-active{
        animation: to-up .25s ease;
    }
    .song-sheet-leave-active{
        animation: to-up .25s ease reverse;
    }
    .song-sheet{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        height: 100%;
        overflow: auto;
        background: #f2f2f2;
    }
</style>
<script>
    import Guide from './guide.vue'
    import Intro from './intro.vue'
    import Info from './sheet-info.vue'
    import PlayingList from './playing-list.vue'
    import GetData from '../../api/getData'
    export default {
        name: 'song-sheet',
        data(){
            return {
                info:{
                    creator:{}
                }
            }
        },
        computed:{
            showing () {
                if(this.$store.state.listId !== 0) {
                    GetData.detailList(this.$store.state.listId).then(res => {
                        this.info = res.data.result
                    }).catch(err => {
                        console.log(err);
                    })
                }
                return this.$store.getters.showSongSheet;
            }
        },
        components:{
            guide: Guide,
            intro:Intro,
            info:Info,
            'playing-list':PlayingList
        },
    }
</script>
