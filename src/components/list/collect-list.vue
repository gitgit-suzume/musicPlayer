<template>
    <div>
        <a class="list-header" href="javascript:;">
            <a @click="showing=!showing" href="javascript:;">
                <i class="flex-button el-icon-arrow-down"
                      :class="showing?'open':'close'"></i>
                <div class="info">
                    <span>收藏的歌单</span>
                    <span>({{count}})</span>
                </div>
            </a>
            <span class="manage el-icon-plus"></span>
        </a>
        <ul v-show="showing">
            <li v-for="item in list" :key="item.id">
                <a href="javascript:;" @click="showSongSheet(item)">
                    <img class="img" :src="'../../../static/img/'+ (item ? item.img+'.jpg' : 'logo.png')" alt="img">
                    <div class="container">
                        <a class="manage-icon" @click.stop="showFootManage(item)">
                            <i class="el-icon-more"></i>
                        </a>
                        <div class="list-info">
                            <span class="list-name">{{item.name}}</span>
                            <div class="more-info">
                                <!--<span class="icon" v-show="item.clicked&&item.download!==0"></span>-->
                                <span class="list-more-info">{{item.songsId.length}}首</span>
                                <!--<span class="download" v-show="item.clicked&&item.download!==0">已下载{{item.download}}首</span>-->
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'collect-list',
        computed:{
            list: function(){
                const info = this.$store.state.info,
                    songs = info.musicSheet,
                    index = info.collectList ? info.collectList.listsId : [],
                    len = index.length;
                var result = [];
                for (let i = 0, p; i < len; i ++){
                    p = parseInt(index[i], 10)-1;
                    result.push(songs[p]);
                }
                return result;
            },
            count: function(){
                return this.list !== undefined ? this.list.length : 0;
            }
        },
        data: function (){
            return {
                showing:true,
                currentplaying:null,
            }
        },
        methods:{
            showFootManage:function (item) {
                this.$store.commit('showFootManage');
                this.$store.commit('setManageSheet',{
                    from:'collect',
                    name: item.name,
                    editable: false,
                    deleteable: true
                });
            },
            showSongSheet: function (data) {
                this.$store.commit('showSongSheet');
                this.$store.commit('getSongSheet', data);
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    @header-font-size: 3.52vw;
    @icon-color: gray;
    .list-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        overflow: hidden;
        padding: 5px 0;
        background: rgba(0,0,0,0.1);
    }
    .flex-button{
        float: left;
        margin: 3px 5px 0 8px;
        transition: all 0.5s;
        font: 12px normal;
        color: gray;
    }
    .close{
        transform: rotate(-90deg);
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
        margin: 3px 17px 0 0;
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
        font: 12px normal;
        transform: rotate(90deg);
        margin: 12px 17px 0 0;
    }
</style>
