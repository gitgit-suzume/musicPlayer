<template>
    <div class="meeting">
        <ul>
            <li v-for="(item,index) in info" :key="'meeting-'+index">
                <a href="javascript:;">
                    <div>
                        <img src="#" alt="">
                        <span>{{item.title}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .meeting{
        margin: 10px 0 0 0;
    }
    .meeting a:hover{
        text-decoration: none;
    }
    .meeting a:hover img{
        background: red;
    }
    .meeting div{
        float: left;
        width: 25%;
        overflow: hidden;
    }
    .meeting img{
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 auto 5px;
        border-radius: 50% 50%;
        border: 1px solid red;
    }
    .meeting span{
        display: inline-block;
        width: 100%;
        text-align: center;
        font:12px normal;
        margin: 0 0 10px 0;
    }
</style>
<script>
    export default {
        name:'meeting',
        data: function () {
            return{
                info: [{
                    img: '',
                    title: '私人FM'
                }, {
                    img: '',
                    title: '每日推荐'
                }, {
                    img: '',
                    title: '歌单'
                }, {
                    img: '',
                    title: '排行榜'
                }]
            }
        }
    }
</script>