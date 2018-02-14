<template>
        <div>
            <ul>
                <li v-for="item in list">
                <!--<li v-for="item in list" @click="showSongSheet()">-->
                    <a href="javascript:;">
                        <i class="img" :class="item.icon"></i>
                        <div class="info">
                            <span class="name">{{item.name}}</span>
                            <span class="count">({{item.count}})</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
</template>
<script>
    export default{
        name:'default-list',
        data: function (){
            return {
                list:[{
                    name:'本地音乐',
                    count:'0',
                    icon:'el-icon-printer'
                },{
                    name:'最近播放',
                    count:'0',
                    maxCount:100,
                    icon:'el-icon-document'
                },{
                    name:'下载管理',
                    count: 0,
                    icon:'el-icon-printer'
                },{
                    name:'我的电台',
                    count: 0,
                    icon:'el-icon-document'
                },{
                    name:'我的收藏',
                    count: 0,
                    icon:'el-icon-printer'
                }]
            }
        },
        methods:{
            // showSongSheet:function () {
            //     this.$store.commit('showSongSheet');
            // }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    @item-heigth: 13.90vw;
    li{
        padding: 4.23vw 0 0 0;
        width: 100%;
        .img {
            float: left;
            margin: 0 @body-margin-left/2 0 @body-margin-left;
            width: 5.63vw;
            height: 5.63vw;
            font: 5.63vw normal;
            color: @red;
        }
        .info{
            overflow: hidden;
            .list-underline;
            padding: 0 0 5.28vw 0;
            .name{
                font-size: @list-font-size;
                color: black;
            }
            .count{
                font-size: 3.5vw;
                color: gray;
            }
        }
    }
</style>
