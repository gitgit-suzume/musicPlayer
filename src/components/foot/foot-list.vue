<template>
    <div class="bg" @click="hide($event)" v-show="show">
        <transition name="foot-list">
        <div class="container" v-show="show">
            <div class="button">
                <a href="javascript:;" class="info" @click="playingType=(playingType+1)%3">
                    <span class="img"
                          :style="{background:playingMode[playingType%3].img}"></span>
                    <span>{{playingMode[playingType%3].type}}({{songsCount}})</span>
                </a>
                <a href="javascript:;" class="clear">
                    <span class="el-icon-delete"></span>
                    <span>清空</span>
                </a>
                <a href="javascript:;" class="collect">
                    <span class="el-icon-printer"></span>
                    <span>收藏全部</span>
                </a>
            </div>
            <ul>
                <li v-for="(item,index) in list" @click="changeCurSong(index)">
                    <a href="javascript:;">
                        <span class="bugle" v-show="currentSong===index"></span>
                        <div class="aboutSong">
                            <span :class="['song',currentSong===index?'active':'']">{{item.name}}</span>
                            <span :class="['singer',currentSong===index?'active':'']">- {{item.singer}}</span>
                        </div>
                        <span class="remove" @click="clearSong(index)">x</span>
                        <span class="songSheet" v-show="currentSong===index">8</span>
                    </a>
                </li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<style lang="less" scoped>
    @keyframes to-up {
        0%{
            bottom:-50%;
            opacity: 0;
        }
        100%{
            bottom: 0;
            opacity: 1;
        }
    }
    .foot-list-enter-active{
        animation: to-up .25s ease;
    }
    .foot-list-leave-active{
        animation: to-up .25s ease reverse;
    }
    .bg{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index: 300;
        transition: opacity .25s;
    }
    .container{
        width: 100%;
        height: 50%;
        background: white;
        overflow: scroll;
        overflow-x: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .button{
        position: fixed;
        background: white;
        width: 100%;
        height: 20px;
        padding:8px 0;
        border-bottom: 1px solid gray;
        z-index: 300;
    }
    ul{
        padding: 36px 0 0 0;
    }
    .info{
        float: left;
        color: black;
        display: flex;
        align-items: center;
    }
    .info .img{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin:0 6px 0 8px;
    }
    .info span:last-child{
        font: 16px normal;
    }
    .clear{
        float: right;
        display: flex;
        align-items: center;
        margin: 0 10px 0 25px;
        font: 14px normal;
    }
    .clear .img{
        display: inline-block;
        height: 20px;
        color: gray;
        font: 14px normal;
        margin: 0 3px 0 0;
    }
    .collect{
        float: right;
        display: flex;
        font: 14px normal;
        align-items: center;
    }
    .collect .img{
        display: inline-block;
        font: 14px normal;
        height: 20px;
        color: gray;
        margin: 0 3px 0 0;
    }
    .container li{
        height: 20px;
        padding: 6px 10px 6px 6px;
        background: white;
        border-bottom: 1px solid gray;
    }
    .aboutSong{
        float: left;
        max-width: 75vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .song{
        font: 14px nromal;
        color: black;
        line-height: 20px;
        text-align: center;
    }
    .singer{
        color: gray;
        font: 12px normal;
    }
    .bugle{
        float: left;
        width: 14px;
        height: 14px;
        margin: 3px 6px 0 0;
        border-radius: 50% 50%;
        background: red;
    }
    .active{
        color:red;
    }
    .remove{
        color: gray;
        float: right;
        font: 14px normal;
    }
    .songSheet{
        color: gray;
        float: right;
        transform: rotate(30deg);
        margin: 0 23px 0 0;
        font: 14px normal;
    }
</style>
<script>
    export default {
        name:'foot-list',
        data: function(){
            return {
                playingType:0,
                songsCount:0,
                songsNum:0,
                playingMode:[{
                    type:'列表循环',
                    img:'yellow'
                },{
                    type:'随机播放',
                    img:'orange'
                },{
                    type:'单曲循环',
                    img:'brown'
                }]
            }
        },
        computed:{
            show: function () {
                return this.$store.getters.showPlayList;
            },
            list: function(){
                return this.$store.state.playingList;
            },
            currentSong:function () {
                return this.$store.state.playingIndex;
            }
        },
        methods:{
            clearSong: function (index) {
                this.$store.commit('removePlayingListSongs', index);
            },
            hide: function (event) {
                if(event.target == event.currentTarget){
                    this.$store.commit('hidePlayList');
                }
            },
            changeCurSong:function (index) {
                this.$store.commit('changeCurSong', index);
            }
        },
    }
</script>
