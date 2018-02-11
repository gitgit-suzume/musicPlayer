<template>
    <div class="foot-order" @click="quit($event)" v-show="show">
        <transition name="foot">
        <div class="container" v-show="show">
            <ul>
                <li class="header">
                    <a href="javascript:;"
                       @click="test()">
                        <span class="header-tile"
                              :title="info.name">歌曲:{{info.name}}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-caret-right"></i>
                        <span class="title">下一首播放</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-star-on"></i>
                        <span class="title">收藏到歌单</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-edit-outline"></i>
                        <span class="title">评论({{info.command}})</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-share"></i>
                        <div class="title"><span>分享</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-info"></i>
                        <span class="title">歌手：{{info.singer}}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img el-icon-info"></i>
                        <span class="title">专辑：{{info.album}}</span>
                    </a>
                </li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @margin-left: 2.82vw;
    @keyframes to-up {
        0%{
            bottom:-50%;
            opacity: 0;
        }
        100%{
            bottom: 0;
            opacity: 1;
        }
    }
    .foot-enter-active{
        animation: to-up .25s ease;
    }
    .foot-order{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        .bg-black;
        z-index: 300;
        transition: opacity .25s ease;
        .container{
            position: absolute;
            width: 100%;
            height: 64.7%;
            background: white;
            bottom: 0;
            left: 0;
            z-index: 300;
            .header-tile{
                margin: 6.87vw 0 6.87vw @margin-left;
                display: inline-block;
                font-size: 3.7vw;
                max-width: 50vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            li {
                a {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 12.85vw;
                    .img{
                        font-size: 4vw;
                        margin: 3px 6px 0 0;
                    }
                    .title{
                        /*padding: 4.4vw 0;*/
                        font-size: 3.52vw;
                        overflow: hidden;
                        color: black;
                        border-bottom: 1px solid gray;
                    }
                }
            }
            li:first-child {
                a {
                    padding: 10px 0 10px 10px;
                }
            }
        }
    }



    li a{

    }

</style>
<script>
    export default {
        name:'foot-order',
//                song:
//                singer:'奇然',
//                comment:5992
        computed:{
            show:function () {
                return this.$store.getters.showFootOrder;
            },
            info(){
                return this.$store.state.songSheetFoot;
            }
        },
        methods:{
            test:function () {
                ++this.fromNum;
            },
            quit: function (event) {
                if(event.target == event.currentTarget){
                    this.$store.commit('hideFootOrder');
                }
            }
        },
    }
</script>
