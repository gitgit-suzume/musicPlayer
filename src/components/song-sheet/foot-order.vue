<template>
    <div class="bg" @click="quit($event)" v-show="show">
        <div class="container">
            <ul>
                <li class="header">
                    <a href="javascript:;"  @click="test()">
                        <span class="header-tile" :title="info.name">歌曲:{{info.name}}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>下一首播放</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>收藏到歌单</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>评论({{info.command}})</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>分享</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>歌手：{{info.singer}}</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>专辑：{{info.album}}</span></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .bg{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index: 5000;
    }
    .container{
        width: 100%;
        height: 50%;
        background: white;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .header-tile{
        display: inline-block;
        font: 14px normal;
        max-width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .img{
        float: left;
        width: 14px;
        height: 14px;
        margin: 3px 6px 0 0;
        border-radius: 50% 50%;
        background: red;
    }
    .title{
        font: 14px nromal;
        overflow: hidden;
        color: black;
        padding:0 0 5px 0;
        border-bottom: 1px solid gray;
    }
    li a{
        display: block;
        width: 100%;
        padding: 10px 0 10px 10px;
    }
    li:first-child a{
        padding: 10px 0 10px 10px;
    }
</style>
<script>
    export default {
        name:'foot-list',
//                song:
//                singer:'奇然',
//                comment:5992
        computed:{
            show:function () {
                return this.$store.getters.showFootOrder;
            },
            info(){
                return this.$store.state.songSheetFoot;
            }
        },
        methods:{
            test:function () {
                ++this.fromNum;
            },
            quit: function (event) {
                if(event.target == event.currentTarget){
                    this.$store.commit('hideFootOrder');
                }
            }
        },
    }
</script>