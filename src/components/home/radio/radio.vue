<template>
    <div>
        {{info}}
    </div>
</template>
<script>
    export default {
        name:'radio',
        data: function () {
            return {
                info: 'from home-radio'
            }
        },
        created:function () {
            console.log('---------from home-video---------')
        }
    }
</script>