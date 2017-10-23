<template>
    <div class="recommend-title">
        <a href="javascript:;">
            <h1>{{title}}</h1>
            <span>></span>
        </a>
    </div>
</template>
<style scoped>
    .recommend-title{
        margin:10px 0;
        border-left: #c62f2f solid 3px;
    }
    .recommend-title a:hover{
        text-decoration:none;
    }
    .recommend-title h1{
        display: inline-block;
        margin: 0 0 0 8px;
        color: black;
        font: 14px normal;
    }
    .recommend-title span{
        color: rgba(0,0,0,0.5);
        font: 14px normal;
    }
    .recommend-title:active h1{
        opacity: 0.5;
    }
    .recommend-title:active span{
        opacity: 0.5;
    }
</style>
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