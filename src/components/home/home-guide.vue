<template>
    <div class="home-guide" @click="active($event)">
        <router-link to="/home/music" tag="li" class="home-guide-active">
            <a href="javascript:;" >
                <span :class="index===0?'guide-active':''">音乐</span>
            </a>
        </router-link>
        <router-link to="/home/video" tag="li">
            <a href="javascript:;">
                <span :class="index===0?'guide-active':''">视频</span>
            </a>
        </router-link>
        <router-link to="/home/radio" tag="li">
            <a href="javascript:;">
                <span :class="index===0?'guide-active':''">电台</span>
            </a>
        </router-link>
    </div>
</template>
<style scoped>
    .home-guide{
        position: fixed;
        top: 50px;
        left: 0;
        right: 0;
        width: 100%;
        height: 34px;
        background: white;
        font:14px normal;
        display: flex;
        justify-content: center;
    }
    .home-guide li{
        width: 30%;
    }
    .home-guide li a:hover{
        text-decoration: none;
    }
    .home-guide li a:active span{
        background-color: rgba(0,0,0,0.05);
    }
    .home-guide li span{
        color: #606261;
        font: 14px normal;
        line-height: 34px;
        text-align: center;
        display: inline-block;
        width: 100%;
    }
    .home-guide-active{
        border-bottom:3px solid #c62f2f ;
    }

</style>
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