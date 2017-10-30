<template>
    <div class="intro" >
        <div class="cover">
            <img :src="songSheet.img?'../../../static/img/'+songSheet.img+'.jpg':'../../../static/img/logo.png'" alt="图片">
            <div class="listeners">
                <span class="icon">U</span>
                <span>{{songSheet.listener>100000?Math.ceil(songSheet.listener/100000)+'万':songSheet.listener}}</span>
            </div>
        </div>
        <div class="info">
            <span class="sheetname">{{songSheet.name}}</span>
            <a href="javascript:;">
                <!--<img class="head-img" :src="'../../../static/img/'+userImg+'.jpg'" alt="#">-->
                <span class="head-img"></span>
                <span class="username">{{songSheet.create}}></span>
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
        background: black;
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
        background: black;
    }
    .cover img{
        width: 100%;
        height: 100%;
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
        border-radius: 50% 50%;
        background: white;
        margin: 0 7px 0 0;
    }
</style>
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