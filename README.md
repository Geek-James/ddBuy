<div align=center>
<img src="http://518taole.7-orange.cn/geek3.png" width = "100" height = "100" div align=center />
</div>
<p align="center">
   <img src="https://badgen.net/github/stars/Geek-James/ddBuy" alt="Star">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vue-2.6.10-brightgreen.svg" alt="Vue">
  </a>
  <a href="https://youzan.github.io/vant/#/zh-CN/intro">
    <img src="https://img.shields.io/badge/Vant--UI-2.7.0-brightgreen.svg" alt="Vant-ui">
  </a>
  <img src="https://img.shields.io/badge/Node-8.9+-brightgreen.svg" alt="Vant-ui">
   <a href="https://github.com/Geek-James">
    <img src="https://img.shields.io/badge/build-passing-green.svg" alt="geekJames">
  </a>
  <a href="https://github.com/easy-mock/easy-mock">
    <img src="https://img.shields.io/badge/EasyMock-1.6.0-brightgreen.svg" alt="easymock">
  </a>
    <a href="https://github.com/Geek-James/ddBuy/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

简体中文 | [English](https://github.com/Geek-James/ddBuy/blob/master/README.en.md)


📣📣 **下一个开源项目正在创作中,扫面下方二维码，第一时间获取最新开源动态**

### 和作者交朋友

| 学习群                                                                                                | 公众号
| ----------------------------------------------------------------------------------------------------- | --|
| <img width="360px" src="http://518taole.7-orange.cn/hitron/me.gif"/> |<img width="360px" src="http://518taole.7-orange.cn/hitron/gz.png">


## 简介

**ddBuy**是一个移动端开源电商项目，它基于 [vue 2.x](https://github.com/vuejs/vue) 和 [vant 2.x](https://youzan.github.io/vant/#/zh-CN/intro)实现。使用了最新的Vue全家桶技术栈，以及一些优秀的开源库如[better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/api.html)、 [moment.js](https://github.com/moment/moment/)、[twix.js](https://github.com/icambron/twix.js)、[pubsub-js](https://github.com/mroderick/PubSubJS),后台数据通过[Easy-Mock](https://github.com/easy-mock/easy-mock)搭建。支持多语言国际化,相信不管你是处于哪个段位的攻城狮，本项目都能帮助到你。

## [Release Note](https://github.com/Geek-James/ddBuy/releases)

**V1.3.0及以上版本支持国际化语言**
### 支持 英语 中文

作者 **[极客James](https://juejin.im/user/5c4ebc72e51d4511dc7306ce)**

## 前序准备

>如果你是刚入门Vue的小白墙裂建议过一遍[Vue官方文档](https://cn.vuejs.org/),如果你已经掌握了Vue,那么墙裂建议按照[Vue代码风格指南](https://cn.vuejs.org/v2/style-guide/)来写代码。

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [vant-ui](https://youzan.github.io/vant/#/zh-CN/intro)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

同时配套了Vue基础系列教程文章，适合小白入门Vue,后期会把整个ddBuy项目拆分些技术文章出来。

- **核心技术拆解**:
  - [服务器搭建Easy-Mock](https://juejin.im/post/5dfdcda1f265da33a55fa5a0)
  - [数据抓包](https://juejin.im/post/5d7f097fe51d453b8b5fa680)
  - [商品飞入购物车动画](https://juejin.im/post/5dd55fd2f265da47dd1af944?utm_source=gold_browser_extension)
  - [登录注册](https://juejin.im/post/5dafc91a6fb9a04e4047a713)
  - [封装SVG组件](https://juejin.im/post/5dea5745f265da33bd496f50)
  - [个人中心](https://juejin.im/post/5dbf9613f265da4d32001eb0)

- **Vue甜小白系列专栏**:
    - [Vue从甜小白到皮大佬系列(一) Vue是个啥?](https://juejin.im/post/5d64f31ae51d4561db5e3a74)
    - [Vue从甜小白到皮大佬系列(二) v-指令](https://juejin.im/post/5d652fb351882505a87a976b)
    - [Vue从甜小白到皮大佬系列(三) 生命周期
](https://juejin.im/post/5d6675716fb9a06b10273c1c)
    - [Vue从甜小白到皮大佬系列(四) 自定义指令
](https://juejin.im/post/5d673ad7f265da03934bf266)
    - [Vue从甜小白到皮大佬系列(五) 组件
](https://juejin.im/post/5d67eac7e51d453c12504e3a)
    - [Vue从甜小白到皮大佬系列(六) 组件通信
](https://juejin.im/post/5d699e2b6fb9a06ae3727746)
    - [Vue从甜小白到皮大佬系列(七) Vue Router
](https://juejin.im/post/5d6e6f366fb9a06b32609021)
    - [Vue从甜小白到皮大佬系列(八) Vuex](https://juejin.im/post/5d6f5801f265da03da24b365)

**欢迎提Bug,如有新的需求和想法，欢迎 issue 和 pr**

## 完整项目图
[项目架构树](https://github.com/Geek-James/ddBuy/blob/master/README.structure.md)

![image](http://518taole.7-orange.cn/homePage.jpg)

![image](http://518taole.7-orange.cn/categorytwo.jpg)

![image](http://518taole.7-orange.cn/myOrder.jpg)

## 如何运行

```bash
# 克隆项目到本地
git clone https://github.com/Geek-James/ddBuy.git

# 进入项目目录
cd ddbuy

# 安装依赖
npm install

# 启动服务
npm run serve
```

浏览器访问 http://localhost:8080

## 发布

```bash
# 构建生产环境
npm run build
```

## 在线浏览器预览

[请把浏览器切换到移动端模式](http://ddbuy.7-orange.cn)

## 手机端扫码预览
![](http://518taole.7-orange.cn/qrcode.gif)

## Star历史
[![Stargazers over time](https://starchart.cc/Geek-James/ddBuy.svg)](https://starchart.cc/Geek-James/ddBuy)

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

### 访问量
<img src="https://visitor-badge.glitch.me/badge?page_id=Geek-James/ddBuy"/>

## MIT许可协议

[MIT](https://github.com/Geek-James/ddBuy/blob/master/LICENSE)

## 声明
本项目仅做技术交流和学习，不建议用于商业目的！

Copyright (c) 2020 极客-James  

![](https://raw.githubusercontent.com/FairyEver/d2-admin/master/docs/image/give-a-star@2x.png)
