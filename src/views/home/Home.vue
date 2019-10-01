<template>
  <div id="home">
    <div v-if="!isShowLoading">
      <!-- 头部地理位置和搜索框 -->
      <Header></Header>
      <!-- 轮播图 -->
      <Sowing :sowing_list="sowing_list"></Sowing>
      <!-- tip -->
      <Tip></Tip>
      <!-- Nav -->
      <Nav :nav_list="nav_list"></Nav>
      <!-- 限时抢购 -->
      <FlashBuy :flash_sale_product_list="flash_sale_product_list"></FlashBuy>
      <!-- 特色专区 -->
      <SpecialZone></SpecialZone>
      <!-- TabbarItem 商品 -->
      <TabbarGoodsItem :tabbar_all_product_list="tabbar_all_product_list"
                       :flash_sale_product_list="flash_sale_product_list"></TabbarGoodsItem>
      <!-- <div>我是有底线的</div>-->
      <van-divider>我是有底线的</van-divider>
    </div>
    <van-loading v-else
                 size="24px "
                 class="loading">数据拼命加载中...</van-loading>
    <!-- 回到顶部按钮 -->
    <BackTop v-show="showBackToTop"
             v-on:scrollToTop="scrollToTop"></BackTop>

  </div>
</template>

<script type="text/javascript">

import { getHomeData } from './../../serve/api/index.js'
import { showBackIcon, animate } from './../../config/global.js'

import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'
import TabbarGoodsItem from './components/tabbar/TabbarGoodsItem'
import BackTop from '../../components/backToTop/BackTop'

export default {
  name: 'Home',
  created () {
    getHomeData().then(response => {
      if (response.success) {
        // 给轮播组件 sowing_list赋值 
        this.sowing_list = response.data.list[0].icon_list;
        this.nav_list = response.data.list[2].icon_list;
        this.flash_sale_product_list = response.data.list[3].product_list;
        this.tabbar_all_product_list = response.data.list[12].product_list;
        // 数据加载完成后不显示加载中..
        this.isShowLoading = false;

        // 是否显示回到顶部图标
        showBackIcon((status) => {
          this.showBackToTop = status;
        })
      }
    }).catch(error => {
      console.log(error);

    });
  },
  data () {
    return {
      // 首页轮播图数据
      sowing_list: [],
      isShowLoading: true,
      nav_list: [],
      flash_sale_product_list: [],
      showBackToTop: false,
      tabbar_all_product_list: []
    }
  },
  components: {
    Header,
    Sowing,
    Tip,
    Nav,
    FlashBuy,
    BackTop,
    SpecialZone,
    TabbarGoodsItem
  },
  methods: {
    scrollToTop () {
      let documentBody = document.documentElement || document.body;
      // 做缓动动画
      animate(documentBody, { scrollTop: '0' }, 400, 'ease-out');
    }
  }
}
</script>

<style scoped>
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
}
.loading {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%);
}
</style>