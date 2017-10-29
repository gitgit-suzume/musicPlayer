<template>
    <div class="recommend-list">
        <ul>
            <li @click="showDetail(item)" v-for="(item,index) in info" :key="'recommend-list-'+index">
                <a href="javascript:;">
                    <div class="recommend-container">
                        <img :src="'../../../../static/img/'+item.img+'.jpg'" alt="歌单图片">
                        <span class="listener">{{item.listener>100000?Math.ceil(item.listener/10000)+'万':item.listener}}</span>
                        <h1 :title="item.name">
                            {{item.name}}
                        </h1>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .recommend-list a:hover{
        text-decoration: none;
    }
    .recommend-container{
        width: 33.3333333%;
        float: left;
        position: relative;
    }
    .recommend-container img{
        display: inline-block;
        width: 100%;
        height: 30vw;
        box-sizing: border-box;
        border: 0.25vw solid white;
    }
    .listener{
        text-align: right;
        background: rgba(0,0,0,0.15);
        border-radius: 5px 5px;
        padding: 0 10px;
        color: white;
        position: absolute;
        right:5px;
        top:5px;
        font: 10px normal;
    }
    .recommend-container h1{
        display: inline-block;
        font: 12px normal;
        padding:0 12px;
        height: 32px;
        width:85%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
</style>
<script>
    export default {
        name:'recommend-list',
        computed:{
            test:function (){
                return 1;
            },
            info:function(){
                return this.$store.state.info.musicSheet;
            }
    },
        methods:{
            showDetail:function (data) {
                this.$store.commit('getSongSheet',data);
                this.$store.commit('showSongSheet');
            }
        },
    }
</script>