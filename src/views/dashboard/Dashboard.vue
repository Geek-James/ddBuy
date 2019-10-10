<template>
  <div id="dashboard">
    <van-tabbar v-model="active"
                class="active_tab"
                active-color="#75a342">
      <van-tabbar-item v-for="(item,index) in tabbars"
                       :key="index"
                       @click="tab(index,item.name)"
                       replace>
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
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="text/javascript">

import { setStore } from '../../config/global.js'

export default {
  name: "DashBoard",
  data () {
    return {
      currIndex: 0,
      active: Number(sessionStorage.getItem('tabbarActive')) || 0,
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
          active: require("@/images/tabbar/eat_selected.png")
        },
        {
          name: "Cart",
          title: "购物车",
          normal: require("@/images/tabbar/shoppingcart_default.png"),
          active: require("@/images/tabbar/shoppingcart_selected.png")
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
  watch: {
    active (val) {
      sessionStorage.setItem('tabbarActive', val);
    }
  },
  methods: {
    tab (index, val) {
      this.currIndex = index;
      this.$router.push(val);
      sessionStorage.setItem('tabbarActive', index);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
