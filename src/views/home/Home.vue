<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 22:59:24
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
    <v-top></v-top>
  </div>

</template>

<script type="text/javascript">

import { getHomeData } from './../../serve/api/index.js'
import { showBackIcon, animate } from './../../config/global.js'

// 引入Vuex
import { mapMutations, mapState } from 'vuex'
// 引入vant组件
import { Toast } from 'vant'

// 引入中央数据总线
import Bus from '../../config/bus'

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
import Loading from '../../components/loading/LoadingGif'

export default {
  created () {
  },
  computed: {
    ...mapState(['userInfo']),
  },
  mounted () {
    // 0.数据初始化
    this._initData();
    // 通过中心事件总线触发加入购物车事件
    Bus.$on('addToCart', (goods) => {
      this.addToCart(goods);
    })
  },
  data () {
    return {
      sowing_list: [],              // 首页轮播图数据
      isShowLoading: true,          // 是否加载动画    
      nav_list: [],
      flash_sale_product_list: [],  // 限时抢购  
      tabbar_all_product_list: [],
      specialZone: {}                // 特色专区数据
    }
  },
  components: {
    Header,
    Sowing,
    Tip,
    Nav,
    VipTip,
    FlashBuy,
    SpecialZone,
    TabbarGoodsItem,
    Loading,
  },
  methods: {
    // Vuex中的方法
    ...mapMutations(['ADD_GOODS']),
    // 数据初始化
    _initData () {
      getHomeData().then(response => {
        if (response.success) {
          // 给轮播组件 sowing_list赋值 
          this.sowing_list = response.data.list[0].icon_list;
          this.nav_list = response.data.list[2].icon_list;
          this.flash_sale_product_list = response.data.list[3].product_list;
          this.tabbar_all_product_list = response.data.list[12].product_list;
          this.isShowLoading = false
          // 给特色专区赋值
          this.specialZone = response.data.special_zone;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    // 添加到购物车
    addToCart (goods) {
      // 1.1 判断是否有用户登录
      if (this.userInfo.token) {
        Toast({
          message: '已加入购物车',
          duration: 800
        });
        // 1.2 添加数据
        this.ADD_GOODS({
          goodsID: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        });
      } else {
        // 1.3 如何没有登录跳转到登录界面
        this.$router.push('/login');
      }
    }
  },
  beforeDestroy () {
    // 手动销毁 $on 事件，防止多次触发
    Bus.$off('addToCart', this.someBusMessage);
  }
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