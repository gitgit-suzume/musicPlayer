<template>
    <div class="intro" :style="{background:coverImg}">
        <div class="cover" :style="{background:coverImg}">
            <span class="cover-img"></span>
            <div class="listeners">
                <span class="icon">U</span>
                <span>{{ListenersView}}</span>
            </div>
        </div>
        <div class="info">
            <span class="sheetname">{{sheetName}}</span>
            <a href="javascript:;">
                <span class="head-img" :style="{background:headImg}"></span>
                <span class="username">{{creater}}></span>
            </a>
        </div>
    </div>
</template>
<style scoped>
    .intro{
        width: 100%;
        padding: 17px 0;
        height: 24vw;
        margin: 50px 0 0 0;
    }
    .cover{
        width: 25vw;
        height: 25vw;
        float: left;
        box-sizing: border-box;
        margin: 0 17px;
        box-sizing: border-box;
        border: 1px solid white;
        overflow: hidden;
    }
    .listeners{
        float: right;
        color: white;
        margin: 6px 6px 0 0;
    }
    .listeners span:first-child{
        font: 12px normal;
    }
    .listeners span:last-child{
        font: 12px normal;
    }
    .icon{
        display: inline-block;
        box-sizing: border-box;
        transform: rotate(180deg);
    }
    .info{
        overflow: hidden;
        margin: 0 17px 0 0;
    }
    .sheetname{
        display: inline-block;
        font: 24px normal;
        margin: 5px 0;
        color: white;
    }
    .info a{
        display: flex;
        align-items: center;
        color: white;
        font: 14px normal;
        transition: all 1s ease-out;
    }
    .info a:active{
        background: rgba(255,255,255,0.5);
    }
    .head-img{
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid white;
        border-radius: 50% 50%;
        margin: 0 6px 0 0;
        background: red !important;
    }
</style>
<script>
    export default {
        name: 'intro',
        data:function() {
            return {
                creater:'夏夜丶萤火',
                sheetName:'古风',
                coverImg:'black',
                headImg:'gray',
                listeners:190000
            }
        },
        computed:{
            ListenersView:function () {
                return this.listeners >= 100000 ? Math.ceil(this.listeners/100000)+'万':this.listeners;
            }
        },
        created:function () {
            console.log('from song-sheet intro.')
        }
    }
</script>