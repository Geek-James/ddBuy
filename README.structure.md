## 项目核心架构结构
```
.
├── Easy-Mock-API.zip
├── LICENSE
├── README.en.md
├── README.md
├── README.structure.md
├── babel.config.js
├── dist.zip
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── SvgIcon
│   │   │   └── index.vue
│   │   ├── backToTop
│   │   │   └── ToTop.vue
│   │   ├── goodsDetail
│   │   │   └── GoodsDetail.vue
│   │   ├── horizontalScroll
│   │   │   └── HorizontalScroll.vue
│   │   └── loading
│   │       ├── Loading.vue
│   │       └── LoadingGif.vue
│   ├── config
│   │   ├── area.js
│   │   ├── filter.js
│   │   ├── global.js
│   │   ├── pubsub_type.js
│   │   └── rem.js
│   ├── i18n
│   │   ├── en.js
│   │   ├── index.js
│   │   └── zh.js
│   ├── icons
│   │   ├── index.js
│   │   └── svg
│   │       ├── QQ.svg
│   │       ├── backtotop.svg
│   │       ├── car.svg
│   │       ├── car_disable.svg
│   │       ├── collection.svg
│   │       ├── down.svg
│   │       ├── loading.svg
│   │       ├── search.svg
│   │       ├── share.svg
│   │       ├── up.svg
│   │       ├── up_real.svg
│   │       ├── vip.svg
│   │       └── wechat.svg
│   ├── images
│   │   ├── cart
│   │   │   ├── empty.png
│   │   │   └── shop-icon.png
│   │   ├── home
│   │   │   └── backImage.png
│   │   ├── icon
│   │   │   ├── money.png
│   │   │   ├── seal.png
│   │   │   └── transport.png
│   │   ├── loading
│   │   │   ├── icon_loading.png
│   │   │   ├── loadGif.gif
│   │   │   ├── loadGif2.gif
│   │   │   └── loadGif3.gif
│   │   ├── login
│   │   │   ├── back.jpg
│   │   │   ├── back2.jpg
│   │   │   ├── blindfold.png
│   │   │   ├── greeting.png
│   │   │   ├── grey.jpg
│   │   │   ├── normal.png
│   │   │   ├── qq.png
│   │   │   ├── qq.svg
│   │   │   └── wx.png
│   │   ├── mine
│   │   │   ├── defaultImg.jpeg
│   │   │   ├── female.png
│   │   │   ├── male.png
│   │   │   ├── noData.jpeg
│   │   │   ├── rockets.png
│   │   │   └── vip.png
│   │   ├── order
│   │   │   ├── hb.png
│   │   │   ├── noAddress.png
│   │   │   ├── wx.png
│   │   │   └── zfb.png
│   │   ├── placeholderImg
│   │   │   └── product-img-load.png
│   │   ├── special
│   │   │   ├── hotItem1.webp
│   │   │   ├── hotItem2.webp
│   │   │   ├── newItem1.webp
│   │   │   ├── newItem2.webp
│   │   │   ├── peanut.jpeg
│   │   │   ├── vipItem1.webp
│   │   │   └── vipItem2.webp
│   │   └── tabbar
│   │       ├── category_default.png
│   │       ├── category_selected.png
│   │       ├── eat_default.png
│   │       ├── eat_selected.png
│   │       ├── eats_default.png
│   │       ├── home_default.png
│   │       ├── home_selected.png
│   │       ├── mine_default.png
│   │       ├── mine_selected.png
│   │       ├── shoppingcart_default.png
│   │       └── shoppingcart_selected.png
│   ├── main.js
│   ├── plugins
│   │   └── vant.js
│   ├── router
│   │   └── router.js
│   ├── serve
│   │   └── api
│   │       ├── ajax.js
│   │       └── index.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── mutation-type.js
│   │   ├── mutations.js
│   │   ├── state.js
│   │   └── store.js
│   └── views
│       ├── cart
│       │   └── Cart.vue
│       ├── category
│       │   ├── Category.vue
│       │   └── components
│       │       ├── ContentView.vue
│       │       ├── DropMenu.vue
│       │       └── SearchHead.vue
│       ├── dashboard
│       │   └── Dashboard.vue
│       ├── eat
│       │   ├── Eat.vue
│       │   └── components
│       │       ├── MenuCategoryLists.vue
│       │       ├── MenuWaterFall.vue
│       │       ├── Search.vue
│       │       └── TodayMenu.vue
│       ├── home
│       │   ├── Home.vue
│       │   └── components
│       │       ├── flash
│       │       │   ├── FlashBuy.vue
│       │       │   └── FlashFood.vue
│       │       ├── header
│       │       │   └── Header.vue
│       │       ├── map
│       │       │   └── Map.vue
│       │       ├── myVip
│       │       │   └── VipTip.vue
│       │       ├── nav
│       │       │   └── Nav.vue
│       │       ├── sowing
│       │       │   └── Sowing.vue
│       │       ├── special
│       │       │   └── SpecialZone.vue
│       │       ├── tabbar
│       │       │   ├── ProduceItem.vue
│       │       │   └── TabbarGoodsItem.vue
│       │       └── tip
│       │           └── Tip.vue
│       ├── login
│       │   └── Login.vue
│       ├── mine
│       │   ├── Children
│       │   │   ├── ChangeNickName.vue
│       │   │   ├── CouponList.vue
│       │   │   ├── MyOrder.vue
│       │   │   ├── MyOrderChildren
│       │   │   │   ├── AfterSale.vue
│       │   │   │   └── OrderType.vue
│       │   │   ├── MyVip.vue
│       │   │   ├── MyVipChildren
│       │   │   │   ├── VipGoodsItems.vue
│       │   │   │   ├── VipMenuTitleScroll.vue
│       │   │   │   └── VipPay.vue
│       │   │   ├── SwitchLanguage.vue
│       │   │   └── UserCenter.vue
│       │   └── Mine.vue
│       └── order
│           ├── Order.vue
│           └── children
│               ├── MyAddress.vue
│               ├── OrderGoodsList.vue
│               ├── TimeIntervalList.vue
│               └── children
│                   ├── AddAddress.vue
│                   └── EditAddress.vue
├── tree.md
├── tree.txt
└── vue.config.js

55 directories, 146 files

```
