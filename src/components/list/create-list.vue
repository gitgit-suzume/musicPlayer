<template>
    <div>
        <a class="list-header" href="javascript:;">
            <a @click="showing=!showing" href="javascript:;">
                <i class="flex-button el-icon-arrow-down"
                   :class="showing?'':'close'"></i>
                <div class="info">
                    <span>创建的歌单</span>
                    <span>({{count}})</span>
                </div>
            </a>
            <i class="manage el-icon-plus"></i>
        </a>
        <ul v-show="showing">
            <li v-for="(item, index) in list">
                <a href="javascript:;" @click="showSongSheet(item)">
                    <img class="img" :src="item.img ? '../../../static/img/'+item.img+'.jpg' : '../../../static/img/logo.png'" alt="">
                    <div class="container">
                        <a class="manage-icon" @click.stop="showFootManage(item,index)">
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
<script>
    export default{
        name:'create-list',
        computed:{
            list:function () {
                return this.$store.state.info.myList;
            },
            count: function () {
                return this.list ? this.list.length : 0;
            }
        },
        data: function (){
            return {
                showing:true,
                currentplaying:null,
            }
        },
        methods:{
            showFootManage:function (data, index) {
                var deleteable = index === 0 ? false : true;
                this.$store.commit('showFootManage');
                this.$store.commit('setManageSheet',{
                    from:'create',
                    name: data.name,
                    editable: true,
                    deleteable: deleteable
                });
            },
            showSongSheet:function (data) {
                this.$store.commit('showSongSheet');
                this.$store.commit('getSongSheet', data);
            }
        },
    }
</script>
