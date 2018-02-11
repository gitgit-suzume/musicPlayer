<template>
    <div class="guide" :style="{background:bgColor}">
        <div class="left">
            <a href="javascript:;" class="back el-icon-back" @click="hide()"></a>
            <span class="name">歌单</span>
        </div>
        <div class="right">
            <a href="javascript:;" class="el-icon-search"></a>
            <a href="javascript:;" class="more el-icon-more"></a>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    a, span{
        color: white;
        font-size: 5.28vw;
    }
    .guide{
        position: fixed;
        top:0;
        left:0;
        z-index: 125;
        width: 100%;
        height: @header-height;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .back{
        margin: 0 3.87vw 0 5.28vw;
    }
    .more{
        transform: rotate(90deg);
        margin: 0 6.34vw 0 8.45vw;
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
        methods:{
            hide:function () {
                this.$store.commit('hideSongSheet');
            }
        },
    }
</script>
