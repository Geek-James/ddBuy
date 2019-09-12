import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import FastClick from 'fastclick'

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
Vue.config.productionTip = false

// 全局引入UI库 vant
import '../src/plugins/vant'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')