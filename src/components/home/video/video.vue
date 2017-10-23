<template>
    <div>
        {{info}}
    </div>
</template>
<script>
    export default {
        name:'video',
        data: function () {
            return {
                info: 'from home-video'
            }
        },
        created: function () {
            console.log('---------from home-video---------')
        }
    }
</script>