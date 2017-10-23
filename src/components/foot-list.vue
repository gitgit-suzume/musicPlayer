<template>
    <div class="bg" @click="quit($event)" v-show="showing">
        <div class="container">
            <div class="button">
                <a href="javascript:;" class="info" @click="playingType=(playingType+1)%3">
                    <span class="img" :style="{background:playingMode[playingType%3].img}"></span>
                    <span>{{playingMode[playingType%3].type}}({{songsCount}})</span>
                </a>
                <a href="javascript:;" class="clear">
                    <span class="img">|||</span>
                    <span>清空</span>
                </a>
                <a href="javascript:;" class="collect">
                    <span class="img">+</span>
                    <span>收藏</span>
                </a>
            </div>
            <ul>
                <li v-for="(item,index) in list" @click="currentSong=index">
                    <a href="javascript:;">
                        <span class="bugle" v-show="currentSong===index"></span>
                        <div class="aboutSong">
                            <span :class="['song',currentSong===index?'active':'']">{{item.song}}</span>
                            <span :class="['singer',currentSong===index?'active':'']">- {{item.singer}}</span>
                        </div>
                        <span class="remove" @click="clearSong(index)">x</span>
                        <span class="songSheet" v-show="currentSong===index">8</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .bg{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,0.25);
        z-index: 1000;
    }
    .container{
        width: 100%;
        height: 50%;
        background: white;
        overflow: scroll;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .button{
        background: white;
        width: 100%;
        height: 20px;
        padding:8px 0;
        border-bottom: 1px solid gray;
    }
    .info{
        float: left;
        color: black;
        display: flex;
        align-items: center;
    }
    .info .img{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin:0 6px 0 8px;
    }
    .info span:last-child{
        font: 16px normal;
    }
    .clear{
        float: right;
        display: flex;
        align-items: center;
        margin: 0 10px 0 25px;
        font: 14px normal;
    }
    .clear .img{
        display: inline-block;
        height: 20px;
        color: gray;
        font: 14px normal;
        margin: 0 3px 0 0;
    }
    .collect{
        float: right;
        display: flex;
        font: 14px normal;
        align-items: center;
    }
    .collect .img{
        display: inline-block;
        font: 14px normal;
        height: 20px;
        color: gray;
        margin: 0 3px 0 0;
    }
    .container li{
        height: 20px;
        padding: 6px 10px 6px 6px;
        background: white;
        border-bottom: 1px solid gray;
    }
    .aboutSong{
        float: left;
        max-width: 75vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .song{
        font: 14px nromal;
        color: black;
        line-height: 20px;
        text-align: center;
    }
    .singer{
        color: gray;
        font: 12px normal;
    }
    .bugle{
        float: left;
        width: 14px;
        height: 14px;
        margin: 3px 6px 0 0;
        border-radius: 50% 50%;
        background: red;
    }
    .active{
        color:red;
    }
    .remove{
        color: gray;
        float: right;
        font: 14px normal;
    }
    .songSheet{
        color: gray;
        float: right;
        transform: rotate(30deg);
        margin: 0 23px 0 0;
        font: 14px normal;
    }
</style>
<script>
    export default {
        name:'foot-list',
        data: function(){
            return {
                showing:false,
                currentSong:0,
                playingType:0,
                songsCount:0,
                songsNum:0,
                list:[{
                    song:'Bloom of Youth',
                    singer:'Key Sounds Label',
                    img:'blue'
                },{
                    song:'Smoke Filled Room (Original Mix)',
                    singer:'Mako',
                    img:'orange'
                },{
                    song:'阖眸烟云',
                    singer:'东篱',
                    img:'green'
                },{
                    song:'山有木兮-橙光游戏《人鱼传说之长生烛》主题曲',
                    singer:'伦桑/橙光音乐',
                    img:'olivedrab'
                },{
                    song:'修罗',
                    singer:'DOES',
                    img:'darkcyan'
                },{
                    song:'第一长长长长长长长长长长长长长长长长长长长长长长的歌曲名',
                    singer:'Nightwish',
                    img:'darkorange'
                },{
                    song:'第二长长长长长长长长长长长长长长长长长长的歌曲名',
                    singer:'Nightwish',
                    img:'darkorange'
                },{
                    song:'Last Of The Wilds',
                    singer:'Nightwish',
                    img:'darkorange'
                },{
                    song:'トキヲ・ファンカ',
                    singer:'EVO+',
                    img:'palegreen'
                },{
                    song:'Five Hundred Miles',
                    singer:'Justin Timberlake',
                    img:'deepskyblue'
                },{
                    song:'息兮',
                    singer:'慕寒',
                    img:'skyblue'
                },{
                    song:'云水谣',
                    singer:'伦桑',
                    img:'lightskyblue'
                }],
                playingMode:[{
                    type:'列表循环',
                    img:'yellow'
                },{
                    type:'随机播放',
                    img:'orange'
                },{
                    type:'单曲循环',
                    img:'brown'
                }]
            }
        },
        methods:{
            clearSong: function (index) {
                this.list.splice(index, 1);
            },
            quit: function (event) {
                if(event.target == event.currentTarget){
                    this.showing = false;
                }
            }
        },
        created: function (){
            console.log('from foot list')
        }
    }
</script>