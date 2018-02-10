<template>
    <div class="img-showing swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <a href="javascript:;">
                    <img :src="item.img" alt="swiper">
                </a>
                <span :style="{background: item.titleBackground}">{{item.title}}</span>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    export default {
        name: 'img-showing',
        data () {
            return {
                buttonName:'img-button',
                imgs:[{
                    img: '../../../../static/img/carousel_1.jpg',
                    title:'独家专访',
                    titleBackground: 'green',
                    imgsRotate:null
                },{
                    img:'../../../../static/img/carousel_2.jpg',
                    title:'电音',
                    titleBackground:'pink',
                },{
                    img:'../../../../static/img/carousel_3.jpg',
                    title:'独家',
                    titleBackground:'red',
                },{
                    img:'../../../../static/img/carousel_4.jpg',
                    title:'演出',
                    titleBackground:'yellowgreen',
                },{
                    img:'../../../../static/img/carousel_5.jpg',
                    title:'活动',
                    titleBackground:'blue',
                }]
            }
        },
        mounted () {
            new Swiper('.swiper-container', {
                loop: true,
                speed: 300,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction:false
                },
                pagination:{
                    el:'.swiper-pagination'
                }
            })
        }
    }
</script>
<style scoped lang="less">
    .swiper-container{
        height: 39.08vw;
        .swiper-slide{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                right: 0;
                bottom: 2vw;
                padding: 1.76vw 1.76vw 1.76vw 5.28vw;
                color: white;
                font: 3.52vw normal;
                border-radius: 7.04vw 0 0 7.04vw;
            }
        }
    }
</style>
