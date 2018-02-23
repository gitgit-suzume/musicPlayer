<template>
    <div class="setting">
        <div class="left">
            <i class="el-icon-refresh"></i>
        </div>
        <div class="middle">
            <a href="javascript:;" type="button" @click="switchSong(-1)">
                <i class="el-icon-arrow-left pre"></i>
            </a>
            <a href="javascript:;"
               type="button"
               class="playing-button"
               @click="togglePlaying()">
                <i  v-show="playing">||</i>
                <i class="el-icon-caret-right" v-show="!playing"></i>
            </a>
            <a href="javascript:;"
               class="next"
               type="button"
               @click="switchSong(1)">
                <i class="el-icon-arrow-right"></i>
            </a>
        </div>
        <div class="right" @click="showList()">
            <i class="el-icon-more"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'setting',
        data(){
            return {
                playing: true,
                // switchTime: new Date(),
                // interval: 500,
                // timer: null
            }
        },
        computed:{
            songAudio(){
                return this.$store.state.songAudio
            },
            songIndex(){
                return this.$store.state.playingIndex
            }
        },
        mounted(){
            this.playing = !this.songAudio.paused
            console.log(this.playing)
        },
        methods:{
            switchSong(type){
                this.$store.commit('changeCurSong', this.songIndex + type)
                // let cur = new Date()
                // if(cur - this.switchTime >= this.interval) {
                //     this.switchTime = cur
                //     this.$store.commit('changeCurSong', this.songIndex + type)
                // } else {
                //     setTimeout(this.switchSong(type))
                // }
            },
            togglePlaying(){
                if(this.songAudio.paused){
                    this.songAudio.play()
                    this.playing = true
                } else {
                    this.songAudio.pause()
                    this.playing = false
                }
                console.log(this.playing)
            },
            showList(){
                this.$store.commit('showPlayList');
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    @margin-between: 4.75vw;
    .setting{
        height: 14.71vh;
        button: 0;
        clear: both;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        a{
            color: white;
        }
        .left{
            margin-left: @margin-between;
            font-size: 5.99vw;
        }
        .right{
            font-size: 5.28vw;
            margin-right: @margin-between;
        }
        .middle{
            display: flex;
            align-items: center;
        }
        .playing-button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 12.5vw;
            height: 12.5vw;
            border: 1px solid white;
            border-radius: 50% 50%;
            font-size: 6vw;
            margin: 0 11.8vw;
        }
        .pre, .next{
            font-size: 6.16vw;
        }
    }
</style>