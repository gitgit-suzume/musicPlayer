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
<style scoped lang="less">
    @import (less) "../../../style/mixin";
    .meeting{
        /*margin: 4.23vw 0 0 0;*/
        a:hover{
            text-decoration: none;
            img{
                background: @red;
            }
        }
        .container{
            float: left;
            width: 25vw;
            overflow: hidden;
            .icon{
                width: 13.73vw;
                height: 13.73vw;
                margin: 4.23vw auto 3.17vw;
                border-radius: 50% 50%;
                border: .3vw solid @red;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    color: @red;
                    font-size: 6.34vw;
                }
            }
            .icon:hover{
                background: @red;
                i {
                    color: white;
                }
            }
        }
        span{
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 3.52vw;
            margin: 0 0 5.28vw 0;
        }
    }
</style>

