<template>
    <div class="create-list">
        <a class="list-header"
           href="javascript:;"
           @click="showing=!showing">
            <a href="javascript:;">
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
                <a href="javascript:;" @click="showSongSheet(item.id)">
                    <img class="img" :src="item.coverImgUrl" alt="">
                    <div class="container">
                        <div class="list-info">
                            <span class="list-name">{{item.name}}</span>
                            <div class="more-info">
                                <span class="list-more-info">{{item.trackCount}}首</span>
                            </div>
                        </div>
                        <div class="manage-icon">
                            <a @click.stop="showFootManage(item,index)">
                                <i class="el-icon-more"></i>
                            </a>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'createList',
        props:{
            list: {
                type:[Object, Array],
                default: []
            },
        },
        computed:{
            // list:function () {
            //     return this.$store.state.info.myList;
            // },
            count: function () {
                return this.list ? this.list.length : 0;
            }
        },
        data (){
            return {
                showing:true,
                currentplaying:null,
            }
        },
        methods:{
            showFootManage (data, index) {
                var deleteable = index === 0 ? false : true;
                this.$store.commit('showFootManage');
                this.$store.commit('setManageSheet',{
                    from:'create',
                    name: data.name,
                    editable: true,
                    deleteable: deleteable
                });
            },
            showSongSheet (data) {
                this.$store.commit('showSongSheet');
                this.$store.commit('setListId', data);
            }
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin.less";
    @header-font-size: 3.52vw;
    @icon-color: gray;
    .list-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        padding: 2.82vw 0;
        background: rgba(0,0,0,0.1);
        a {
            margin: 0 0 0 @body-margin-left;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .info {
                margin: 0 0 0 3.17vw;
                span {
                    font-size: @header-font-size;
                }
            }
            .flex-button {
                transition: all 0.5s;
                font-size: @header-font-size;
                color: @icon-color;
            }
            .close {
                transform: rotate(-90deg);
            }
        }
        .manage{
            color: @icon-color;
            margin: 0 @body-margin-left 0 0;
            font-size: @header-font-size;
        }
    }
    ul {
        li{
            width: 100%;
            height: 17.61vw;
            .img {
                float: left;
                width: 15.14vw;
                height: 15.14vw;
                margin: 1.41vw 2.11vw;
            }
            .container{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 7px 0 0 0;
                height: 100%;
                .list-underline;
                .list-info{
                    .list-name{
                        display: inline-block;
                        max-width: 50vw;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: @list-font-size;
                        color: black;
                    }
                    .more-info{
                        font-size: @list-font-size / 3 * 2;
                        color: gray;
                        max-width: 50vw;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        .icon{
                            display: inline-block;
                            width: 10vw;
                            height: 10vw;
                            background: red;
                            border-radius: 50% 50%;
                            border:1px solid deepskyblue;
                        }
                    }
                }
                .manage-icon {
                    margin: 0 @body-margin-left 0 0;
                    i {
                        font-size: @list-font-size;
                    }
                }
            }
        }
    }
</style>