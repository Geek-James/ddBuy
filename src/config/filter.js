import Vue from 'vue'

// 金钱过滤 ¥xx.xx
Vue.filter('moneyFormart', (value) => {
    return '¥' + Number(value).toFixed(2);
})