<template>
    <div class="classify" @click="active($event)">
        <li v-for="(item,index) in titles">
            <a href="javascript:;" >
                <span :class="index==0?'classify-active':''">{{item}}</span>
            </a>
        </li>
    </div>
</template>
<style scoped>
    .classify{
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
    .classify li{
        width: 25%;
    }
    .classify li a:hover{
        text-decoration: none;
    }
    .classify li a:active span{
        background-color: rgba(0,0,0,0.05);
    }
    .classify li span{
        color: #606261;
        font: 14px normal;
        line-height: 34px;
        text-align: center;
        display: inline-block;
        width: 100%;
    }
    .classify-active{
        border-bottom:3px solid #c62f2f ;
    }

</style>
<script>
    export default {
        name:'home-guide',
        data: function (){
            return {
                titles:['单曲','歌手','专辑','文件夹']
            }
        },
        methods:{
            active: function (event) {
                $('.classify-active').removeClass('classify-active');
                $(event.target).addClass('classify-active')
            }
        }
    }
</script>