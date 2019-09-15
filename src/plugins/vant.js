import Vue from 'vue'
// 1.Tabbar
import {
    Tabbar,
    TabbarItem
} from 'vant';
Vue.use(Tabbar).use(TabbarItem);

// 2.loading组件
import {
    Loading
} from 'vant';
Vue.use(Loading);

// 3.栅栏格子 
import {
    Grid,
    GridItem
} from 'vant';
Vue.use(Grid).use(GridItem);

// 4.倒计时
import {
    CountDown
} from 'vant';
Vue.use(CountDown);