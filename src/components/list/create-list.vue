<template>
    <div>
        <a class="list-header" href="javascript:;">
            <a @click="showing=!showing" href="javascript:;">
                <span :class="['flex-button', showing?'open':'close']">></span>
                <div class="info">
                    <span>创建的歌单</span>
                    <span>({{count}})</span>
                </div>
            </a>
            <span class="manage">+</span>
        </a>
        <ul v-show="showing">
            <li v-for="item in list">
                <a href="javascript:;" @click="item.clicked=true, showSongSheet()">
                    <span class="img" :style="{background:item.img}"></span>
                    <div class="container">
                        <a class="manage-icon" @click.stop="showFootManage()">...</a>
                        <div class="list-info">
                            <span class="list-name">{{item.name}}</span>
                            <div class="more-info">
                                <span class="icon" v-show="item.clicked&&item.download!==0"></span>
                                <span class="list-more-info">{{item.count}}首</span>
                                <span class="download" v-show="item.clicked&&item.download!==0">已下载{{item.download}}首</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .list-header {
        display: block;
        width: 100%;
        overflow: hidden;
        padding: 5px 0;
        background: rgba(0,0,0,0.1);
    }
    .flex-button{
        float: left;
        margin: 0 5px 0 8px;
        transition: all 0.5s;
        font: 14px normal;
        color: gray;
    }
    .open{
        transform: rotate(90deg);
    }
    .close{
        transform: rotate(0);
    }
    .info{
        float: left;
    }
    .info span{
        color: black;
        font: 12px normal;
    }
    .manage{
        float: right;
        margin: 0 20px 0 0;
        color: gray;
        font: 14px normal;
    }

    ul li{
        width: 100%;
        height: 44px;
    }
    .img {
        float: left;
        width: 40px;
        height: 40px;
        margin: 3px 10px 3px 3px;
    }
    .container{
        margin: 7px 0 0 0;
        overflow: hidden;
        height: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.1);

    }
    .list-name{
        display: inline-block;
        max-width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .more-info{
        font: 10px normal;
        color: gray;
        max-width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .more-info .icon{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50% 50%;
        border:1px solid deepskyblue;
    }
    .manage-icon{
        float: right;
        font: 18px normal;
        transform: rotate(90deg);
        margin: 11px 11px 0 0;
    }
</style>
<script>
    export default{
        name:'create-list',
        data: function (){
            return {
                count:8,
                showing:true,
                currentplaying:null,
                list:[{
                    name:'我最喜欢的音乐',
                    img:'black',
                    count:56,
                    clicked:false,
                    download:53,
                    deleteable:false
                },{
                    name:'古风',
                    img:'gray',
                    count:120,
                    clicked:false,
                    download:19,
                    deleteable:true
                },{
                    name:'东篱',
                    img:'red',
                    count:69,
                    clicked:false,
                    deleteable:true,
                    download:5
                },{
                    name:'五色石楠叶',
                    img:'deepblue',
                    count:79,
                    clicked:false,
                    deleteable:true,
                    download:1
                },{
                    name:'喵喵喵',
                    img:'pink',
                    count:12,
                    clicked:false,
                    deleteable:true,
                    download:3
                },{
                    name:'EVO',
                    img:'purple',
                    count:48,
                    deleteable:true,
                    clicked:false,
                    download:0
                }]
            }
        },
        methods:{
            showFootManage:function () {
                this.$store.commit('showFootManage');
            },
            showSongSheet:function () {
                this.$store.commit('showSongSheet');
            }
        },
        created: function () {
            console.log('fromg list>create-list.')
        }
    }
</script>