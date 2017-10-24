<template>
    <div v-show="showing" >
        <div class="bg" @click="showing=false">
            <div class="container">
                <div class="header">
                    <div class="appear">
                        <div class="img"></div>
                    </div>
                    <a href="javascript:;" class="username" :title="username">{{username}}</a>
                    <a href="javascript:;" class="lv">lv.{{lv}}</a>
                    <a href="javascript:;" class="register" @click="register=true">{{register?'已签到':'签到'}}</a>
                </div>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">我的消息</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">会员中心</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">商城</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">在线听歌免流量</span>
                        </a>
                    </li>
                </ul>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">我的好友</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">附近的人</span>
                        </a>
                    </li>
                </ul>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">个性换肤</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">听歌识曲</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">定时停止播放</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">扫一扫</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">音乐闹钟</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">驾驶模式</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img"></span>
                            <span class="title">音乐云盘</span>
                        </a>
                    </li>
                </ul>
            </div>
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
        z-index: 1000;
        /*transition: all 1.5s ease-out;*/
    }
    .container{
        width: 250px;
        height: 100%;
        background: #e8e6e6;
        position: fixed;
        bottom: 0;
        left: 0;
        overflow: scroll;
        /*scrollbar:none;*/
        /*overflow-x: hidden;*/
        overflow-y: hidden;
        /*transition: all 1.5s ease-out;*/
    }
    .header{
        background: black;
        width: 100%;
        height: 130px;
        padding: 20px 0 0 0;
    }
    .appear .img{
        margin:0 0 0 7px;
        width: 75px;
        height: 75px;
        background: white;
        border-radius: 50% 50%;
    }
    .header a{
        color: white;
    }
    .username{
        float: left;
        font: 14px normal;
        display: inline-block;
        max-width: 57%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 17px 0 0 7px;
    }
    .lv{
        float: left;
        font: 10px italic;
        padding: 0 5px;
        border: 1px solid white;
        border-radius: 8px;
        margin: 19px 0 0 0;
       }
    .register{
        float: right;
        font: 12px bold;
        padding: 0 8px;
        border: 1px solid white;
        border-radius: 8px;
        margin: 17px 5px 0 0;
    }
    ul{
        margin: 0 0 5px 0;
    }
    li{
        width: 100%;
        background: white;
        display: flex;
        align-items: center;
    }
    li a{
        display: inline-block;
        padding:10px 0;
        width: 100%;
        color: black;
        font: 14px normal;
        transition:all 0.5s;
    }
    li a:active{
        background: rgba(0,0,0,0.1);
    }
    li .img{
        display: inline-block;
        width: 14px;
        height: 14px;
        margin: 3px 6px 0 7px;
        border-radius: 50% 50%;
        border: 1px solid gray;
    }
</style>
<script>
    export default {
        name:'user-info',
        data: function () {
            return {
                showing:true,
                register:false,
                username:'夏夜丶萤火夏夜丶萤火夏夜丶萤火夏夜丶萤火',
                lv:6
            }
        },
//        methods:{
//          disappear:function (event) {
//              var count = 0;
//              if(event.target==event.currentTarget){
//                  var width = $('.container').innerWidth();
//                  $('.container').css('left','-'+width+'px');
//                  $('.bg').css('opacity','0');
//              }
//          }
//        },
        created:function () {
            console.log('from user-info');
            $('.container').css('overflow-y')
        }
    }
</script>