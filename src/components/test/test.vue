<template>
    <div class="test">
        233333
        <audio id="test-audio"
               autoplay>
            <source src="http://m7.music.126.net/20180221181816/0af872ba4b43c10cdb02194c7ceeae37/ymusic/17ca/2cb7/500b/b94f20bf3e7331184cb3411c4aa43a6f.mp3"
                    autoplay="true">
        </audio>
    </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return {
                info: 'from test'
            }
        }
    }
</script>
<style scoped lang="less">
    @import "../../style/mixin";
    .test{
        padding: @header-height 0 0 0;
    }
</style>