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

// 5.图片懒加载
import {
    Lazyload
} from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

// 6.Tabbar 标签栏
import {
    Tab,
    Tabs
} from 'vant';
Vue.use(Tab).use(Tabs);

// 7.分割线
import {
    Divider
} from 'vant';
Vue.use(Divider);

// 8.轻弹窗
import {
    Toast
} from 'vant';
Vue.use(Toast);

// 9.导航栏
import {
    NavBar
} from 'vant';
Vue.use(NavBar);

// 10.提交订单
import {
    SubmitBar
} from 'vant';
Vue.use(SubmitBar);

// 11.复选框
import {
    Checkbox,
    CheckboxGroup
} from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);