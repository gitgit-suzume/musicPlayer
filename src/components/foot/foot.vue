<template>
    <div class="foot">
        <img class="img" :src="info?'../../../static/img/'+info.img+'.jpg':'../../../static/img/logo.png'" alt="#">
        <div class="song-info">
            <span>{{info?info.name:'为了表示我做了这里，姑且显示一下'}}</span>
            <span>{{info?info.singer:'正常情况下播放列表无歌曲，此处用v-show隐藏'}}</span>
        </div>
        <a href="javascript:;" type="button" class="list" @click="showPlayList()">|||</a>
        <a href="javascript:;"
           type="button"
           @click="togglePlaying()"
           :class="['player',playing?'':'stop']">+</a>
    </div>
</template>
<style scoped>
    .foot{
        width: 100%;
        height: 40px;
        position: fixed;
        background:#fff;
        bottom: 0;
        padding:5px 0;
        z-index: 4000;
    }
    .img{
        width: 40px;
        height: 40px;
        float: left;
        margin: 0 5px;
    }
    .song-info{
        float: left;
    }
    .song-info span{
        display: block;
    }
    .song-info span:first-child{
        margin: 5px 0 0 0;
        color: black;
        font: 12px normal;
    }
    .song-info span:last-child{
        margin: 0 0 5px 0;
        color: gray;
        font: 10px normal;
    }
    a{
        float: right;
    }
    a:hover{
        text-decoration: none;
    }
    .list{
        font: 20px normal;
        padding:5px;
        line-height: 30px;
        text-align: center;
        transform: rotate(90deg);
    }
    .player{
        width: 20px;
        height: 20px;
        font: 20px normal;
        line-height: 20px;
        text-align: center;
        padding:0 0 1px 1px;
        border-radius: 50% 50%;
        border: 1px solid black;
        margin: 10px 10px 0 0;
        transition: all 0.5s;
        color: #c62f2f;
    }
    .stop{
        transform: rotate(45deg);
        color: black;
    }
</style>
<script>
    export default {
       name:'footer',
        data:function () {
            return {
                img:'pink',
                song:'Gorgeous',
                singer:'Taylor Swift',
                allTime:'03:29',
                finishTime: '00:00',
            }
        },
        computed:{
            playing: function () {
                return this.$store.state.playingTag;
            },
            info: function(){
                var result = this.$store.state.playingList,
                    index = this.$store.state.playingIndex;
                return result[index];
            }
        },
        methods:{
            showPlayList:function () {
                this.$store.commit('showPlayList');
            },
            togglePlaying:function () {
                this.$store.commit('stopPlaying');
            }
        }
    }
</script>