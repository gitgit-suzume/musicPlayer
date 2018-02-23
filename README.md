# 介绍

> 模仿网易云音乐移动端app的vue项目。

> 请务必用浏览器的移动模式浏览

> master分支数据需要在线获取，请在联网情况下运行。static分支数据来源于项目中的json文件，可离线运行。

## 技术栈

* vue+vuex+vue-router：核心框架
* axios：请求数据
* webpack：自动化构建工具，初始配置由vue-cli提供
* less: css预处理语言

##效果图（v1.0）
> 首页(/home/music)
![Alt text](/readmeImg/home.gif "首页效果图")


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
* 歌曲播放功能（不支持自动切歌）

## 待实现/完善
* 歌曲播放页(song-player)切换歌曲过快，获取歌曲时间总长会为NAN（加函数节流会因为没能及时处理信息，获取歌曲时间总长不对）
* 播放模式选择，目前仅支持顺序播放
* vuex(store文件夹)的代码分块，历史冗余代码整理
* 路由器结构调整，把一些页面调整为依靠路由器显示，而不是依靠某个值决定显不显示
* 页面切换动画优化