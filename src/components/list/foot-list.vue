<template>
    <div class="bg" @click="hide($event)" v-show="show">
        <div class="container">
            <ul>
                <li >
                    <a href="javascript:;">
                        <span class="header-tile" :title="sheetName[fromNum%3]">{{sheetName[fromNum%3]}}</span>
                    </a>
                </li>
                <li v-show="fromNum%3===0">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>创建新歌单</span></div>
                    </a>
                </li>
                <li v-show="fromNum%3===0 || fromNum%3===1">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>歌单管理</span></div>
                    </a>
                </li>
                <li v-show="fromNum%3===2">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>下载</span></div>
                    </a>
                </li>
                <li v-show="fromNum%3===2">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>分享</span></div>
                    </a>
                </li>
                <li v-show="fromNum%3===2&&editable">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>编辑歌单信息</span></div>
                    </a>
                </li>
                <li v-show="fromNum%3===2&&deleteable">
                    <a href="javascript:;">
                        <div class="img"></div>
                        <div class="title"><span>删除</span></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .bg{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.25);
        z-index: 1000;
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
        data: function(){
            return {
                fromNum:0,
                editable:true,
                deleteable:true,
                sheetName:['创建的歌单','收藏的歌单','歌单:'+'五色石楠叶']
            }
        },
        computed:{
            show:function () {
                return this.$store.getters.showFootManage;
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
        created: function (){
            console.log('from foot list')
        }
    }
</script>