<template>
    <div class="user-info" @click="hide($event)" v-show="showing">
        <transition name="user-info">
            <div class="container" v-show="showing">
                <div class="header">
                    <div class="appear">
                        <div class="img"
                             :style="{background: 'url(' + this.avatarUrl + ')'}"></div>
                    </div>
                    <div class="info">
                        <div>
                            <a href="javascript:;"
                               class="username"
                               :title="username">
                                {{username}}
                            </a>
                            <a href="javascript:;"
                               class="lv">
                                lv.{{lv + 1}}
                            </a>
                        </div>
                        <a href="javascript:;"
                               class="register"
                               @click="register=true">
                                {{register?'已签到':'签到'}}
                            </a>
                    </div>
                </div>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">我的消息</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">会员中心</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">商城</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">在线听歌免流量</span>
                        </a>
                    </li>
                </ul>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">我的好友</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">附近的人</span>
                        </a>
                    </li>
                </ul>
                <ul class="item">
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">个性换肤</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">听歌识曲</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">定时停止播放</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">扫一扫</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">音乐闹钟</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">驾驶模式</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span class="img el-icon-info"></span>
                            <span class="title">音乐云盘</span>
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'user-info',
        props: {
            username:{
                type: String,
                default: '用户昵称'
            },
            lv:{
                type: [Number, String],
                default: 0
            },
            backgroundUlr:{
                type: String,
                defualt: '#'
            },
            avatarUrl:{
                type: String,
                default: '#'
            }
        },
        data: function () {
            return {
                register:false,
            }
        },
        computed:{
            showing: function () {
                return this.$store.state.showUserList
            }
        },
        methods:{
            hide (e){
                if(e.target === e.currentTarget) {
                    this.$store.commit('showUserList')
                }
            }
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @margin-left: 2.82vw;
    @keyframes left-to-right {
        0%{
            left:-50%;
            opacity: 0;
        }
        100%{
            left: 0;
            opacity: 1;
        }
    }
    .user-info-enter-active{
        animation: left-to-right .25s ease
    }
    .user-info-leave-active{
        animation: left-to-right .25s ease reverse
    }
    .user-info{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        .bg-black;
        z-index: 1000;
        .container{
            width: 82.75vw;
            height: 100%;
            background: #e8e6e6;
            position: fixed;
            bottom: 0;
            left: 0;
            overflow: scroll;
            .header{
                background: black;
                width: 100%;
                padding: 5.99vw 0 5.28vw 0;
                overflow: hidden;
                .img{
                    /*margin:0 0 4.4vw @margin-left;*/
                    margin:0 0 2.99vw @margin-left;
                    width: 17.96vw;
                    height: 17.96vw;
                    background: white;
                    background-size: cover !important;
                    border-radius: 50% 50%;
                    border: 2px solid white
                }
                .info{
                    display: flex;
                    justify-content: space-between;
                    div{
                        max-width: 57%;
                        overflow: hidden;
                        display: flex;
                        align-items: baseline;
                    }
                    a{
                        color: white;
                    }
                    .username{
                        margin: 0 2vw 0 @margin-left;
                        font-size: 4.4vw;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .lv{
                        font: 2.46vw italic;
                        padding: 0 1.94vw;
                        border: .25vw solid white;
                        border-radius: 5vw;
                    }
                    .register{
                        margin: 0 2.82vw 0 0;
                        font-size: 3.52vw;
                        padding: 1.58vw 3.52vw;
                        border: .2vw solid white;
                        border-radius: 8px;
                    }
                }
            }
            ul{
                margin: 0 0 1.23vw 0;
                li{
                    width: 100%;
                    background: white;
                    display: flex;
                    align-items: center;
                    a{
                        display: inline-block;
                        width: 100%;
                        color: black;
                        font-size: 3.87vw;
                        padding: 4.05vw 0;
                        .img{
                            display: inline-block;
                            margin: 0 2.99vw 0 @margin-left;
                        }
                    }
                    a:active{
                        background: rgba(0,0,0,0.1);
                    }
                }



            }
        }
    }







</style>