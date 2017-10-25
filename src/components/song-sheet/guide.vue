<template>
    <div class="guide" :style="{background:bgColor}">
        <div class="left">
            <a href="javascript:;" class="back">←</a>
            <span class="name">歌单</span>
        </div>
        <div class="right">
            <a href="javascript:;" class="search">O-</a>
            <a href="javascript:;" class="all-manage">...</a>
        </div>
    </div>
</template>
<style scoped>
    a, span{
        color: white;
        font: 20px normal;
    }
    .guide{
        position: fixed;
        top:0;
        left:0;
        z-index: 2000;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .back{
        margin: 0 10px 0 17px;
    }
    .search{
        display: inline-block;
        transform: rotate(45deg);
    }
    .all-manage{
        display: inline-block;
        transform: rotate(90deg);
        margin: 0 10px 0 17px;
    }
</style>
<script>
    export default {
        name: 'header',
        data:function() {
            return {
                bgColor:'black',
                info:'from song-sheet header.'
            }
        },
        created:function () {
            console.log('from song-sheet header.')
        }
    }
</script>