<template>
    <div class="progress-bar"
         @touchend="setEvent($event)"
         @mouseleave.self="setEvent($event)"
         @mouseup="setEvent($event)"
         @touchmove="moveBar($event)"
         @mouseover="moveBar($event)">
        <span class="cur-time">
            {{curTime.min}}:{{curTime.second}}
        </span>
        <div class="bar" ref="bar">
            <div class="finish-bar"
                 :style="{width: finishBar + '%'}"></div>
            <div class="ball"
                 :style="{left: finishBar + '%'}"
                 @touchstart="setEvent($event)"
                 @mousedown="setEvent($event)"></div>
        </div>
        <span class="all-time">{{allTime.min}}:{{allTime.second}}</span>
    </div>
</template>
<script>
    export default {
        name: 'progress-bar',
        data () {
            return {
                info: 'progress-bar',
                moving: false,
                currentTime: 0,
                movingRate: 0,
                movingTemp: -1,
                duration: 0,
            }
        },
        watch: {
            songIndex: function () {
                this.duration = this.songAudio.duration
                this.currentTime = 0
            }
        },
        computed: {
            songAudio(){
                return this.$store.state.songAudio
            },
            songIndex(){
                return this.$store.state.playingIndex
            },
            curTime(){
                let result = this.secondToFormat(this.currentTime)
                result = this.timeFormat(result)
                return result
            },
            allTime(){
                let result = this.secondToFormat(this.duration)
                result = this.timeFormat(result)
                return result
            },
            finishBar(){
                let allSecond = this.duration
                let curSecond
                if(this.moving){
                    curSecond = this.movingTemp
                }else {
                    curSecond = this.currentTime
                }
                return curSecond / allSecond * 100
            }
        },
        mounted(){
            this.duration = this.songAudio.duration
            this.updateTime()
        },
        methods:{
            updateTime(){
                let interval = 250
                setTimeout(() => {
                    this.currentTime = this.songAudio.currentTime
                    this.updateTime()
                }, interval)
            },
            secondToFormat(val){
                let min = 0, second = 0
                min = Math.floor(val / 60)
                second = Math.floor(val % 60)
                return {
                    min: min,
                    second: second
                }
            },
            timeFormat(time){
                let {min: min = 0, second: second = 0} = time

                if(second < 10){
                    second = '0' + second
                }
                if(min < 10) {
                    min = '0' + min
                }
                return {
                    min: min,
                    second: second
                }
            },
            moveBar(e){
                if(!this.moving) {
                    return;
                }
                // let el = this.$refs.ball
                //边界
                let bar = this.$refs.bar
                let barInfo = bar.getBoundingClientRect()
                let min = barInfo.x
                let max = barInfo.width + min
                let x
                switch(e.type) {
                    case 'mouseover':
                        x = e.clientX;
                        break;
                    case 'touchmove':
                        x = e.touches[0].pageX
                }
                console.log(e.type, x)
                let result = x - min
                if(x < min){
                    result = 0
                }
                if(x > max){
                    result = barInfo.width
                }

                this.movingTemp = this.duration * (result / barInfo.width)
                // el.style.left = result + 'px'
            },
            setEvent(e){
                console.log(e.type)
                switch (e.type){
                    case 'touchstart':
                    case 'mousedown':
                        this.moving = true;
                        this.movingTemp = this.currentTime
                        break;
                    case 'touchend':
                    case 'mouseleave':
                    case 'mouseup':
                        this.moving = false;
                        this.songAudio.currentTime = this.movingTemp
                        this.songAudio.play()
                        break;
                    default:
                        ;
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    @margin-between: 5.81vw;
    .progress-bar {
        padding: 7.75vw 0 6.16vw 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: 2.29vw;
            user-select: none;
        }
        .cur-time{
            margin-left: @margin-between;
            color: white;
        }
        .all-time{
            margin-right: @margin-between;
            color: rgba(255, 255, 255, .50);
        }
        .bar{
            position: relative;
            display: flex;
            align-items: center;
            width: 73.59vw;
            height: .7vw;
            background: rgba(255, 255, 255, .5);
            .finish-bar{
                position: absolute;
                left: 0;
                height: .7vw;
                background: @red;
            }
            .ball{
                position: absolute;
                width: 1.23vw;
                height: 1.23vw;
                border-radius: 50% 50%;
                border: 1.76vw solid white;
                background: @red;
            }
        }
    }
</style>