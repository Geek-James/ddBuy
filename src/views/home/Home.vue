<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 15:42:31
 * @Description: Home 首页模块
 * @FilePath: /ddBuy/src/views/home/Home.vue
 -->
<template>
  <div id="home">
    <div v-if="!isShowLoading">
      <!-- 头部地理位置和搜索框 -->
      <div class="head">
        <Header></Header>
        <!-- 轮播图 -->
        <Sowing :sowing_list="sowing_list"></Sowing>
        <!-- tip -->
        <Tip></Tip>
      </div>
      <!-- Nav -->
      <Nav :nav_list="nav_list"></Nav>
      <!-- 跳转到会员界面 -->
      <VipTip></VipTip>
      <!-- 限时抢购 -->
      <FlashBuy :flash_sale_product_list="flash_sale_product_list"></FlashBuy>
      <!-- 特色专区 -->
      <SpecialZone :specialZone="specialZone"></SpecialZone>
      <!--TabbarItem 商品 -->
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
import VipTip from './components/myVip/VipTip'
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
      sowing_list: [], // 首页轮播图数据
      isShowLoading: true,
      nav_list: [],
      flash_sale_product_list: [], // 限时抢购  
      showBackToTop: false,
      tabbar_all_product_list: [],
      // 特色专区数据
      specialZone: {}
    }
  },
  components: {
    Header,
    Sowing,
    Tip,
    Nav,
    VipTip,
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
          //   给特色专区赋值
          this.specialZone = response.data.special_zone;
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
    // 发布订阅后,记得记得销毁哦,不然会阻塞线程~
    PubSub.unsubscribe(ADD_TO_CART);
  },
}
</script>

<style lang="less" scoped>
#home {
  background-color: "#f5f5f5";
  padding-bottom: 3rem;
  .head {
    margin-top: -3rem;
    width: 100%;
    background-image: url("http://518taole.7-orange.cn/backImage.png");
  }
}
.van-divider {
  background-color: #f5f5f5;
  margin: 0;
}
</style>