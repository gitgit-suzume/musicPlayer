<template>
    <div class="setting">
        <div class="left">
            <i class="el-icon-refresh"></i>
        </div>
        <div class="middle">
            <i class="el-icon-arrow-left pre"></i>
            <i class="el-icon-caret-right playing-button"></i>
            <i class="el-icon-arrow-right next"></i>
        </div>
        <div class="right">
            <i class="el-icon-more"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'setting',
        data(){
            return {
                info: 'setting'
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    @margin-between: 4.75vw;
    .setting{
        clear: both;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        .left{
            margin-left: @margin-between;
            font-size: 5.99vw;
        }
        .right{
            font-size: 5.28vw;
            margin-right: @margin-between;
        }
        .middle{
            display: flex;
            align-items: center;
        }
        .playing-button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 12.5vw;
            height: 12.5vw;
            border: 1px solid white;
            border-radius: 50% 50%;
            font-size: 7.5vw;
            margin: 0 11.8vw;
        }
        .pre, .next{
            font-size: 6.16vw;
        }
    }
</style>