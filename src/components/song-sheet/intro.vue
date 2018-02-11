<template>
    <div class="intro" >
        <div class="cover">
            <img :src="songSheet.img?'../../../static/img/'+songSheet.img+'.jpg':'../../../static/img/logo.png'" alt="图片">
            <div class="listeners">
                <span>{{songSheet.listener>100000?Math.ceil(songSheet.listener/100000)+'万':songSheet.listener}}</span>
            </div>
        </div>
        <div class="info">
            <span class="sheet-name">{{songSheet.name}}</span>
            <a href="javascript:;">
                <!--<img class="head-img" :src="'../../../static/img/'+userImg+'.jpg'" alt="#">-->
                <span class="head-img"></span>
                <span class="user-name">{{songSheet.create}}></span>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'intro',
        computed:{
            ListenersView:function () {
                return this.listeners >= 100000 ? Math.ceil(this.listeners/100000)+'万':this.listeners;
            },
            songSheet:function () {
                return this.$store.state.songSheet;
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    .intro{
        width: 100%;
        height: auto;
        padding: 6.16vw 0;
        margin: @header-height 0 0 0;
        background: black;
        display: flex;
        .cover{
            width: 35.21vw;
            height: 35.21vw;
            box-sizing: border-box;
            margin: 0 5.11vw 0 6.69vw;
            box-sizing: border-box;
            overflow: hidden;
            background: black;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .listeners{
                position: absolute;
                color: white;
                top: 0;
                background: linear-gradient(to bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, 0));
                width: 100%;
                padding: 1.41vw 0;
                span{
                    float: right;
                    font-size: 2.46vw;
                    margin: 0 1.41vw 0 0;
                }
            }
        }
        .info{
            overflow: hidden;
            margin: 0 17px 0 0;
            .sheet-name{
                display: inline-block;
                font-size: 4.93vw;
                padding: 3.17vw 0 7.75vw 0;
                color: white;
            }
            a{
                display: flex;
                align-items: center;
                color: white;
                font: 14px normal;
                transition: all 1s ease-out;
            }
            a:active{
                background: rgba(255,255,255,0.5);
            }
            .head-img{
                display: inline-block;
                width: 7.75vw;
                height: 7.75vw;
                border-radius: 50% 50%;
                background: white;
                margin: 0 2.82vw 0 0;
            }
            .user-name{
                font-size: 3.52vw;
            }
        }
    }
</style>