<template>
    <div class="playing-list">
        <a class="the-head">
            <div class="left">
                <a href="javascript:;" class="head-img"></a>
                <span class="play-all">播放全部</span>
                <span class="count">(共{{count}}首)</span>
            </div>
            <div class="right">
                <a href="javascript:;" class="button">|||</a>
                <a href="javascript:;" class="choose">多选</a>
            </div>
        </a>
        <ul>
            <li v-for="(item,index) in list">
                <a href="javascript:;">
                    <div class="index">
                        <span class="hom"></span>
                        <span>{{index+1}}</span>
                    </div>
                    <div class="song">
                        <div class="info">
                            <span>{{item.song}}</span>
                            <div class="sub">
                                <span class="icon" v-show="item.download"></span>
                                <span>{{item.singer}}-{{item.album}}</span>
                            </div>
                        </div>
                        <a class="manage">
                            ...
                        </a>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .playing-list{
        background: white;
        width: 100%;
    }
    .the-head{
        display: block;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid gray;
    }
    .left{
        float: left;
        margin: 15px 0 15px 17px;
    }
    .head-img{
        display: inline-block;
        border: 1px solid black;
        border-radius: 50% 50%;
        width: 14px;
        height: 14px;
        margin: 0 17px 0 0;
    }
    .play-all{
        font: 16px normal;
        color: black;
    }
    .count{
        color: gray;
        font: 12px normal;
    }
    .right{
        float: right;
        margin: 15px 30px 15px 0;
    }
    .choose{
        font: 16px normal;
        color: black;
    }
    .button{
        display: inline-block;
        color: black;
        font: 16px normal;
        transform: rotate(90deg);
    }

    ul li{
        overflow: hidden;
        margin: -3px 0 0 0 ;
    }
    ul li>a{
        display: inline-block;
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
    }
    ul li>a:active{
        background: rgba(0,0,0,0.1);
    }
    .index{
        float: left;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .song{
        overflow: hidden;
        border-bottom: 1px solid #c1bdbd;
    }
    .info{
        float: left;
        padding: 9px 0;
    }
    .info span:first-child{
        display: inline-block;
        max-width: 75%;
    }
    .sub .icon{
        display: inline-block;
        background: deepskyblue;
        border-radius: 50% 50%;
        width: 10px;
        height: 10px;
    }
    .sub{
        font: 10px normal;
        color: gray;
    }
    .manage{
        float: right;
        height: 50px;
        width: 50px;
        margin: 0 1px 0 0;
        padding: 0 0 0 36px;
        font: 22px normal;
        transform: rotate(90deg);
        transition: all 0.2s linear;
    }
    /*.manage:active{*/
        /*background: rgba(0,0,0,0.1);*/
    /*}*/
</style>
<script>
    export default {
        name: 'playing-list',
        data () {
            return {
                count:56,
                list:[
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    },
                    {
                        song:'封疆',
                        singer:'东篱',
                        album:'东篱栏歌',
                        commentCount:14673,
                        download:true
                    }
                ]
            }
        },
        created:function () {
            console.log('from song-sheet playing-list.');
        }
    }
</script>