<template>
    <div class="bg" @click="hide($event)" v-show="show">
        <transition name="foot">
        <div class="container" v-show="show">
            <ul>
                <li >
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
<style scoped>
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
    .bg{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index: 9999;
    }
    .container{
        width: 100%;
        background: white;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .header-tile{
        display: inline-block;
        font: 14px normal;
        max-width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .img{
        float: left;
        width: 14px;
        height: 14px;
        margin: 3px 6px 0 0;
        border-radius: 50% 50%;
        background: red;
    }
    .title{
        font: 14px nromal;
        overflow: hidden;
        color: black;
        padding:0 0 5px 0;
        border-bottom: 1px solid gray;
    }
    li a{
        display: block;
        width: 100%;
        padding: 10px 0 10px 10px;
    }
    li:first-child a{
        padding: 10px 0 10px 10px;
    }
</style>
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
