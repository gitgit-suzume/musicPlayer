<template>
    <div class="swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(item, index) in imgs">
                <img :src="item.img" :alt="index">
                <span :style="{background: item.titleBackground}">{{item.title}}</span>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style scoped>
    .swiper-container{
        height: 50vw;
        margin: 100px 0 0 0;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width:100%
    }
</style>
<script>
    export default {
        name: 'showing',
        data: function () {
            return {
                buttonName:'img-button',
                imgs:[{
                    img: './static/img/carousel_1.jpg',
                    title:'独家专访',
                    titleBackground: 'green',
                    imgsRotate:null
                },{
                    img:'./static/img/carousel_2.jpg',
                    title:'电音',
                    titleBackground:'pink',
                },{
                    img:'./static/img/carousel_3.jpg',
                    title:'独家',
                    titleBackground:'red',
                },{
                    img:'./static/img/carousel_4.jpg',
                    title:'演出',
                    titleBackground:'yellowgreen',
                },{
                    img:'./static/img/carousel_5.jpg',
                    title:'活动',
                    titleBackground:'blue',
                }]
            }
        },
        mounted () {
            new Swiper('.swiper-container',{
                speed: 500,
                loop: true,
                autoplay: {
                    delay: 500
                },
                pagination:{
                    el:'.swiper-pagination'
                }
            })
        }
    }
</script>