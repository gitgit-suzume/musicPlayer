<template>
    <div class="progress-bar">
        <span>{{curTime}}</span>
        <div class="bar">
            <div class="finish-bar"></div>
            <div class="all-bar"></div>
            <div class="ball"></div>
        </div>
        <span>{{allTime}}</span>
    </div>
</template>
<script>
    export default {
        name: 'progress bar',
        data () {
            return {
                info: 'progress bar',
                curTime: '00:00',
                allTime: '04:00'
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    .progress-bar {
        display: flex;
        justify-content: space-between;
        .bar{
            .ball{
                width: 1.23vw;
                height: 1.23vw;
                border-radius: 50% 50%;
                border: 1.76vw solid white;
                background: @red;
            }
        }
    }
</style>