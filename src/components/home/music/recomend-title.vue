<template>
    <div class="recommend-title">
        <a href="javascript:;">
            <h1>{{title}}</h1>
            <span>></span>
        </a>
    </div>
</template>
<script>
    export default {
        name:'recommend-tilte',
        data: function () {
            return {
                title:'推荐歌单'
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../../style/mixin";
    .recommend-title{
        margin: 6.69vw 0 4.23vw 0;
        border-left: @red solid .71vw;
        a:hover{
            text-decoration:none;
        }
        h1{
            display: inline-block;
            margin: 0 0 0 2.46vw;
            color: black;
            font-size: 4.23vw;
        }
        span{
            color: rgba(0,0,0,0.5);
            font: 14px normal;
        }
    }
    .recommend-title:active{
        h1 {
            opacity: 0.5;
        }
        span{
            opacity: 0.5;
        }
    }
</style>
