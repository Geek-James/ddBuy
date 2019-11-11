<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 15:04:28
 * @Description: 我的->我的绿卡->绿卡产品列表
 * @FilePath: /ddBuy/src/views/mine/Children/MyVipChildren/VipGoodsItems.vue
 -->
<template>
  <div id="vipGoodsItems">
    <!-- 商品内容列表 -->
    <section class="r_list"
             ref="r_list">
      <div>
        <ul>
          <li v-for="(item,index) in vipCateDetail"
              :key="index"
              class="list ">
            <div class="list_item flex">
              <p>
                <img :src="item.small_image"
                     alt="">
              </p>
              <div>
                <p class="name">{{item.product_name}}</p>
                <p class="des">{{item.spec}}</p>
                <p class="originPrice">{{item.origin_price | moneyFormat}}</p>
                <p class="price">{{item.price | moneyFormat}}
                  <van-tag plain
                           mark
                           color="#5fa85f">绿卡价格</van-tag>
                </p>
                <div class="iconCartWrapper">
                  <svg viewBox="0 0 52 52"
                       class="icon iconCart">
                    <defs>
                      <radialGradient cx="27.0288363%"
                                      cy="10.3693483%"
                                      fx="27.0288363%"
                                      fy="10.3693483%"
                                      r="93.8427229%"
                                      id="radialGradient-1">
                        <stop stop-color="#d7d7d7"
                              offset="0%" />
                        <stop stop-color="#d7d7d7"
                              offset="100%" />
                      </radialGradient>
                    </defs>
                    <g stroke="none"
                       stroke-width="1"
                       fill="none"
                       fill-rule="evenodd">
                      <g transform="translate(-678.000000, -2742.000000)">
                        <g transform="translate(678.000000, 2742.000000)">
                          <rect fill="url(#radialGradient-1)"
                                x="0"
                                y="0"
                                width="51.8699976"
                                height="51.8699976"
                                rx="25.9349988"></rect>
                          <path fill="#FFFFFF"
                                d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                          <path stroke="#FFFFFF"
                                stroke-width="2.6"
                                stroke-linecap="round"
                                d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="bottomTip">更多特权敬请期待...</div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    vipCateDetail: Array
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
#vipGoodsItems {
  .r_list {
    overflow: hidden;
    // 防止抖动
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    padding-bottom: 3rem;
    .productCategoryTitle {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
      border-left: 3px solid #d9dde1;
      height: 0.32rem;
      width: 100%;
      font-size: 0.73rem;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
      padding-left: 0.28rem;
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .list {
      padding: 0.36rem 0.36rem 0 0.36rem;
      img {
        width: 4.0625rem;
        height: 4.0625rem;
        border-radius: 0.04rem;
      }
      .list_item {
        justify-content: flex-start;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        padding-bottom: 1rem;
        position: relative;
        & > div {
          margin-left: 0.2rem;
          .name {
            font-size: 0.8375rem;
            color: rgb(7, 17, 27);
            margin-bottom: 0.16rem;
          }
          .des,
          .sale {
            padding: 0.2rem;
            line-height: 0.8rem;
            font-size: 0.65rem;
            color: rgb(147, 153, 159);
            margin-bottom: 0.16rem;
          }
          .sale {
            margin-bottom: 0;
            span {
              margin-left: 0.24rem;
            }
          }
          .originPrice {
            margin-top: 0.5rem;
            font-size: 0.6875rem;
            color: #8f8f8f;
          }
          .price {
            font-size: 0.8rem;
            padding-top: 0.3rem;
            color: #5fa85f;
          }
          .add {
            position: absolute;
            right: 0;
            bottom: 0.28rem;
          }
          .iconCartWrapper {
            position: absolute;
            width: 1.875rem;
            top: 3.4rem;
            right: 0.6rem;
          }
          .icon {
            fill: #999;
            width: 1rem;
            height: 1rem;
          }
          .iconCart {
            display: block;
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
    .bottomTip {
      padding-top: 0.8rem;
      color: grey;
      font-size: 0.8rem;
      text-align: center;
    }
  }
}
</style>
