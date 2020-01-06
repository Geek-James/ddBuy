import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'
import state from '../store/state';

// 懒加载二级组件 Tarbar
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Eat = () => import('../views/eat/Eat.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Mine = () => import('../views/mine/Mine.vue');

// 地图
const Map = () => import('../views/home/components/map/Map.vue');

// 解决多次点击重复路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// Mine的子组件 用户中心
const UserCenter = () => import('../views/mine/Children/UserCenter.vue');
// 修改用户昵称
const ChangeNickName = () => import('../views/mine/Children/ChangeNickName.vue');
// 优惠券
const CouponList = () => import('../views/mine/Children/CouponList.vue')
// 绿卡会员
const MyVip = () => import('../views/mine/Children/MyVip.vue')
// 会员支付
const VipPay = () => import('../views/mine/Children/MyVipChildren/VipPay.vue')
// 我的订单
const MyOrder = () => import('../views/mine/Children/MyOrder');
// 订单商品详情页
const OrderGoodsList = () => import('../views/order/children/OrderGoodsList')
// 商品详情页
const GoodsDetail = () => import('../components/goodsDetail/GoodsDetail.vue');
// 语言切换
const SwitchLanguage = () => import('../views/mine/Children/SwitchLanguage.vue');

// 加载订单相关的组件
const Order = () => import('../views/order/Order.vue');
const MyAddress = () => import('../views/order/children/MyAddress.vue');
const AddAddress = () => import('../views/order/children/children/AddAddress.vue');
const EditAddress = () => import('../views/order/children/children/EditAddress.vue');

// 注册登录
const Login = () => import('../views/login/Login.vue');
Vue.use(Router)

const router = new Router({
    // 解决路由跳转页面没有置顶
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    // !!注意: 二级路由不需要加 '/'
    routes: [{
            path: '/',
            redirect: '/dashboard',
            // 是否数据缓存
            meta: {
                keepAlive: true
            },
        }, {
            // 根页面 
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [{
                path: '/dashboard',
                redirect: '/dashboard/home',
                // 是否数据缓存
                meta: {
                    keepAlive: true
                },
            }, {
                // 主页
                path: 'home',
                name: 'home',
                component: Home,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                }
            }, {
                // 分类
                path: 'category',
                name: 'category',
                component: Category,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                },
            }, {
                // 吃什么
                path: 'eat',
                name: 'eat',
                component: Eat,
                // 是否数据缓存
                meta: {
                    keepAlive: true
                }
            }, {
                // 购物车
                path: 'cart',
                name: 'cart',
                component: Cart,
                meta: {
                    keepAlive: true
                }
            }, {
                // 我的
                path: 'mine',
                name: 'mine',
                component: Mine,
                children: [{
                    // 用户中心
                    path: 'userCenter',
                    name: 'userCenter',
                    component: UserCenter,
                    children: [{
                        // 修改昵称
                        path: 'changeNickName',
                        name: 'ChangeNickName',
                        component: ChangeNickName
                    }]
                }, {
                    // 优惠券
                    path: 'couponList',
                    name: 'couponList',
                    component: CouponList,
                    meta: {
                        requireAuth: true
                    }
                }, {
                    // 我的订单
                    path: 'myOrder',
                    name: 'myOrder',
                    component: MyOrder,
                    meta: {
                        requireAuth: true
                    }
                }, {
                    // 绿卡会员
                    path: 'myVip',
                    name: 'myVip',
                    component: MyVip,
                    // 是否数据缓存
                    meta: {
                        keepAlive: true,
                        requireAuth: true,
                    }
                }, {
                    path: '/vipPay',
                    name: 'vipPay',
                    component: VipPay
                }, {
                    path: 'switchLanguage',
                    name: 'switchLanguage',
                    component: SwitchLanguage
                }]
            }, {
                // 商品详情
                path: '/goodsDetail',
                name: 'goodsDetail',
                component: GoodsDetail
            }, {
                path: 'map',
                name: 'map',
                component: Map,
            }]
        },
        {
            // 订单
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                // 我的地址
                path: 'myAddress',
                name: 'myAddress',
                component: MyAddress,
                meta: {
                    requireAuth: true
                },
                children: [{
                    // 添加地址
                    path: 'addAddress',
                    name: 'addAddress',
                    component: AddAddress,
                }, {
                    // 编辑地址
                    path: 'editAddress',
                    name: 'editAddress',
                    component: EditAddress
                }]
            }, {
                path: 'orderGoodsList',
                name: 'orderGoodsList',
                component: OrderGoodsList
            }]
        },
        {
            // 登录
            path: '/Login',
            name: 'login',
            component: Login
        }
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (state.userInfo.token) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})

export default router