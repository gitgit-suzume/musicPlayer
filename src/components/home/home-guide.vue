<template>
    <div class="home-guide" @click="active($event)">
        <router-link to="/home/music" tag="li">
            <a href="javascript:;">
                <span class="home-guide-active">音乐</span>
            </a>
        </router-link>
        <router-link to="/home/video" tag="li">
            <a href="javascript:;">
                <span>视频</span>
            </a>
        </router-link>
        <router-link to="/home/radio" tag="li">
            <a href="javascript:;">
                <span>电台</span>
            </a>
        </router-link>
    </div>
</template>
<script>
    export default {
        name:'home-guide',
        data: function (){
            return {
                titles:['音乐','视频','电台']
            }
        },
        methods:{
            active: function (event) {
                $('.home-guide-active').removeClass('home-guide-active');
                $(event.target).addClass('home-guide-active')
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    a:hover{
        text-decoration: none;
    }
    .home-guide{
        position: fixed;
        top: @header-height;
        left: 0;
        right: 0;
        width: 100%;
        height: @home-guide-heigth;
        background: white;
        z-index: 10;
        font:14px normal;
        display: flex;
        justify-content: center;
        li{
            /*width: 18.66vw;*/
            margin: 0 10.21vw 0 0;
            a:active{
                span{
                    background-color: rgba(0,0,0,0.05);
                }
            }
            span{
                color: #606261;
                font-size: 4.23vw;
                /*line-height: 11.27vw;*/
                text-align: center;
                display: inline-block;
                /*width: 100%;*/
                padding: 4.23vw 5.99vw 3.17vw 5.99vw;
            }
            .home-guide-active{
                color: @red;
                border-bottom: .71vw solid @red ;
            }
        }
        li:last-child{
            margin: 0 0;
        }
    }

</style>
