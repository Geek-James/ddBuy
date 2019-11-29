<div align="center">
<img src="http://518taole.7-orange.cn/geek3.png" width = "100" height = "100" div align=center />
</div>
<p align="center">
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

[简体中文](https://github.com/Geek-James/ddBuy/blob/master/README.md) | English

## Summary

**DDBuy** is an open source mobile e-commerce project,it's  build on [vue 2.x](https://github.com/vuejs/vue) and [vant 2.x](https://youzan.github.io/vant/#/zh-CN/intro).Use the latest Vue series technology and some excellent open source libraries,suce as [better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/api.html)、 [moment.js](https://github.com/moment/moment/)、[twix.js](https://github.com/icambron/twix.js)、[pubsub-js](https://github.com/mroderick/PubSubJS),background data is built through [Easy-Mock](https://github.com/easy-mock/easy-mock). I believe that this project can help you no matter what stage.

**If you find any problems，please commit [issue](https://github.com/Geek-James/ddBuy/issues).**

## [Release Note](https://github.com/Geek-James/ddBuy/releases)

Author: **[Geek-James](https://juejin.im/user/5c4ebc72e51d4511dc7306ce)**

I will often share some technical knowledge and hope to learn and improve together,you can add my [Wechat:szfter](http://518taole.7-orange.cn/myWechat) or add my [WeChat Public Number:前端甜甜圈](http://518taole.7-orange.cn/wechat.jpg)

## Preamble Preparation

>If you are new Vue engineer,highly recommended that you read [Vue Offical Documents](https://cn.vuejs.org/),If you already grasp Vue,so I strongly recommend that you code follow [Vue Code Style Guide](https://cn.vuejs.org/v2/style-guide/).

You need to install [node](http://nodejs.org/) and  [git](https://git-scm.com/) locally.This project base on [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) and [vant-ui](https://youzan.github.io/vant/#/zh-CN/intro)，all of request data is base on [Easy Mock](https://github.com/easy-mock/easy-mock)，learning and understanding this knowledge in advance will help you a lot.

At the same time,a series of basic tutorial articles of Vue are provided. 

Later,the whole project will be divided into several technical points and shared.

- **Dismantling of core technologies:**
   - [Animation of items flying into shopping cart](https://juejin.im/post/5dd55fd2f265da47dd1af944?utm_source=gold_browser_extension)
   - [Log in to register](https://juejin.im/post/5dafc91a6fb9a04e4047a713)

- **The series of basic Vue blog**:
    - [The series of basic Vue(一) What the vue?](https://juejin.im/post/5d64f31ae51d4561db5e3a74)
    - [The series of basic Vue(二) Vue instructions](https://juejin.im/post/5d652fb351882505a87a976b)
    - [The series of basic Vue(三) Vue life cycle
](https://juejin.im/post/5d6675716fb9a06b10273c1c)
    - [The series of basic Vue(四) Custom instruction
](https://juejin.im/post/5d673ad7f265da03934bf266)
    - [The series of basic Vue(五) Components
](https://juejin.im/post/5d67eac7e51d453c12504e3a)
    - [The series of basic Vue(六) Component communication
](https://juejin.im/post/5d699e2b6fb9a06ae3727746)
    - [The series of basic Vue(七) Vue Router
](https://juejin.im/post/5d6e6f366fb9a06b32609021)
    - [The series of basic Vue(八) Vuex](https://juejin.im/post/5d6f5801f265da03da24b365)

**Welcome find bug and if you have new ideas and suggestions,glad to you commit issue and pull request.**

## Project Image
[Project Struction Tree](https://github.com/Geek-James/ddBuy/blob/master/README.structure.md)

![image](http://518taole.7-orange.cn/homePage.jpg)

![image](http://518taole.7-orange.cn/categorytwo.jpg)

![image](http://518taole.7-orange.cn/myOrder.jpg)

## How to run

```bash
# clone project to local
git clone https://github.com/Geek-James/ddBuy.git

# go to project catalog
cd ddbuy

# install node package
npm install

# run serve
npm run serve

Browser access http://localhost:8080
```

## Release

```bash
# Build production environment
npm run build
```

## Online Browser preview

[Please adjust the browser to mobile mode](http://ddbuy.7-orange.cn)

## Mobile scanning Preview
![](http://518taole.7-orange.cn/qrcode.gif)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## Disclaimer
This project is a high immitation project,only for technical exchange and learning,not official App,commercial use not recommended,the legal liability for infringement of all works arising is irrelevant to the author.
## License

[MIT](https://github.com/Geek-James/ddBuy/blob/master/LICENSE)

Copyright (c) 2019 Geek-James
