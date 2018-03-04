# 介绍

> 模仿网易云音乐移动端app的vue项目。

> 请务必用浏览器的移动模式浏览

> master分支数据需要在线获取，请在联网情况下运行。static分支数据来源于项目中的json文件，可离线运行。

> 数据接口由[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi "Binaryify")提供，感谢Binaryify！

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

----------

# Vue学习笔记
---------------
## 介绍
记录了本人学习vue的一些心得、体会、收获、个人简介。
--------------
## 生命周期钩子
![Alt text](/readmeImg/lifecycle.png "生命周期钩子")
注：
* 上图来自vue官网
* 下文中"xx流程"的称呼是为了方便表达，不一定是官方叫法

> 创建流程

###### beforeCreate
完成生命周期和事件的初始化，此时组件还没渲染，组件中大多数值都不可访问（比如$data、$props、$el）
###### created
* 个人理解，组件数据已经进行了处理——已经实现了数据绑定（reactivity）、依赖收集（injections，依赖收集是为了减少多余的重新渲染，使只有与视图渲染相关的数据改变的时候，才进行重新渲染）。
* 组件的数据（比如说data、props、computed、methods）等已经可以拿值，我一般在这里请求数据。
* 但是仍然没开始创建element，所以如果用swiper之类要跟dom元素打交道的组件。这里设置是不生效的。

> 挂载流程

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

> 更新流程

###### beforeUpdate && updated
* 先后触发beforeUpdate、update。顾名思义，beforeUpdate是更新前的情况，updated是更新后的情况
* 如果变量跟视图渲染无关，那么变量改变并不会触发更新流程，因为创建流程中对变量进行了依赖收集，省去了不必要的重新渲染
* 如果变量的变化仅影响自身组件，那么仅自身组件触发update。其父组件、子组件均不会触发update

> 销毁流程

###### beforeDestroy && destroyed
* 组件$destory()调用后触发beforeDestory，随后销毁组件的watcher、子组件、事件监听函数，操作完成后触发destroyed，表示组件已经销毁。
* 组件destroyed前，会先去清理完毕名下所有子组件，才触发自身的destroyed。

# diff算法
参考[answershuto](https://github.com/answershuto "answershuto")的[learnVue](https://github.com/answershuto/learnVue/blob/master/docs/VirtualDOM%E4%B8%8Ediff(Vue%E5%AE%9E%E7%8E%B0).MarkDown "learnVue")
###### 概述：
A. virtual dom就是将dom树上的属性，用对象的形式记录下来，上面的节点叫vnode <br>
B. 更新流程就是在这里触发的、如果节点已经加载过，则触发更新流程 <br>

C. diff算法就是找出最小要改变的单位进行改变。diff算法遍历如下图（图片参照网上画法），相同颜色方框中的节点将会进行比较。 <br>
![Alt text](/readmeImg/遍历示意图.png "遍历示意图")

D. 对比相类似的节点，如果节点相同(根据一些属性判断节点是否相同，比如节点类型、key等)则修改对应属性，如果不同替换掉这个节点。<br>
E. 如果新老节点有子节点，则对子节点进行diff操作，用一定的方法(updateChildren)遍历比较这些子节点。<br>
    * updateChildren<br>
    1. 要对比的新老节点数组我们姑且称为oldVnodes、newVnodes。建立四个索引，分别指向新老节点数组的首尾，我们称为oldStartVnode、oldEndVnode、newStartVnode、newEndVnode。    从要对比的两个数组两端夹逼比较。<br>
    2. 具体做法就是对比(oldStartIdx,newStartIdx)、(oldEndIdx,newEndIdx)、(oldStartIdx,newEndIdx)、(oldEndIdx,newStartIdx)。如果相同，则进行一定的操作（下方伪代码中abcde）。如果不同，通过key找可能会相同的节点，随后进行D、E比较<br>
```bash
        a. if(sameVnode(oldStartIdx,newStartIdx)){
                进行上述D、E
                oldStartVnode = oldVnodes[++oldStartIdx]
                newStartVnode = newVnodes[++newStartIdx]
            }
        b. if(sameVnode(oldEndIdx,newEndIdx)){
                进行上述D、E
                oldEndVnode = oldVnodes[--oldEndIdx]
                newEndVnode = newVnodes[--newEndIdx]
            }
        c. if(sameVnode(oldStartIdx,newEndIdx)){
                进行上述D、E
                //将oldStartVnode移到oldEndVnode后
            }
        c. if(sameVnode(oldEndIdx,newStartIdx)){
                进行上述D、E
                //将oldEndIdx移到oldStartIdx前
            }
```
    3. 当oldStartIdx > oldEndIdx || newStartIdx > newEndIdx时候结束比较。如果oldStartIdx > oldEndIdx，表示新节点多于老节点，增加新的真身的dom节点；如果newStartIdx > newEndIdx，说明老节点多于新节点，删除多余的老节点。

