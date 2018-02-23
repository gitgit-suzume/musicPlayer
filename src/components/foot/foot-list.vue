<template>
    <div class="foot-list"
         @click="hide($event)"
         v-show="show">
        <transition name="foot-list">
        <div class="container"
             v-show="show">
            <div class="button">
                <a href="javascript:;"
                   class="info manage-item"
                   @click="playingType=(playingType+1)%3">
                    <span class="img"
                          :class="playingMode[playingType%3].className"></span>
                    <span>{{playingMode[playingType%3].type}}({{songsCount}})</span>
                </a>
                <a href="javascript:;"
                   class="clear manage-item">
                    <span class="el-icon-delete"></span>
                    <span>清空</span>
                </a>
                <a href="javascript:;"
                   class="collect manage-item">
                    <span class="el-icon-star-off"></span>
                    <span>收藏全部</span>
                </a>
            </div>
            <ul>
                <li v-for="(item, index) in list"
                    @click="changeCurSong(index, item.id)">
                    <a href="javascript:;">
                        <div>
                            <span class="el-icon-phone-outline bugle"
                                  v-show="currentSong===index"></span>
                            <div class="about-song">
                                <span :class="['song',currentSong===index?'active':'']">{{item.name}}</span>
                                <span :class="['singer',currentSong===index?'active':'']">-</span>
                                <span :class="['singer',currentSong===index?'active':'']"
                                      v-for="(singer, index) in item.artists">{{singer.name}}{{(index< (item.artists.length - 1)) ? '/' : ''}}</span>
                            </div>
                        </div>
                        <span class="remove el-icon-close" @click="clearSong(index)"></span>
                    </a>
                </li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'foot-list',
        data (){
            return {
                playingType:0,
                songsCount:0,
                songsNum:0,
                playingMode:[{
                    type:'列表循环',
                    className: 'el-icon-refresh'
                },{
                    type:'随机播放',
                    className: 'el-icon-question'
                },{
                    type:'单曲循环',
                    className: 'el-icon-loading'
                }]
            }
        },
        computed:{
            show () {
                return this.$store.getters.showPlayList;
            },
            list (){
                return this.$store.state.playingList;
            },
            currentSong () {
                return this.$store.state.playingIndex;
            },
        },
        watch:{
            list: function (val) {
                this.setSongId(val[this.currentSong].id)
            },
            currentSong: function(val) {
                this.setSongId(this.list[val].id)
            }
        },
        mounted(){
            // this.songAudio.$on('ended', function () {
            //     console.log('ended', this.currentSong)
            //     this.$store.commit('changeCurSong', ++ this.currentSong);
            // })
        },
        methods:{
            setSongId(id){
                this.$store.commit('setSongId', id)
            },
            clearSong (index) {
                let newLen = this.list.length - 1;
                if(newLen === 0){
                    this.$store.commit('changeCurSong', -1)
                }
                if(newLen <= index){
                    this.$store.commit('changeCurSong', newLen - 1)
                }
                this.$store.commit('removePlayingListSongs', index);
            },
            hide (event) {
                if(event.target == event.currentTarget){
                    this.$store.commit('hidePlayList');
                }
            },
            changeCurSong (index, id) {
                this.$store.commit('changeCurSong', index);
            }
        },
    }
</script>
<style lang="less" scoped>
    @import (less) "../../style/mixin";
    @margin-between: 2.11vw;
    @margin-img: 3.17vw;
    .font-size{
        font-size: 3.87vw;
    }
    @keyframes to-up {
        0%{
            bottom:-50%;
            opacity: 0;
        }
        100%{
            bottom: 0;
            opacity: 1;
        }
    }
    .foot-list-enter-active{
        animation: to-up .25s ease;
    }
    .foot-list-leave-active{
        animation: to-up .25s ease reverse;
    }
    .foot-list{
        .bg-black;
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: 300;
        transition: opacity .25s;
        .container{
            width: 100%;
            height: 63.39%;
            background: white;
            overflow: scroll;
            overflow-x: hidden;
            position: fixed;
            bottom: 0;
            left: 0;
            .button{
                position: fixed;
                background: white;
                width: 100%;
                padding: 5.46vw 0;
                border-bottom: 1px solid gray;
                z-index: 300;
                .manage-item{
                    display: flex;
                    align-items: center;
                    .font-size;
                    .img{
                        display: inline-block;
                        height: 20px;
                    }
                }
                .info{
                    float: left;
                    color: black;
                    .img{
                        font-size: 4.75vw;
                        width: 4.75vw;
                        height: 4.75vw;
                        color: gray;
                        margin:0 @margin-between 0 @margin-img;
                    }
                }
                .clear{
                    float: right;
                    margin: 0 @margin-between 0 7.39vw;
                    .img{
                        color: gray;
                        margin: 0 3px 0 0;
                    }
                }
                .collect{
                    float: right;
                    .img{
                        color: gray;
                        margin: 0 3px 0 0;
                    }
                }
            }
        }
    }
    ul{
        padding: 14.79vw 0 0 0;
        li{
            /*height: 12.68vw;*/
            border-bottom: 1px solid gray;
            padding: 4.93vw 0;
            a{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .bugle{
                    .active;
                    float: left;
                    font-size: 4.23vw;
                    margin: 0 @margin-img 0 @margin-between;
                }
                .about-song{
                    float: left;
                    max-width: 75vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .song{
                        max-width: ;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin: 0 0 0 @margin-between;
                        font-size: 4.23vw;
                        color: black;
                    }
                    .singer{
                        color: gray;
                        font-size: 3.17vw;
                    }
                }
                .remove{
                    color: gray;
                    font-size: 3.52vw;
                    margin: 0 @margin-between * 2 0 0;
                }
            }
            .active{
                color:red !important;
            }
        }
    }

</style>
