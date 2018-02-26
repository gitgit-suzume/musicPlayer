# 介绍

> 模仿网易云音乐移动端app的vue项目。

> 请务必用浏览器的移动模式浏览

> master分支数据需要在线获取，请在联网情况下运行。static分支数据来源于项目中的json文件，可离线运行。

## 技术栈

* vue+vuex+vue-router：核心框架
* axios：请求数据
* webpack：自动化构建工具，初始配置由vue-cli提供
* less: css预处理语言

## 项目预览图（v1.0）

> 首页(/home/music)

![Alt text](/readmeImg/home.gif "首页效果图")

> 个人歌单页(/list) && 歌单详情页

![Alt text](/readmeImg/list.gif "个人歌单页面 && 歌单详情页")

> 歌曲播放页(/song-player) && 用户信息侧边栏

![Alt text](/readmeImg/song-player.gif "歌曲播放页 && 用户信息侧边栏")

## 项目运行

``` bash

# 克隆到本地
npm install https://github.com/gitgit-suzume/musicPlayer.git

```

> 请务必先运行提供数据的API

``` bash

# 进入文件夹
cd musicPlayer/NeteaseCloudMusicApi

# 安装依赖
npm i

# 启动数据API
node app.js

```
> 运行musicPlayer下的前端项目

``` bash

#进入musicPlayer文件夹
cd musicPlayer

# 安装依赖项
npm i

# 开启本地服务器localhost:8080
npm run dev

```
## 功能

> v1.0

* 获取账号下歌单内容
* 查看某歌单中相关信息（歌单封面、收听人数、创始者、歌曲等）
* 屏幕下方播放界面
* 当前播放列表歌曲删除
* 在当前播放列表切换播放歌曲
* 部分界面切换动画
* 歌曲播放功能

## 待实现/完善
* 歌曲播放页(song-player)切换歌曲过快，获取歌曲时间总长会为NAN（加函数节流会因为没能及时处理信息，获取歌曲时间总长不对）
* 播放模式选择，目前仅支持顺序播放
* vuex(store文件夹)的代码分块，历史冗余代码整理
* 路由器结构调整，把一些页面调整为依靠路由器显示，而不是依靠某个值决定显不显示
* 页面切换动画优化

# Vue学习笔记
## 生命周期钩子
![Alt text](/readmeImg/lifecycle.png "生命周期钩子")
###### beforeCreate
完成声明周期和事件的初始化，但在创建实例之前。此时组件还没渲染，组件中大多数值都不可访问（比如$data、$props、$el
###### created
* 个人理解，组件数据已经进行了处理——已经实现了数据绑定（reactivity）、依赖收集（injections，依赖收集是为了减少多余的重新渲染，使只有与视图渲染相关的数据改变的时候，才进行重新渲染）。
* 组件的数据（比如说data、props、computed、methods）等已经可以拿值，我一般在这里请求数据。
* 但是仍然没开始创建element，所以如果用swiper之类要跟dom元素打交道的组件。这里设置是不生效的。
###### beforeMount
* 函数意思是载入之前，个人理解为已经编译完成HTML并挂载到对应虚拟dom。触发此函数之前是一系列的操作：
    * 1.有没有el的选项
        * 有 --> 直接进行2
        * 无 --> 用$mount(el)挂载模板
    * 2.有没有template的选项？
        * 无论有没有，都会把vue的模板数据编译成浏览器可读的html。
    * 3.进入beforeMount。将编译完成的html挂载到对应的虚拟dom上。此时还不能访问$el。
    * 4.在父组件beforeMount之后mounted之前，会先进入子组件的生命周期，直到子组件mounted后，才会进行父组件的下一步。
###### mounted
编译好的html已经挂在到页面上，此时可以访问$el这些dom元素了。
数据获取也可以在此函数中进行，此时可以初始化有dom操作的组件，比如swiper。
###### beforeUpdate && updated
* 先后触发beforeUpdate、update。顾名思义，beforeUpdate是更新前的情况，updated是更新后的情况
* 如果变量跟视图渲染无关，那么变量改变并不会触发update，因为create阶段对变量进行了依赖收集，省去了不必要的重新渲染
* 如果变量的变化仅影响自身组件，那么仅自身组件触发update。其父组件、子组件均不会触发update
###### beforeDestroy && destroyed
* 组件$destory()调用后触发beforeDestory，随后销毁组件的watcher、子组件、事件监听函数，操作完成后触发destroyed，表示组件已经销毁。
* 组件destroyed前，会先去清理完毕名下所有子组件，才触发自身的destroyed。
