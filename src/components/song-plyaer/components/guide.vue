<template>
    <div class="guide">
        <div class="left">
            <i class="el-icon-back arrow"></i>
            <div class="info">
                <span class="song">{{song}}</span>
                <p>
                <span class="singer"
                      v-for="(item, index) in singer">
                    {{item}}
                    {{(index < (singer.length - 1)) ? '/' : ''}}
                </span>
                </p>
            </div>
        </div>
        <div class="right">
            <i class="el-icon-share"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'guide',
        data:function (){
            return {
                song: '牵丝戏',
                singer: ['银临', 'Aki阿杰']
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin.less";
    .guide{
        width: 100vw;
        height: @header-height;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
        i{
            font-size: 5vw;
        }
        .left{
            display: flex;
            align-items: center;
            .arrow{
                margin: 0 5.28vw;
            }
            .song{
                font-size: 4.58vw;
                display: inline-block;
                max-width: 50vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p{
                max-width: 50vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: rgba(255, 255, 255, 0.7);
                font-size: 3.7vw;
            }
        }
        .right{
            margin: 0 3.7vw 0 0;
        }

    }
</style>