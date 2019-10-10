<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <!--头部区域-->
    <header class="titleWrapper">
      <h4><strong>购物车</strong></h4>
      <div class="clearCart"
           @click="clearCart">删除</div>
    </header>

    <!-- 购物车没有商品 -->
    <div class="cartWrapper"
         v-if="!isShowLoading">
      <!-- 购物车为空 -->
      <div class="emptyCart"
           v-if="isEmptyCart">
        <img src="./../../images/cart/empty.png"
             alt="">
        <div class="title">购物车空空滴~</div>
        <router-link to="/dashboard/home"
                     class="goHome">去逛逛</router-link>
      </div>
      <!-- 购物车有数据 -->
      <div class="cartList"
           v-else>
        <!-- 提交订单 -->
        <van-submit-bar :price="3050"
                        button-text="提交订单">
          <van-checkbox v-model="checkedAll">全选</van-checkbox>
        </van-submit-bar>
      </div>

      <!-- 猜你喜欢 -->
      <van-divider :style="{ color: 'black', borderColor: 'grey', padding: '0 16px' }">
        猜你喜欢
      </van-divider>
      <produceItem :product_lists="youLike_product_lists"></produceItem>
    </div>
    <Loading :show="isShowLoading"></Loading>
  </div>
</template>

<script type="text/javascript">

import ProduceItem from './../home/components/tabbar/ProduceItem'
import { getGuessYouLike } from './../../serve/api/index.js'
import Loading from '../../components/loading/LoadingGif'

export default {
  data () {
    return {
      youLike_product_lists: [],
      isShowLoading: true,
      checkedAll: false,
      isEmptyCart: true
    }
  },
  components: {
    ProduceItem,
    Loading
  },
  mounted () {
    this._initData();
  },
  methods: {
    clearCart () {
      alert('删除所有');
    },
    async _initData () {
      let ref = await getGuessYouLike();
      if (ref.success) {
        this.youLike_product_lists = ref.data.product_list;
        this.isShowLoading = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .titleWrapper {
    width: 100%;
    height: 2.6rem;
    background: #fff;
    -webkit-background-size: 0.1rem 4.4rem;
    background-size: 0.1rem 4.4rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .titleWrapper .clearCart {
    position: absolute;
    right: 0.3rem;
    color: #45c763;
    font-size: 0.8rem;
  }
  .cartWrapper {
    width: 100%;
    height: 100rem;
    margin-top: 2.6rem;
    .van-submit-bar {
      bottom: 2.6rem;
    }
    .emptyCart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        padding-top: 2rem;
        width: 50%;
        height: 8rem;
        margin: 0 auto;
      }
      .title {
        text-align: center;
        padding: 0.5rem;
      }
      .goHome {
        margin-top: 2rem;
        color: white;
        background-color: #45c763;
        text-align: center;
        margin: 0 auto;
        padding: 0.5rem;
        width: 5rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>
