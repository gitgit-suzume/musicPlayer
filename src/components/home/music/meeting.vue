<template>
    <div class="meeting">
        <ul>
            <li v-for="(item,index) in info" :key="'meeting-'+index">
                <a href="javascript:;">
                    <div class="container">
                        <div class="icon">
                            <i :class="item.icon"></i>
                        </div>
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
    .meeting .container{
        float: left;
        width: 25%;
        overflow: hidden;
    }
    .meeting .icon{
        width: 50px;
        height: 50px;
        margin: 0 auto 5px;
        border-radius: 50% 50%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon i{
        color: red;
        font: 1.7rem bold;
    }
    .icon:hover{
        background: red;
    }
    .icon:hover i{
        color: white;
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
                    icon:'el-icon-date',
                    title: '私人FM'
                }, {
                    icon: 'el-icon-location-outline',
                    title: '每日推荐'
                }, {
                    icon: 'el-icon-date',
                    title: '歌单'
                }, {
                    icon: 'el-icon-location-outline',
                    title: '排行榜'
                }]
            }
        }
    }
</script>
