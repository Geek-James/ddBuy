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
      <!-- 最底部 -->
      <van-divider>我是有底线的</van-divider>
    </div>
    <!-- 数据加载提示gif -->
    <Loading :show="isShowLoading"></Loading>
    <!-- 回到顶部按钮 -->
    <BackTop v-show="showBackToTop"
             v-on:scrollToTop="scrollToTop"></BackTop>
  </div>

</template>

<script type="text/javascript">

import { getHomeData } from './../../serve/api/index.js'
import { showBackIcon, animate } from './../../config/global.js'

// 引入Vuex
import { mapMutations, mapState } from 'vuex'
// 引入vant组件
import { Toast } from 'vant'
// 引入消息发布订阅
import PubSub from 'pubsub-js'
import { ADD_TO_CART } from './../../config/pubsub_type.js'

// 引入页面组件
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'
import TabbarGoodsItem from './components/tabbar/TabbarGoodsItem'
import BackTop from '../../components/backToTop/BackTop'
import Loading from '../../components/loading/LoadingGif'

export default {

  name: 'Home',
  created () {
    this._initData();
  },
  computed: {
    ...mapState(['userInfo']),
  },
  mounted () {
    //  1.接受订阅
    PubSub.subscribe(ADD_TO_CART, (msg, goods) => {
      // 1.1 判断发布是否是'ADD_TO_CART'
      if (msg == ADD_TO_CART) {
        // 1.2 判断是否有用户登录
        if (this.userInfo.token) {
          Toast({
            message: '已加入购物车',
            duration: 800
          });
          // 1.3 添加数据
          this.ADD_GOODS({
            goodsID: goods.id,
            goodsName: goods.name,
            smallImage: goods.small_image,
            goodsPrice: goods.price
          });
        } else {
          // 1.4 如何没有登录跳转到登录界面
          this.$router.push('/login');
        }
      }
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
      tabbar_all_product_list: [],
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
    TabbarGoodsItem,
    Loading
  },
  methods: {
    // Vuex中的方法ADD_GOODS
    ...mapMutations(['ADD_GOODS']),
    scrollToTop () {
      let documentBody = document.documentElement || document.body;
      // 做缓动动画
      animate(documentBody, { scrollTop: '0' }, 400, 'ease-out');
    },
    _initData () {
      getHomeData().then(response => {
        if (response.success) {
          // 给轮播组件 sowing_list赋值 
          this.sowing_list = response.data.list[0].icon_list;
          this.nav_list = response.data.list[2].icon_list;
          this.flash_sale_product_list = response.data.list[3].product_list;
          this.tabbar_all_product_list = response.data.list[12].product_list;
          this.isShowLoading = false

          // 是否显示回到顶部图标
          showBackIcon((status) => {
            this.showBackToTop = status;
          })
        }
      }).catch(error => {
        console.log(error);
      });
    }
  },
  beforeDestroy () {
    // 清除发布订阅,记得清除哦,不然会阻塞线程~
    PubSub.unsubscribe(ADD_TO_CART);
  },
}
</script>

<style  scoped>
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
}
.van-divider {
  background-color: #f5f5f5;
  margin: 0;
}
</style>