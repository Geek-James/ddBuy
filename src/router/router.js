import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Dashboard from '../views/dashboard/Dashboard.vue'

// 懒加载二级组件
const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Eat = () => import('../views/eat/Eat.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Mine = () => import('../views/mine/Mine.vue')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/dashboard'
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [{
            path: '/dashboard',
            redirect: '/dashboard/home'
        }, {
            path: 'home',
            name: 'home',
            component: Home,
            // 是否数据缓存
            meta: {
                keepAlive: true
            }
        }, {
            path: 'category',
            name: 'category',
            component: Category
        }, {
            path: 'eat',
            name: 'eat',
            component: Eat
        }, {
            path: 'cart',
            name: 'cart',
            component: Cart
        }, {
            path: 'mine',
            name: 'mine',
            component: Mine
        }]
    }, ]
})