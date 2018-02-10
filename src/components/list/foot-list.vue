<template>
    <div class="foot-list" @click="hide($event)" v-show="show">
        <transition name="foot">
        <div class="container" v-show="show">
            <ul>
                <li>
                    <a href="javascript:;">
                        <span class="header-tile" :title="from">{{from}}</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>下载</span></div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>分享</span></div>
                    </a>
                </li>
                <li v-show="editable">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>编辑歌单信息</span></div>
                    </a>
                </li>
                <li v-show="deleteable">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>删除</span></div>
                    </a>
                </li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'foot-list',
        computed:{
            info: function () {
              return this.$store.state.manageSheet;
            },
            show:function () {
                return this.$store.getters.showFootManage;
            },
            from: function (){
                return '歌单：' + this.info.name;
            },
            editable:function () {
                return this.info.editable;
            },
            deleteable:function () {
                return this.info.deleteable;
            }
        },
        methods:{
            test:function () {
                ++this.fromNum;
            },
            hide: function (event) {
                if(event.target == event.currentTarget){
                    this.$store.commit('hideFootManage');
                }
            }
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    @keyframes to-up {
        0%{
            bottom: -50%;
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
    .foot-leave-active{
        animation: to-up .25s ease reverse;
    }
    .foot-list{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        z-index: 600;
        .container{
            width: 100%;
            background: white;
            position: fixed;
            bottom: 0;
            left: 0;
        }
        .header-tile{
            display: inline-block;
            font-size: @list-font-size;
            max-width: 50vw;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .img{
            float: left;
            width: 5.63vw;
            height: 5.63vw;
            margin-right: 5.99vw;
            border-radius: 50% 50%;
            background: @red;
        }
        a{
            display: block;
            width: 100%;
            padding: 3.70vw 4.4vw 0 4.4vw;
        }
    }
    .title{
        font-size: @list-font-size;
        overflow: hidden;
        color: black;
        padding-bottom: 4.58vw;
        .list-underline;
    }
    li:first-child {
        a {
            padding: 7.04vw 0 7.04vw 2.99vw;
        }
    }
</style>

