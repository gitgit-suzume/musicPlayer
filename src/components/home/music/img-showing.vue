<template>
    <div class="img-showing swiper-container" >
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in imgs" :key="item.id">
                <a href="javascript:;">
                    <img :src="item.img" :alt="index">
                </a>
                <span :style="{background: item.titleBackground}">{{item.title}}</span>
            </div>
        </div>
        <!--<ul :style="{width:imgs.lenght*100 + 'vw'}">-->
            <!--<li :class="['img-images',index === 0 ? 'img-images-active' : '']"-->
                <!--v-for="(item,index) in imgs"-->
                <!--:key="'img-images-'+index">-->
                <!--<a class="img" href="javascript:;">-->
                    <!--<img :src="item.img" alt="轮播图片">-->
                <!--</a>-->
                <!--<span class="img-title"-->
                      <!--:style="{background:item.titleBackground}">-->
                            <!--{{item.title}}-->
                        <!--</span>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<ul @click="playingByUser($event)"-->
            <!--:style="{width: 8 * imgs.length + 5 * (imgs.length) + 'px'}">-->
            <!--<li v-for="(item,index) in imgs"-->
                <!--:class="['img-button',index==0?'img-button-active':'']"-->
                <!--:key="'img-button-'+index"></li>-->
        <!--</ul>-->
    </div>
</template>
<style scoped>
    .swiper-container{
        height: 50vw;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width: 100%;
    }
    .swiper-slide span{
        position: absolute;
        right: 0;
        bottom: 2vw;
        padding: 3px 3px 3px 15px;
        color: white;
        font: 12px normal;
        border-radius: 12px 0 0 12px;
    }
</style>
<script>
    export default {
        name: 'showing',
        data: function () {
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
                    delay: 3000
                }
            })
        }
    }
</script>