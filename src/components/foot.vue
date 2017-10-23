<template>
    <div class="foot">
        <div class="img" :style="{background:img}"></div>
        <div class="song-info">
            <span>{{song}}</span>
            <span>{{singer}}</span>
        </div>
        <a href="javascript:;" type="button" class="list">|||</a>
        <a href="javascript:;"
           type="button"
           @click="playing=!playing"
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
                info:'from footer',
                img:'pink',
                song:'Gorgeous',
                singer:'Taylor Swift',
                allTime:'03:29',
                finishTime: '00:00',
                playing:false
            }
        },
        created:function () {
            console.log('---------from footer---------');
        }
    }
</script>