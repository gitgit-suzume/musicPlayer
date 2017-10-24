<template>
    <div>
        <a class="list-header" href="javascript:;">
            <a @click="showing=!showing" href="javascript:;">
                <span :class="['flex-button', showing?'open':'close']">></span>
                <div class="info">
                    <span>收藏的歌单</span>
                    <span>({{count}})</span>
                </div>
            </a>
            <span class="manage">+</span>
        </a>
        <ul v-show="showing">
            <li v-for="item in list">
                <a href="javascript:;" @click="item.clicked=true">
                    <span class="img" :style="{background:item.img}"></span>
                    <div class="container">
                        <div class="manage-icon">...</div>
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
        name:'collect-list',
        data: function (){
            return {
                count:8,
                showing:true,
                currentplaying:null,
                list:[{
                    name:'100首古风歌去推荐①【古风控必备】',
                    creater:'米虫-小蚊子丶一只呆雯纸',
                    img:'yellow',
                    count:100,
                    clicked:false,
                    download:8,
                },{
                    name:'诡夜之梦，幽鬼之幻',
                    creater:'-奇-想-天-外-',
                    img:'green',
                    count:38,
                    clicked:false,
                    download:0,
                },{
                    name:'秋 乏 打 盹 专 用 瘫',
                    creater:'beetlebumon',
                    img:'red',
                    count:40,
                    clicked:false,
                    download:0,
                },{
                    name:'[东方雅乐集|和风意境纯音赏]',
                    creater:'魔理沙的扫帚视角_',
                    img:'pink',
                    count:42,
                    clicked:false,
                    download:0,
                },{
                    name:'伴随着旋律，进入纯音的世界',
                    creater:'野良兔',
                    img:'lightblue',
                    count:20,
                    clicked:false,
                    download:0,
                },{
                    name:'[物哀纯音]如坠入悲伤螺旋，少女终焉',
                    creater:'想吃蜜渍桃子的赫萝',
                    img:'brown',
                    count:70,
                    clicked:false,
                    download:0,
                },{
                    name:'舒缓·欧美|柔情嗓音，温暖人心',
                    creater:'DJ顾念晨',
                    img:'yellowgreen',
                    count:20,
                    clicked:false,
                    download:0,
                }]
            }
        },
        created: function () {
            console.log('fromg list>create-list.')
        }
    }
</script>
