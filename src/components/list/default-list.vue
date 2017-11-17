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
<style scoped>
    li{
        height: 50px;
        width: 100%;
    }
    .img {
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 14px 8px;
        width: 20px;
        height: 20px;
        font: 20px normal;
        color: #c62f2f;
    }
    .info{
        overflow: hidden;
        height: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
    }
    .name{
        color: black;
    }
    .count{
        font: 12px normal;
        color: gray;
    }
</style>
<script>
    export default{
        name:'default-list',
        data: function (){
            return {
                list:[{
                    name:'本地音乐',
                    count:'84',
                    icon:'el-icon-printer'
                },{
                    name:'最近播放',
                    count:'100',
                    maxCount:100,
                    icon:'el-icon-document'
                },{
                    name:'下载管理',
                    count: 0,
                    icon:'el-icon-printer'
                },{
                    name:'我的电台',
                    count: 1,
                    icon:'el-icon-document'
                },{
                    name:'我的收藏',
                    count: 1,
                    icon:'el-icon-printer'
                }]
            }
        },
        methods:{
            showSongSheet:function () {
                this.$store.commit('showSongSheet');
            }
        }
    }
</script>
