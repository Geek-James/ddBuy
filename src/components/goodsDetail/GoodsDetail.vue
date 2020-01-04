<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-04 15:32:56
 * @Description: 商品详情页 由于是Mock数据->通过上级页面通过路由的query传值 
 * @supplement   企业开发,只需要拿到商品的id然后请求获取数据
 * @FilePath: /ddBuy-dev/src/components/goodsDetail/GoodsDetail.vue
 -->

<template>
  <div id="goodsDetail">
    <van-nav-bar :title="$t('goodsDetail.goodsDetail')"
                 :fixed=true
                 left-arrow
                 @click-left="onClickLeft">
    </van-nav-bar>
    <div class="goodsDetailWrapper">
      <!-- 商品图 -->
      <div class="goodsImage">
        <img :src="goodsInfo.small_image"
             alt="">
      </div>
      <!-- 限时抢购  -->
      <div class="flash"
           v-show="goodsInfo.isFlash">
        <div class="flashLeft">
          <span>{{$t('home.limitBuy')}}</span>
          <i>{{$t('goodsDetail.shopping')}}</i>
        </div>
        <div class="flashRight">
          <span>{{$t('goodsDetail.end')}}</span>
          <!-- 倒计时 -->
          <van-count-down :time="time"
                          class="countStyle"
                          format="HH mm ss">
            <template v-slot="timeData">
              <span class="item">{{ timeData.hours }}</span>
              <i>:</i>
              <span class="item">{{ timeData.minutes }}</span>
              <i>:</i>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
      <!-- 商品名称 -->
      <div class="productInfo">
        <div class="title">{{goodsInfo.name}}</div>
        <div class="subTitle">{{goodsInfo.spec}}</div>
        <span class="originPrice">{{goodsInfo.origin_price | moneyFormat}}</span>
        <span class="price">{{goodsInfo.price}}</span>
        <span class="totalSales">{{$t('goodsDetail.sold')}}:{{goodsInfo.total_sales}}</span>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="cluster-o" />{{$t('goodsDetail.goodsTips')}}</div>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="clock-o" />{{$t('goodsDetail.quickTime')}}</div>
      </div>
      <!-- 规格 -->
      <div class="specifications">
        <div class="specificationsTitle">{{$t('goodsDetail.specifications')}} </div>
        <van-divider dashed />
        <div class="conditions">
          <span>{{$t('goodsDetail.preservationConditions')}}</span>
          <span class="conditionsOne">{{$t('goodsDetail.coldStorage')}}</span>
        </div>
        <van-divider dashed />
        <div class="conditions">
          <span>{{$t('goodsDetail.shelfLife')}}</span>
          <span class="conditionsTwo">{{$t('goodsDetail.day')}}</span>
        </div>
        <van-divider dashed />
      </div>
      <div class="showGoods">
        <img :src="goodsInfo.small_image"
             alt="">
        <img :src="goodsImage"
             alt="">
      </div>

      <!-- 底部商品导航    -->
      <van-goods-action :safe-area-inset-bottom=true
                        style="z-index:100">
        <van-goods-action-icon icon="cart-o"
                               :info="goodsNum"
                               @click="onClickCar" />
        <van-goods-action-button type="warning"
                                 :text="$t('goodsDetail.addToCar')"
                                 @click="onClickAddToCar" />
      </van-goods-action>
    </div>

    <!-- 回到顶部按钮 -->
    <v-top />
  </div>
</template>

<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'

export default {
  created () {
  },
  mounted () {
    console.log();

  },
  computed: {
  },
  data () {
    return {
      // 倒计时时间设置
      time: 30 * 60 * 1000 * 100,
      // 是否是限时抢购
      isFlash: false,
      goodsInfo: this.$route.query,
      goodsImage: 'https:\/\/img.ddimg.mobi\/3f280ff77ab3d1571213379189.jpg?width=750&height=1869'
    }
  },
  computed: {
    ...mapState(['shopCart']),
    // 购物车商品数量
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
  components: {

  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    // 返回
    onClickLeft () {
      this.$router.go(-1);
    },
    // 加入购物车
    onClickAddToCar () {
      this.ADD_TO_CART(this.goodsInfo);
    },
    // 点击了购物车
    onClickCar () {
      this.$router.push({ name: 'cart' });
    }
  }
}
</script>
<style lang="less" scoped>
#goodsDetail {
  background-color: #f5f5f5;
  .goodsDetailWrapper {
    overflow: hidden;
    margin-top: 2.7rem;
    .goodsImage {
      width: 100%;
      img {
        width: 100%;
        height: 80%;
      }
    }
    .flash {
      display: flex;
      flex: 1;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      .flashLeft {
        width: 55%;
        background-color: #e25450;
        span {
          font-size: 0.8rem;
          color: #ffffff;
          padding-left: 1rem;
        }
        i {
          padding-left: 0.6rem;
          font-size: 0.5rem;
          color: #ffffff;
        }
      }
      .flashRight {
        width: 45%;
        background-color: #fcefe9;
        height: 2rem;
        line-height: 2rem;
        padding-left: 0.5rem;
        font-size: 0.5rem;
        color: #e25450;
        .countStyle {
          display: inline;
          margin-left: 0.3rem;
          .item {
            display: inline-block;
            width: 22px;
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #e25450;
          }
          i {
            color: #e25450;
            padding-right: 0.2rem;
          }
        }
      }
    }
    .productInfo {
      background-color: white;
      padding: 0.5rem;
      .title {
        color: black;
        font-size: 0.8rem;
      }
      .subTitle {
        padding: 0.5rem 0;
        color: grey;
        font-size: 0.6rem;
      }
      .originPrice {
        color: #e25450;
        padding-right: 0.5rem;
        font-size: 0.8rem;
      }
      .price {
        color: grey;
        font-size: 0.5rem;
        text-decoration: line-through;
      }
      .totalSales {
        float: right;
        color: #e25450;
        font-size: 0.8rem;
      }
      .shippingInfo {
        font-size: 0.6rem;
        height: 0.8rem;
        color: grey;
      }
    }
    .specifications {
      width: 100%;
      background-color: white;
      margin-top: 1rem;
      padding-left: 0.5rem;
      .specificationsTitle {
        padding-top: 1rem;
        font-size: 1rem;
        color: black;
      }
      .conditions {
        font-size: 0.6rem;
        height: 1rem;
        color: grey;
        .conditionsOne {
          padding-left: 2rem;
        }
        .conditionsTwo {
          padding-left: 2.5rem;
        }
      }
    }
    .showGoods {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
