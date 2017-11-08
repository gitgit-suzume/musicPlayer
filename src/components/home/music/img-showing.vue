<template>
    <div class="img-showing" >

        <ul :style="{width:imgs.lenght*100 + 'vw'}">
            <li :class="['img-images',index === 0 ? 'img-images-active' : '']"
                v-for="(item,index) in imgs"
                :key="'img-images-'+index">
                <a class="img" href="javascript:;">
                    <img :src="item.img" alt="轮播图片">
                </a>
                <span class="img-title"
                      :style="{background:item.titleBackground}">
                            {{item.title}}
                        </span>
            </li>
        </ul>
        <ul @click="playingByUser($event)"
            :style="{width: 8 * imgs.length + 5 * (imgs.length) + 'px'}">
            <li v-for="(item,index) in imgs"
                :class="['img-button',index==0?'img-button-active':'']"
                :key="'img-button-'+index"></li>
        </ul>
    </div>
</template>
<style scoped>
    .img-showing {
        width: 100%;
        height: 50vw;
        overflow: hidden;
        position: relative;
    }
    .img-images{
        position: absolute;
        opacity: 0;
        width: 100vw;
        height: 50vw;
        transition:all 0.5s;
    }
    .img-images-active{
        opacity: 1;
    }
    .img{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .img img {
        width: 100%;
    }
    .img-title{
        position: absolute;
        bottom: 5vw;
        right:1% ;
        display: inline-block;
        color:white;
        padding:3px 15px 3px 15px;
        border-radius: 10px 0 0 10px;
        font: 14px normal ;
    }
    .img-showing ul:last-child{
        position: relative;
        top:45vw;
        margin: 0 auto;
    }
    .img-button{
        margin: 0 5px 0 0 ;
        width: 8px;
        height: 8px;
        border-radius: 50% 50%;
        float: left;
        background:rgba(255,255,255,0.25);
    }
    .img-button-active{
        background: #c62f2f;
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
        methods: {
            changeImg: function (target) {
                $('.img-images-active').removeClass('img-images-active');
                $($('.img-images')[target]).addClass('img-images-active');
            },
            changeButton: function(target){
                $('.img-button-active').removeClass('img-button-active');
                $($('.img-button')[target]).addClass('img-button-active');
            },
            playingAuto: function (target){
                this.changeImg(target);
                this.changeButton(target);
            },
            playingByUser: function (event) {
                var target = $(event.target).index();
                this.changeImg(target);
                this.changeButton(target);
            }
        },
        created: function(){
            var n = 0,
                that = this;
            setInterval(function() {
                that.playingAuto(n = (n + 1) % 5);
            },5000);
        }
    }
</script>