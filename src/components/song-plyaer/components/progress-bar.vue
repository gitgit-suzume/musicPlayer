<template>
    <div class="progress-bar" @mouseover="moveBar($event)">
        <span class="cur-time">{{curTime}}</span>
        <div class="bar">
            <div class="finish-bar"></div>
            <div class="all-bar"></div>
            <div class="ball"
                 ref="ball"
                 @mousedown="setEvent($event)"
                 @mouseup="setEvent($event)"></div>
        </div>
        <span class="all-time">{{allTime}}</span>
    </div>
</template>
<script>
    export default {
        name: 'progress-bar',
        data () {
            return {
                info: 'progress-bar',
                curTime: '03:15',
                allTime: '04:23',
                moving: false
            }
        },
        mounted(){
            this.$on('movingBar', (e) => {
                this.moveBar(e)
            })
        },
        methods:{
            moveBar(e){
                let el = this.$refs.ball
                console.log(el.offsetLeft)
                if(!this.moving) {
                    return;
                }
                // el.style.left = (e.clientX + diff) + 'px'
            },
            setEvent(e){
                switch (e.type){
                    case 'mousedown':
                        this.moving = true;
                        break;
                    case 'mouseup':
                        this.moving = false;
                        break;
                    default:
                        this.moving = false;
                }
                // e.target.style.left = e.clientX + 'px';
            }
        }
    }
</script>
<style lang="less" scoped>
    @import (less) "../../../style/mixin";
    @margin-between: 5.81vw;
    .progress-bar {
        margin: 7.75vw 0 6.16vw 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: 2.29vw;
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
            .finish-bar{
                position: absolute;
                left: 0;
                height: .7vw;
                width: 50vw;
                background: @red;
            }
            .all-bar{
                width: 73.59vw;
                height: .7vw;
                background: rgba(255, 255, 255, .5)
            }
            .ball{
                position: absolute;
                left: 100px;
                width: 1.23vw;
                height: 1.23vw;
                border-radius: 50% 50%;
                border: 1.76vw solid white;
                background: @red;
            }
        }
    }
</style>