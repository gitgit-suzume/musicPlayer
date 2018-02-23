<template>
    <div class="record">
        <img class="rotate"
             :src="url"
             alt="图片未能显示">
    </div>
</template>
<script>
    export default {
        name: 'record',
        computed:{
            url(){
              return this.info.album.picUrl
            },
            info(){
                let index = this.$store.state.playingIndex
                let list = this.$store.state.playingList
                return list[index]
            }
        }
    }
</script>
<style scoped lang="less">
    @import (less) "../../../style/mixin";
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .rotate{
        animation:spin 20s linear infinite;
    }
    .record{
        height: 61.77vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 49.65vw;
            height: 49.65vw;
            border-radius: 50% 50%;
            border-radius: 50% 50%;
            border: 11.44vw solid black;
            box-shadow: 0 0 5vw rgba(255,255,255,.3);
        }
    }
</style>