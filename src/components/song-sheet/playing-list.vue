<template>
    <div class="playing-list">
        <a class="the-head">
            <div class="left">
                <a href="javascript:;">
                    <i class="el-icon-caret-right"></i>
                </a>
                <span class="play-all">播放全部</span>
                <span class="count">(共{{count}}首)</span>
            </div>
            <div class="right">
                <a href="javascript:;"
                   class="button el-icon-menu"></a>
                <a href="javascript:;"
                   class="choose">多选</a>
            </div>
        </a>
        <ul>
            <li v-for="(item,index) in list" :key="item.id">
                <a href="javascript:;"
                   @click="playingThis(list, index)">
                    <div class="index">
                        <span>{{index+1}}</span>
                    </div>
                    <div class="song">
                        <div class="info">
                            <span>{{item.name}}</span>
                            <div class="sub">
                                <span class="icon"
                                      v-show="item.download"></span>
                                <span>{{item.singer}}-{{item.album}}</span>
                            </div>
                        </div>
                        <a class="manage"
                           @click.stop="showDetail(item)">
                            <i class="el-icon-more"></i>
                        </a>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'playing-list',
        computed:{
            list:function () {
                var result = [];
                const songSheet = this.$store.state.songSheet,
                    songs = this.$store.state.info.songs,
                    songsNum = songSheet.songsId;
                let songsIndex;
                if(!songSheet || !songs || !songsNum){
                    return ;
                }
                for (let i = 0, len = songsNum.length; i < len; i ++){
                    songsIndex = parseInt(songsNum[i], 10)-1;
                    result.push(songs[songsIndex]);
                }
                return result?result:[];
            },
            count: function(){
                return (this.list == [] || this.list == undefined) ? 0 : this.list.length;
            }
        },
        methods:{
            showDetail:function(item){
                this.$store.commit('showFootOrder');
                this.$store.commit('songSheetFoot',item);
            },
            playingThis:function (info,index) {
                var data = [].concat(info);
                this.$store.commit('setPlayingList',{data:data, index:index});
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @icon-font-size: 4vw;
    @font-size: 4.4vw;
    @margin-left: 4.23vw;
    @icon-margin-right: 4.4vw;
    .playing-list{
        background: white;
        width: 100%;
        .the-head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 14.08vw;
            width: 100%;
            overflow: hidden;
            border-bottom: 1px solid gray;
            .left{
                display: flex;
                align-items: center;
                a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid black;
                    border-radius: 50% 50%;
                    width: 5.99vw;
                    height: 5.99vw;
                    margin: 0 @icon-margin-right 0 @margin-left;
                    i{
                        font-size: @icon-font-size;
                    }
                }
                .play-all{
                    font-size: @font-size;
                    color: black;
                }
                .count{
                    color: gray;
                    font-size: 3.87vw;
                }
            }
            .right{
                margin: 15px 30px 15px 0;
                .button{
                    display: inline-block;
                    font-size: @icon-font-size;
                }
                .choose{
                    margin: 0 2.99vw 0 1.94vw;
                    font-size: @font-size;
                }
            }
        }
        ul{
            li{
                overflow: hidden;
                margin: -3px 0 0 0 ;
                > a{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    transition: all 0.2s linear;
                    .index{
                        margin: 0 @icon-margin-right 0 @margin-left;
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        span{
                            font-size: 3.52vw;
                        }
                    }
                    .song{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        font-size: @font-size;
                        border-bottom: 1px solid #c1bdbd;
                        .info{
                            float: left;
                            margin: 3.17vw 0;
                            > span{
                                display: inline-block;
                                max-width: 50vw;
                            }
                            .sub{
                                font-size: 2.64vw;
                                color: gray;
                                max-width: 50vw;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                .icon{
                                    display: inline-block;
                                    background: deepskyblue;
                                    border-radius: 50% 50%;
                                    width: 10px;
                                    height: 10px;
                                }
                            }
                        }
                        .manage{
                            font-size: @icon-font-size;
                            margin: 0 9vw 0 0;
                        }
                    }
                }
                > a:active{
                    background: rgba(0,0,0,0.1);
                }
            }
        }
    }



</style>