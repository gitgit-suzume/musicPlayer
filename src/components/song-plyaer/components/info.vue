<template>
    <div class="info">
        <i v-if="star"
           class="el-icon-star-on had-star"></i>
        <i v-else class="el-icon-star-off"></i>
        <i class="el-icon-download"></i>
        <i class="el-icon-edit-outline"></i>
        <i class="el-icon-menu"></i>
    </div>
</template>
<script>
    export default {
        name: 'song-player-info',
        data(){
            return {
                info: 'info',
                star: false
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    .info{
        display: flex;
        justify-content: center;
        color: white;
        font-size: 5.28vw;
        .had-star{
            color: @red;
        }
        i{
            margin: 0 13.2vw 0 0;
        }
        i:last-child{
            margin: 0 0;
        }
    }
</style>