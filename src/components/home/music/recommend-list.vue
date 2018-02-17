<template>
    <div class="recommend-list">
        <ul>
            <li @click="showDetail(item)" v-for="(item,index) in info" :key="'recommend-list-'+index">
                <a href="javascript:;">
                    <div class="recommend-container">
                        <img :src="item.img ? '../../../../static/img/'+item.img+'.jpg' : '../../../../static/img/logo.png'" alt="歌单图片">
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
<script>
    import GetData from '../../../api/getData'
    export default {
        name:'recommend-list',
        computed: {
            info() {
                return this.$store.state.info.musicSheet;
            }
        },
        methods:{
            showDetail:function (data) {
                // this.$store.commit('getSongSheet',data);
                // this.$store.commit('showSongSheet');
            }
        },
    }
</script>
<style scoped lang="less">
    a:hover{
        text-decoration: none;
    }
    .recommend-container{
        width: 33.3333333%;
        float: left;
        position: relative;
        img{
            display: inline-block;
            width: 100%;
            height: 30vw;
            box-sizing: border-box;
            border: 0.25vw solid white;
        }
        h1{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 3.52vw;
            padding:0 12px;
            width:85%;
            margin: 2.82vw 0 5.99vw;
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
    }
</style>
