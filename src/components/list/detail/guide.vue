<template>
    <div @click="showing=false" class="guide" v-show="showing">
        <li class="left">
            <a href="javascript:;" class="back"><span>←</span></a>
            <span class="title">本地音乐</span>
        </li>
    </div>
</template>
<style scoped>
    .guide{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        z-index: 999;
        width: 100%;
        height: 50px;
        background-color: #c62f2f;
        overflow: hidden;
    }
    .guide li{
        display: inline-block;
        height: 100%;
    }
    .back{
        display: inline-block;
        height: 100%;
        font:30px normal;
        line-height: 50px;
        text-align: center;
        color: white;
        margin: 0 9px 0 17px;
    }
    .guide li a:hover{
        text-decoration: none;
    }
    .title{
        display: inline-block;
        height: 100%;
        line-height: 100%;
        text-align: center;
        color: white;
        font: 22px normal;
    }
</style>
<script>
    export default {
        name: 'guide',
        data () {
            return {
                showing:false,
            }
        },
    }
</script>
