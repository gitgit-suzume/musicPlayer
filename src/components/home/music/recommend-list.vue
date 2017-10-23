<template>
    <div class="recommend-list">
        <ul>
            <li v-for="(item,index) in info" :key="'recommend-list-'+index">
                <a href="javascript:;">
                    <div class="recommend-contianer">
                        <img src="#" alt="假装有图片" :style="{background: item.img}">
                        <span>{{item.listener>100000?Math.ceil(item.listener/10000)+'万':item.listener}}</span>
                        <h1 :title="item.title">
                            {{item.title}}
                        </h1>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>

    .recommend{
        clear: both;
    }
    .recommend-list a:hover{
        text-decoration: none;
    }
    .recommend-contianer{
        width: 33.3333333%;
        float: left;
        position: relative;
    }
    .recommend-contianer img{
        display: inline-block;
        width: 100%;
        height: 30vw;
        box-sizing: border-box;
        border: 0.25vw solid white;
    }
    .recommend-contianer span{
        color: white;
        position: absolute;
        right:5px;
        top:5px;
        font: 10px normal;
    }
    .recommend-contianer h1{
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
        data: function () {
            return {
                info:[{
                    img:'red',
                    title:'秋乏症打盹专用瘫',
                    listener:1321111
                },{
                    img:'green',
                    title:'如何把一份外卖吃出仪式感？',
                    listener:73834
                },{
                    img:'pink',
                    title:'【日系诡异风】一盏灵魂灯引君入彼岸',
                    listener:991234
                },{
                    img:'black',
                    title:'【ACG/钢琴】谁的琴音 出动了你的心弦',
                    listener:1228888
                },{
                    img:'gray',
                    title:'你走了那么远的路 只是为了摆脱怀旧的负重',
                    listener:149999
                },{
                    img:'blue',
                    title:'快起床，铃声都叫几百遍了哈哈哈哈哈哈哈红红火火恍恍惚惚哈哈',
                    listener:1993333
                }]
            }
        }
    }
</script>