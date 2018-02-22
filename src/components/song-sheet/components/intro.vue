<template>
    <div class="intro" >
        <div class="cover">
            <img :src="coverImgUrl" alt="图片">
            <div class="listeners">
                <span>{{listener>100000?Math.ceil(listener/100000)+'万':listener}}</span>
            </div>
        </div>
        <div class="info">
            <span class="sheet-name">{{name}}</span>
            <a href="javascript:;">
                <img class="head-img" :src="userImg" alt="#">
                <!--<span class="head-img"></span>-->
                <span class="user-name">{{creator}}></span>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'intro',
        props:{
            coverImgUrl: {
                type: String,
                default: '#'
            },
            name: {
                type: String,
                default: ''
            },
            listener: {
                type:[Number, String],
                default: 0
            },
            userImg:{
                type: String,
                default: '#'
            },
            creator: {
                type: String,
                default: '歌单创建者'
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../../style/mixin";
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