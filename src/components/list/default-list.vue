<template>
        <div>
            <ul>
                <li v-for="item in list" @click="showSongSheet()">
                    <!--<router-link to="/list/detail"></router-link>-->
                    <a href="javascript:;">
                        <span class="img" :style="{background:item.img}"></span>
                        <div class="info">
                            <span class="name">{{item.name}}</span>
                            <span class="count">({{item.count}})</span>
                        </div>
                    </a>
                </li>
            </ul>
            <!--<router-view></router-view>-->
        </div>
</template>
<style scoped>
    li{
        height: 50px;
        width: 100%;
    }
    .img {
        float: left;
        margin: 14px 8px;
        width: 20px;
        height: 20px;
        border-radius: 50% 50%;
        border: 1px solid #c62f2f;
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
                    img:'yellow'
                },{
                    name:'最近播放',
                    count:'100',
                    maxCount:100,
                    img:'blue'
                },{
                    name:'下载管理',
                    count: 0,
                    img:'pink'
                },{
                    name:'我的电台',
                    count: 1,
                    img:'gray'
                },{
                    name:'我的收藏',
                    count: 1,
                    img:'olive'
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