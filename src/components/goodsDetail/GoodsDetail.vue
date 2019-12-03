<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-12-03 15:04:51
 * @Description: 商品详情页 由于是Mock数据->通过上级页面通过路由的query传值 
 * @supplement   企业开发,只需要拿到商品的id然后请求获取数据
 * @FilePath: /ddBuy-dev/src/components/goodsDetail/GoodsDetail.vue
 -->

<template>
  <div id="goodsDetail">
    <van-nav-bar title="商品详情"
                 :fixed=true
                 left-arrow
                 @click-left="onClickLeft">
      <svg t="1575254700818"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="1907"
           width="32"
           height="32"
           slot="right">
        <path d="M621.93259435 611.38542038L423.92102316 703.33559492c-9.52523406 4.42304387-20.93769289 0.2488718-25.36137327-9.27636225-4.42304387-9.52523406-0.2488718-20.93769289 9.27636226-25.36137326l198.01157118-91.95017455c9.52523406-4.42304387 20.93769289-0.2488718 25.36137327 9.27636226 4.42368037 9.52587056 0.2488718 20.93832939-9.27636225 25.36137326zM600.48824684 870.32029948l-189.07064485-109.15988242c-9.09495954-5.25113136-12.24054635-16.98884212-6.98941498-26.08443814 5.25113136-9.09495954 16.98884212-12.24054635 26.08443815-6.98941498l189.07064483 109.15988241c9.09495954 5.25113136 12.24054635 16.98884212 6.98941499 26.08443814-5.25113136 9.09559604-16.98884212 12.24054635-26.08443814 6.98941499z"
              fill="#F9C73D"
              p-id="1908"></path>
        <path d="M358.28506354 712.46556199m-92.29261194 0a92.29261195 92.29261195 0 1 0 184.58522388 0 92.29261195 92.29261195 0 1 0-184.58522388 0Z"
              fill="#FFEABB"
              p-id="1909"></path>
        <path d="M358.28506354 823.85319711c-61.419142 0-111.38763511-49.96849311-111.38763512-111.38763512s49.96849311-111.38763511 111.38763512-111.38763511 111.38763511 49.96849311 111.38763512 111.38763511-49.96849311 111.38763511-111.38763512 111.38763512z m1e-8-184.5852239c-40.36115047 0-73.19758879 32.83643833-73.19758879 73.19758877s32.83643833 73.19758879 73.19758879 73.1975888 73.19758879-32.83643833 73.1975888-73.19758879-32.83643833-73.19758879-73.1975888-73.19758878zM683.85520847 640.54097475c-50.89014624 0-92.29261195-41.40246571-92.29261196-92.29261196s41.40246571-92.29261195 92.29261196-92.29261194 92.29261195 41.40246571 92.29261195 92.29261194-41.40246571 92.29261195-92.29261195 92.29261195z m0-146.39517759c-29.83215469 0-54.10256563 24.27041094-54.10256564 54.10256563s24.27041094 54.10256563 54.10256564 54.10256564 54.10256563-24.27041094 54.10256562-54.10256564-24.27041094-54.10256563-54.10256562-54.10256563zM683.85520847 979.15938549c-50.89014624 0-92.29261195-41.40246571-92.29261196-92.29261195s41.40246571-92.29261195 92.29261196-92.29261195 92.29261195 41.40246571 92.29261195 92.29261195-41.40246571 92.29261195-92.29261195 92.29261196z m0-146.39517756c-29.83215469 0-54.10256563 24.27041094-54.10256564 54.10256561s24.27041094 54.10256563 54.10256564 54.10256564 54.10256563-24.27041094 54.10256562-54.10256564-24.27041094-54.10256563-54.10256562-54.10256561z"
              fill="#F9C73D"
              p-id="1910"></path>
      </svg>
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
          <span>限时抢购</span>
          <i>抢购中</i>
        </div>
        <div class="flashRight">
          <span>距结束</span>
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
        <span class="totalSales">已售:{{goodsInfo.total_sales}}</span>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="cluster-o" />此商品按500g/份计价,如实收少于500g将退还差价</div>
        <van-divider />
        <div class="shippingInfo">
          <van-icon name="clock-o" />最快29分钟内送达</div>
      </div>
      <!-- 规格 -->
      <div class="specifications">
        <div class="specificationsTitle">规格 </div>
        <van-divider dashed />
        <div class="conditions">
          <span>保存条件</span>
          <span class="conditionsOne">冷藏</span>
        </div>
        <van-divider dashed />
        <div class="conditions">
          <span>保质期</span>
          <span class="conditionsTwo">15天</span>
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
                                 text="加入购物车"
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
