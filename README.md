# 介绍
> 模仿网易云音乐移动端app的vue项目。

> 请务必用浏览器的移动模式浏览

## 技术栈

``` bash

* vue+vuex+vue-router：核心框架
* axios：请求数据
* webpack：自动化构建工具，初始配置由vue-cli提供
* less: css预处理语言

```

## 项目运行

``` bash

> 请务必先运行提供数据的API

# 克隆到本地
npm install https://github.com/gitgit-suzume/musicPlayer.git

> 请务必先运行提供数据的API

# 进入文件夹
cd musicPlayer/NeteaseCloudMusicApi

# 安装依赖
npm i

# 启动后台
node app.js

> 运行musicPlayer下的前端项目

# 进入musicPlayer文件夹
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