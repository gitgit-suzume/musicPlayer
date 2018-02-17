<template>
    <div class="info" :style="{background:bgColor}">
        <ul>
            <li>
                <a href="javascript:;">
                    <span class="img el-icon-star-off" >
                    </span>
                    <span class="name">{{curCollect}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img el-icon-info" >
                    </span>
                    <span class="name">{{curComment}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img el-icon-share" >
                    </span>
                    <span class="name">{{curShare}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img el-icon-download" >
                    </span>
                    <span class="name">{{downLoad}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'sheet-info',
        props:{
            collect: {
                type: [Number, String],
                default: '收藏'
            },
            comment: {
                type: [Number, String],
                default: '评论'
            },
            share: {
                type: [Number, String],
                default: '分享'
            }
        },
        data:function () {
            return {
                bgColor:'black',
                downLoad:'下载'
            }
        },
        computed: {
            curCollect(){
                if(this.collect === undefined || this.collect <= 0){
                    return '收藏'
                } else {
                    return this.collect > 100000 ? Math.ceil(this.collect / 100000) + '万' : this.collect;
                }
            },
            curComment(){
                if(this.collect === undefined || this.collect <= 0){
                    return '评论'
                } else {
                    return this.collect > 100000 ? Math.ceil(this.collect / 100000) + '万' : this.collect;
                }
            },
            curShare(){
                if(this.collect === undefined || this.collect <= 0){
                    return '分享'
                } else {
                    return this.collect > 100000 ? Math.ceil(this.collect / 100000) + '万' : this.collect;
                }
            },
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    .info{
        width: 100%;
        padding: 0 0 3.52vw 0;
        ul{
            display: flex;
            justify-content: center;
            li {
                width: 25vw;
                display: flex;
                a{
                    color: white;
                    width: 100%;
                    text-align: center;
                    .img{
                        display: block;
                        font-size: 5.99vw;
                        margin: 0 0 1.41vw 0;
                    }
                    .name{
                        font-size: 3.17vw;
                    }
                }
            }
        }
    }
</style>