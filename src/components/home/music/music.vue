<template>
    <div>
        <img-showing></img-showing>
        <meeting></meeting>
        <hr>
        <recommend></recommend>
    </div>
</template>
<script>
    import imgShowing from './img-showing.vue'
    import meeting from './meeting.vue'
    import recommend from './recommend.vue'
    export default {
        name:'music',
        data: function () {
            return {
                info:'from home music'
            }
        },
        components:{
            'img-showing':imgShowing,
            meeting: meeting,
            recommend: recommend
        },
        created:function () {
            console.log('---------from home-music---------')
        }
    }
</script>
