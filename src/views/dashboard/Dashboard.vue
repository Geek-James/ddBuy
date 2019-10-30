/**
 * @Author: 极客James  
 * @Date: 2019-10-1 11:44:08 
 * @Last Modified by: 极客James 
 * @Last Modified time: 2019-10-30 11:53:10
 * @GitHub https://github.com/Geek-James
 * @掘金 https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @描述 项目根入口
 */
<template>
  <div id="dashboard">
    <van-tabbar v-model="active"
                class="active_tab"
                active-color="#75a342">
      <van-tabbar-item v-for="(item,index) in tabbars"
                       :key="index"
                       @click="tab(index,item.name)"
                       :info="item.name=='Cart'?goodsNum:''">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon"
                  slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 是否缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition name="router-slider"
                mode="out-in">
      <router-view v-if="$route.name === 'login'">
      </router-view>
    </transition>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="text/javascript">

import { setStore } from '../../config/global.js'
import { setLocalStore, getLocalStore } from '../../config/global.js'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: "DashBoard",
  data () {
    return {
      currIndex: 0,
      active: Number(getLocalStore('tatbarActive')) || 0,
      tabbars: [
        {
          name: "Home",
          title: "首页",
          normal: require("@/images/tabbar/home_default.png"),
          active: require("@/images/tabbar/home_selected.png")
        },
        {
          name: "Category",
          title: "分类",
          normal: require("@/images/tabbar/category_default.png"),
          active: require("@/images/tabbar/category_selected.png")
        },
        {
          name: "Eat",
          title: "吃什么",
          normal: require("@/images/tabbar/eat_default.png"),
          active: require("@/images/tabbar/eat_selected.png"),
        },
        {
          name: "Cart",
          title: "购物车",
          normal: require("@/images/tabbar/shoppingcart_default.png"),
          active: require("@/images/tabbar/shoppingcart_selected.png"),
          num: 5
        },
        {
          name: "Mine",
          title: "我的",
          normal: require("@/images/tabbar/mine_default.png"),
          active: require("@/images/tabbar/mine_selected.png")
        }
      ]
    };
  },
  components: {
  },
  mounted () {
    this._initData();
  },
  watch: {
    active (val) {
      sessionStorage.setItem('tabbarActive', val);
    }
  },
  computed: {
    ...mapState(['shopCart'], ['userInfo']),
    goodsNum () {
      let num = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num;
      });
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    // ...mapActions(['autoLogin']),
    // 1.点击tabbar触发的方法
    tab (index, val) {
      this.currIndex = index;
      this.$router.push(val);
      // 将索引保存到本地
      setLocalStore('tatbarActive', index);
    },
    // 2.初始化购物车数据
    _initData () {
      this.INIT_SHOP_CART();
      this.INIT_USER_INFO();
    }
  }
}
</script>

<style lang="less" scoped>
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
