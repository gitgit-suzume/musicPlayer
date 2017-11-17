<template>
    <div class="info" :style="{background:bgColor}">
        <ul>
            <li>
                <a href="javascript:;">
                    <span class="img" >
                    </span>
                    <span class="name">{{collect}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img" >
                    </span>
                    <span class="name">{{command}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img" >
                    </span>
                    <span class="name">{{share}}</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="img" >
                    </span>
                    <span class="name">{{downLoad}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .info{
        width: 100%;
    }
    .info ul{
        display: flex;
        justify-content: center;
        padding: 10px 0 7px 0;
    }
    .info ul li {
        width: 25vw;
        display: flex;
    }
    .info ul li a{
        color: white;
        display: block;
        width: 100%;
        text-align: center;
    }
    .img{
        display: block;
        width: 20px;
        height: 20px;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        name: 'sheet-info',
        computed:{
            collect:function(){
                const data = this.$store.state.songSheet.collect;
                if(!data){
                    return '收藏';
                } else {
                    return data >= 100000 ? Math.ceil(data/100000) + '万' : data
                }
            },
            command:function () {
                const data = this.$store.state.songSheet.command;
                if(!data){
                    return '评论';
                } else {
                    return data >= 100000 ? Math.ceil(data/100000) + '万' : data;
                }
            },
            share:function () {
                const data = this.$store.state.songSheet.share;
                if(!data){
                    return '分享';
                } else {
                    return data >= 100000 ? Math.ceil(data/100000) + '万' : data
                }
            },
        },
        data:function () {
            return {
                bgColor:'black',
                downLoad:'下载'
//                items:[
//                    {img:'white',name:'收藏',showing:true,count:645978},
//                    {img:'gray',name:'评论',showing:true,count:2327},
//                    {img:'pink',name:'分享',showing:true,count:4342},
//                    {img:'deepskyblue',name:'下载',showing:true}
//                ]
            }
        },
        created:function () {
            var count, i, items = this.items;
            for(i in items){
                count = items[i].count;
                if(count !== undefined && count > 0){
                    this.items[i].name = count >= 100000 ? Math.ceil(count/100000)+'万': count;
                }
            }
        }
    }
</script>
