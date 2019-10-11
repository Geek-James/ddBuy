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
    <div class="cartWrapper">
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
      <div class="contentWrapper"
           v-else>
        <div class="contentWrapperList"
             v-for="(goods,index) in shopCart"
             :key="goods.id">
          <section>
            <div class="shopCartListCon">
              <div class="left">
                <a href="javaScript:;"
                   class="cartCheckBox"
                   :checked="goods.checked"></a>
              </div>
              <div class="center">
                <img :src="goods.smallImage">
              </div>
              <div class="right">
                <a>{{goods.name}}</a>
                <div class="bottomContent">
                  <p class="shopPrice"> {{goods.price | moneyFormat}}</p>
                  <div class="shopDeal">
                    <span @click="reduceGoods(goods.id,goods.num)">-</span>
                    <input type="number"
                           disabled
                           v-model="goods.num">
                    <span @click="addGoods(goods.id,goods.name,
        goods.smallImage,goods.price)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
// 引入组件
import ProduceItem from './../home/components/tabbar/ProduceItem'
import { getGuessYouLike } from './../../serve/api/index.js'
import Loading from '../../components/loading/LoadingGif'
// 引入Vuex
import { mapMutations, mapState } from 'vuex'
import { getLocalStore } from '../../config/global';
// 引入提示框
import { Dialog } from 'vant';
export default {
  data () {
    return {
      youLike_product_lists: [],
      isShowLoading: false,
      checkedAll: false,
      isEmptyCart: false,
    }
  },
  components: {
    ProduceItem,
    Loading
  },
  computed: {
    ...mapState(['shopCart']),
  },
  mounted () {
    this._initData();
  },
  methods: {
    // 0.延展mutations中的方法
    ...mapMutations(['ADD_GOODS', 'REDUCE_GOODS']),
    // 1.右上角删除
    clearCart () {
      alert('删除所有');
    },
    // 2.数据加载
    async _initData () {
      let ref = await getGuessYouLike();
      if (ref.success) {
        this.youLike_product_lists = ref.data.product_list;
        this.isShowLoading = false;
      }
    },
    // 3.减少商品数量
    reduceGoods (goodsID, goodsNum) {
      if (goodsNum > 1) {
        // 3.1 通过goodsID减少商品
        this.REDUCE_GOODS({
          goodsID
        });
      } else if (goodsNum === 1) {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定删除该商品吗?'
        }).then(() => {
          // on confirm 确认删除
          this.REDUCE_GOODS({ goodsID });
        }).catch(() => {
          // on cancel
        });
      }
    },
    // 4.增加商品数量 保证传递数据和mutations一致
    addGoods (goodsID, goodsName, goodsSmallImage, goodsPrice) {
      this.ADD_GOODS({
        goodsID,
        goodsName,
        goodsSmallImage,
        goodsPrice
      });
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
      bottom: 2.8rem;
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
    .contentWrapper {
      padding-top: 0.5rem;
      section {
        background-color: #ffffff;
        .shopCartListCon {
          display: flex;
          height: 6rem;
          border-bottom: 0.01rem solid #e0e0e0;
          margin-bottom: 0.7rem;
          padding: 0.5rem 0;
          justify-content: center;
          align-items: center;
          .left {
            flex: 1;
            display: flex;
            a {
              display: inline-block;
              margin-top: 0.8rem;
              margin-left: 0.5rem;
            }
            .cartCheckBox {
              background: url("./../../images/cart/shop-icon.png") no-repeat;
              background-size: 2.5rem 5rem;
              width: 1rem;
              height: 1rem;
            }
            .cartCheckBox[checked] {
              background-position: -1.2rem 0;
            }
          }
          .center {
            flex: 3;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .right {
            flex: 6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            position: relative;
            a {
              height: 2.2rem;
              line-height: 1.2rem;
              overflow: hidden;
              margin-bottom: 0.3rem;
              font-size: 0.8rem;
              color: #000;
            }
          }
        }
        .bottomContent {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .shopPrice {
            font-size: 0.8rem;
          }
          .shopDeal span {
            display: inline-block;
            width: 1rem;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
            float: left;
          }
          .shopDeal input {
            float: left;
            width: 2rem;
            height: 1.2rem;
            text-align: center;
            margin: 0 0.2rem;
            font-size: 0.8rem;
            background-color: #f5f5f5;
            border: 0;
          }
        }
      }
    }
  }
}
</style>
