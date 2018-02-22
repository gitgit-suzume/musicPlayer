<template>
    <div class="foot" v-show="songId" @click.self="toSongPlayer()">
        <audio :src="url"
               autoplay
               ref="audio"
               id="song-audio"></audio>
        <img class="img" :src="info.album.picUrl" alt="#">
        <div class="song-info">
            <span>{{info.name}}</span>
            <span v-for="(singer,index) in info.artists">
                {{singer.name}}
                {{index < (info.artists.length-1)?'/':''}}
            </span>
        </div>
        <a href="javascript:;"
           type="button"
           class="list"
           @click="showPlayList()">
                <i class="el-icon-more"></i>
            </a>
        <a href="javascript:;"
               type="button"
               @click="togglePlaying()"
               class="player"
               v-show="playing">
            <span>||</span>
        </a>
        <a href="javascript:;"
               type="button"
               @click="togglePlaying()"
               class="player stop"
               v-show="!playing">
            <span class="el-icon-caret-right"></span>
        </a>
    </div>
</template>
<script>
    import GetData from '../../api/getData'
    export default {
       name:'foot',
        data () {
            return {
                img:'pink',
                song:'Gorgeous',
                singer:'Taylor Swift',
                allTime:'03:29',
                finishTime: '00:00',
                url: '',
                playing: true
            }
        },
        computed:{
            info (){
                var result = this.$store.state.playingList,
                    index = this.$store.state.playingIndex;
                return result[index]
            },
            songId (){
                return this.$store.state.songId
            },
            songAudio(){
                return this.$store.state.songAudio
            }
        },
        created(){
           this.getMusic(this.songId)
        },
        watch: {
          songId(val) {
              this.getMusic(val)
              this.playing = true
          }
        },
        methods:{
           toSongPlayer(){
               this.$router.push({path: '/song-player'})
           },
            getMusic(id){
                GetData.getMusic(id).then(res => {
                    this.url = res.data.data[0].url
                    this.setSongAudio()
                }).catch(err => {
                    console.log(err)
                })
            },
            showPlayList () {
                this.$store.commit('showPlayList');
            },
            togglePlaying () {
                if(this.songAudio.paused){
                    this.songAudio.play()
                } else {
                    this.songAudio.pause()
                }
                this.playing = !this.songAudio.paused
                // this.$store.commit('stopPlaying');
            },
            setSongAudio(url){
                let songAudio = this.$refs.audio
                this.$store.commit('setSongAudio', songAudio)
            }
        },
    }
</script>
<style scoped lang="less">
    @import (less) "../../style/mixin";
    @ctn-margin: 1.76vw;
    .foot{
        width: 100%;
        position: fixed;
        background: white;
        bottom: 0;
        padding:5px 0;
        z-index: 200;
        padding: @ctn-margin 0;
        .img{
            width: 10.56vw;
            height: 10.56vw;
            float: left;
            margin: 0 @ctn-margin;
        }
        .song-info{
            float: left;
            span{
                color: gray;
                font-size: 3.17vw;
            }
            span:first-child{
                color: black;
                font-size: 3.52vw;
                max-width: 50vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span:nth-child(1){
                display: block;
            }
        }
        a{
            float: right;
        }
        a:hover{
            text-decoration: none;
        }
        .list{
            display: inline-block;
            font-size: 5.99vw;
            margin: @ctn-margin;
        }
        .player{
            width: 7.75vw;
            height: 7.75vw;
            font-size: 4vw;
            line-height: 7.75vw;
            text-align: center;
            margin: @ctn-margin 0;
            border-radius: 50% 50%;
            border: 1px solid black;
            color: @red;
        }
        .stop{
            color: black;
            border: 1px solid gray;
        }
    }
</style>