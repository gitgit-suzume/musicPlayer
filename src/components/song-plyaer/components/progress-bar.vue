<template>
    <div class="progress-bar"
         @mouseleave.self="setEvent($event)"
         @mouseup="setEvent($event)"
         @mouseover="moveBar($event)">
        <span class="cur-time">{{showCurTime.min}}:{{showCurTime.second}}</span>
        <div class="bar">
            <div class="finish-bar"
                 :style="{width: finishBar + '%'}"></div>
            <div class="ball"
                 ref="ball"
                 :style="{left: finishBar + '%'}"
                 @mousedown="setEvent($event)"></div>
        </div>
        <span class="all-time">{{showAllTime.min}}:{{showAllTime.second}}</span>
    </div>
</template>
<script>
    export default {
        name: 'progress-bar',
        data () {
            return {
                info: 'progress-bar',
                curTime: {
                    min: 0,
                    second: 0
                },
                allTime: {
                    min: 4,
                    second: 29
                },
                moving: false,
                timer: null
            }
        },
        computed: {
            showCurTime(){
                return this.timeFormat(this.curTime)
            },
            showAllTime(){
                return this.timeFormat(this.allTime)
            },
            finishBar(){
                let allSecond = this.countSecond(this.allTime)
                let curSecond = this.countSecond(this.curTime)
                return curSecond / allSecond * 100
            }
        },
        mounted(){
            clearTimeout(this.timer)
            this.autoPlay()
        },
        methods:{
            autoPlay(){
                let interval = 1000
                this.timer = setTimeout((cur) => {
                    let curTime = this.countSecond(this.curTime)
                    let allTime = this.countSecond(this.allTime)
                    // let now = new Date()
                    // console.log(now - cur)
                    if(curTime >= allTime) {
                        return
                    }
                    if(!this.moving) {
                        this.curTime.second++
                        clearTimeout(this.timer)
                    }
                    setTimeout(this.autoPlay(), interval)
                }, interval)
            },
            countSecond({min: min = 0, second: second = 0}){
                return min * 60 + second
            },
            timeFormat(time){
                let {min: min = 0, second: second = 0} = time
                if(second >= 60){
                    time.min += second / 60
                    time.second = second % 60
                }
                ({min: min = 0, second: second = 0} = time)
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
                //计算滑块位移结果
                let el = this.$refs.ball
                let curTime = this.$refs.curTime
                //边界
                let parentNode = el.parentNode
                let parentInfo = parentNode.getBoundingClientRect()
                let min = parentInfo.x
                let max = parentInfo.width + min
                let clientX = e.clientX
                let result = clientX - min
                if(clientX < min){
                    result = 0
                }
                if(clientX > max){
                    result = parentInfo.width
                }
                el.style.left = result + 'px'
                this.turnToTime(result, parentInfo.width)
                this.autoPlay()
            },
            turnToTime(finishWidth, allWidth){
                let percent = finishWidth / allWidth
                let allTime = this.countSecond(this.allTime)
                let finishTime = Math.floor(allTime * percent)
                this.curTime.min = Math.floor(finishTime / 60)
                this.curTime.second = finishTime % 60
            },
            setEvent(e){
                switch (e.type){
                    case 'mousedown':
                        this.moving = true;
                        break;
                    case 'mouseleave':
                    case 'mouseup':
                        this.moving = false;
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