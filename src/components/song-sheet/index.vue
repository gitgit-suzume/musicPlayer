<template>
    <transition name="song-sheet">
    <div class="song-sheet" v-show="showing">
        <guide></guide>
        <intro></intro>
        <info></info>
        <playing-list></playing-list>
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
        computed:{
            listId(){
                return this.$store.state.listId
            },
            showing () {
                console.log(this.listId)
                if(this.listId !== 0) {
                    GetData.detailList(this.listId).then(res => {
                        console.log(res)
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
