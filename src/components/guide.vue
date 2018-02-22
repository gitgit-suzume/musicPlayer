<template>
    <div class="guide">
        <li class="guide-list">
            <a href="javascript:;" @click="showUserList()">
                <i class="el-icon-tickets"></i>
            </a>
        </li>
        <div class="guide-button">
            <router-link to="/list" tag="li">
                <i class="el-icon-document"></i>
            </router-link>
            <router-link to="/home" tag="li">
                <i class="el-icon-bell"></i>
                <!--<a href="javascript:;">-->
                    <!--2-->
                <!--</a>-->
            </router-link>
            <router-link to="/friends" tag="li">
                <i class="el-icon-service"></i>
                <!--<a href="javascript:;">3</a>-->
            </router-link>
        </div>
        <li class="guide-search">
            <a href="javascript:;">
                <i class="el-icon-search"></i>
            </a>
        </li>
    </div>
</template>
<script>
    export default {
        name: 'guide',
        data () {
            return {
            }
        },
        methods:{
            showUserList () {
                this.$store.commit('showUserList')
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../style/mixin";
    .active-i{
        color: white;
    }
    .guide{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        z-index: 10;
        height: @header-height;
        background-color: @red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        li{
            display: inline-block;
            overflow: hidden;
            i{
                display: inline-block;
                width: 7.04vw;
                height: 7.04vw;
                font: 7.04vw normal;
                color: rgba(255, 255, 255, 0.5);
                line-height: 100%;
                text-align: center;
            }
            i:hover{
                .active-i;
            }
            a{
                overflow: hidden;
                height: 100%;
                display: inline-block;
                font:30px normal;
                line-height: 100%;
                text-align: center;
                color: white;
            }
            a:hover{
                text-decoration: none;
            }
        }
        .guide-list{
            margin-left: @body-margin-left;
        }
        .guide-search{
            margin-right: @body-margin-left;
        }
        .guide-button{
            li{
                margin-right: @body-margin-left;
            }
            li:last-child{
                margin-right: 0;
            }
        }
    }
</style>

