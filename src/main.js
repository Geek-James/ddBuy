/*
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 17:32:25
 * @Description: 项目主入口
 * @FilePath: /ddBuy/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import FastClick from 'fastclick'
import VTop from './components/backToTop/ToTop.vue'

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
// 注册为全局组件
Vue.component('v-top', VTop);

// 瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

Vue.config.productionTip = false

// 全局引入UI库 vant
import '@/plugins/vant'
// 全局引入rem
import '@/config/rem'
// 全局引入 Reset-css
import 'reset-css'
//  全局引入 过滤器
import '@/config/filter'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')