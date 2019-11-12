## 项目核心架构结构
```
├── Easy-Mock-API.zip                     // 后端Mock数据
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components                      // 公共组件
│   │   ├── backToTop                   // 回到顶部组件
│   │   │   └── ToTop.vue
│   │   ├── horizontalScroll            // 水平滑动组件
│   │   │   └── HorizontalScroll.vue
│   │   └── loading                     // 加载动画
│   │       ├── Loading.vue
│   │       └── LoadingGif.vue
│   ├── config                          // 配置文件
│   │   ├── area.js                     
│   │   ├── bus.js                      
│   │   ├── filter.js                   
│   │   ├── global.js                   
│   │   ├── pubsub_type.js              
│   │   └── rem.js
│   ├── main.js                         // 项目主入口
│   ├── plugins                         // 第三方插件
│   │   └── vant.js                     // vant ui
│   ├── router                          // 路由
│   │   └── router.js
│   ├── serve                           // 服务端数据封装
│   │   └── api
│   │       ├── ajax.js
│   │       └── index.js
│   ├── store                           // vuex
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── mutation-type.js
│   │   ├── mutations.js
│   │   ├── state.js
│   │   └── store.js
│   └── views                           
│       ├── cart                        // 购物车
│       │   └── Cart.vue
│       ├── category                    // 分类
│       │   ├── Category.vue
│       │   └── components
│       │       ├── ContentView.vue         // 内容
│       │       ├── DropMenu.vue            // 下拉菜单
│       │       └── SearchHead.vue          // 搜索
│       ├── dashboard                   // 项目UI主入口
│       │   ├── Dashboard.vue
│       │   └── components
│       ├── eat                         // 吃什么
│       │   ├── Eat.vue
│       │   └── components      
│       │       ├── MenuCategoryLists.vue       //吃什么标题
│       │       ├── MenuWaterFall.vue           // 页面瀑布流
│       │       ├── Search.vue                  // 搜索
│       │       └── TodayMenu.vue               // 今日菜单
│       ├── home                        // 首页
│       │   ├── Home.vue
│       │   └── components
│       │       ├── flash
│       │       │   ├── FlashBuy.vue        // 限时抢购
│       │       │   └── FlashFood.vue       // 限时抢购商品
│       │       ├── header
│       │       │   └── Header.vue              
│       │       ├── myVip
│       │       │   └── VipTip.vue              // vip
│       │       ├── nav
│       │       │   └── Nav.vue                 // nav
│       │       ├── sowing
│       │       │   └── Sowing.vue              // 轮播图
│       │       ├── special
│       │       │   └── SpecialZone.vue         // 特色专区
│       │       ├── tabbar
│       │       │   ├── ProduceItem.vue         // 商品列表
│       │       │   └── TabbarGoodsItem.vue     
│       │       └── tip
│       │           └── Tip.vue
│       ├── login                       // 登录
│       │   └── Login.vue
│       ├── mine                        // 我的
│       │   ├── Children
│       │   │   ├── ChangeNickName.vue  // 修改昵称
│       │   │   ├── CouponList.vue      // 我的优惠券
│       │   │   ├── MyOrder.vue         // 我的订单
│       │   │   ├── MyOrderChildren     
│       │   │   │   ├── AfterSale.vue   // 售后
│       │   │   │   └── OrderType.vue   // 订单类型
│       │   │   ├── MyVip.vue
│       │   │   ├── MyVipChildren
│       │   │   │   ├── VipGoodsItems.vue   // vip商品列表
│       │   │   │   ├── VipMenuTitleScroll.vue // vip商品分类标题
│       │   │   │   └── VipPay.vue              // 支付
│       │   │   └── UserCenter.vue          // 用户中心
│       │   └── Mine.vue                    // 我的
│       └── order
│           ├── Order.vue                   // 订单
│           └── children
│               ├── MyAddress.vue           // 我的地址
│               ├── OrderGoodsList.vue      // 订单商品列表
│               ├── TimeIntervalList.vue    // 送达时间列表
│               └── children
│                   ├── AddAddress.vue      // 添加地址
│                   └── EditAddress.vue     // 编辑地址
└── vue.config.js
```