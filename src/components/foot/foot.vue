<template>
    <div class="foot" v-show="info">
        <img class="img" :src="info.album.picUrl" alt="#">
        <div class="song-info">
            <span>{{info.name}}</span>
            <span v-for="(singer,index) in info.artists">
                {{singer.name}}
                {{index < (info.artists.length-1)?'/':''}}
            </span>
        </div>
        <a href="javascript:;" type="button" class="list" @click="showPlayList()">
                <i class="el-icon-more"></i>
            </a>
        <a href="javascript:;"
               type="button"
               @click="togglePlaying()"
               class="player"
               v-if="playing"
               :class="playing?'':'stop'">+</a>
        <a href="javascript:;"
               type="button"
               @click="togglePlaying()"
               class="player"
               v-else
               :class="playing?'':'stop'">||</a>
    </div>
</template>
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
                return result[index]
            }
        },
        methods:{
            showPlayList () {
                this.$store.commit('showPlayList');
            },
            togglePlaying () {
                this.$store.commit('stopPlaying');
            }
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @ctn-margin: 1.76vw;
    .foot{
        width: 100%;
        position: fixed;
        background: white;
        bottom: 0;
        padding:5px 0;
        z-index: 200;
        padding: @ctn-margin 0;
        .img{
            width: 10.56vw;
            height: 10.56vw;
            float: left;
            margin: 0 @ctn-margin;
        }
        .song-info{
            float: left;
            span{
                color: gray;
                font-size: 3.17vw;
            }
            span:first-child{
                color: black;
                font-size: 3.52vw;
                max-width: 50vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span:nth-child(1){
                display: block;
            }
        }
        a{
            float: right;
        }
        a:hover{
            text-decoration: none;
        }
        .list{
            display: inline-block;
            font-size: 5.99vw;
            margin: @ctn-margin;
        }
        .player{
            width: 7.75vw;
            height: 7.75vw;
            font-size: 4vw;
            line-height: 7.75vw;
            text-align: center;
            margin: @ctn-margin 0;
            border-radius: 50% 50%;
            border: 1px solid black;
            color: @red;
        }
        .stop{
            color: black;
        }
    }
</style>