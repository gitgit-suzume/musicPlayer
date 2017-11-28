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
<style scoped>
    .guide{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        z-index: 10;
        width: 100%;
        height: 50px;
        background-color: #c62f2f;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    .guide li{
        display: inline-block;
        width: 50px;
        height: 100%;
    }
    .guide li i {
        display: inline-block;
        width: 50px;
        height: 50px;
        font: 30px normal;
        color: white;
        line-height: 50px;
        text-align: center;
    }
    .guide li a{
        width: 50px;
        height: 100%;
        display: inline-block;
        font:30px normal;
        line-height: 50px;
        text-align: center;
        color: white;
    }
    .guide li a:hover{
        text-decoration: none;
    }
</style>
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
