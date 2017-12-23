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
<style scoped>
    a, span{
        color: white;
        font: 20px normal;
    }
    .guide{
        position: fixed;
        top:0;
        left:0;
        z-index: 125;
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
    .more{
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
        methods:{
            hide:function () {
                this.$store.commit('hideSongSheet');
            }
        },
    }
</script>
