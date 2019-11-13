<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-13 10:43:09
 * @Description: 首页->限时抢购
 * @FilePath: /ddBuy/src/views/home/components/flash/FlashFood.vue
 -->
<template>
  <div id="flashFood">
    <div class="flashItemwrapper">
      <ul class="itemWrapper"
          ref="ulWrapper">
        <li class="itemInCovers"
            v-for="(product,index) in flash_sale_product_list"
            :key="product.id"
            ref="productItem">
          <img v-lazy="product.small_image"
               class="itemImage">
          <span class="title">{{product.name}}</span>
          <div class="price">
            <p class="nowPrice">{{product.price | moneyFormat}}</p>
            <p class="originPrice">{{product.origin_price | moneyFormat}}</p>
            <div class="buyCar"
                 @click="addToCart(product)">
              <svg viewBox="0 0 52 52"
                   class="icon icon-60">
                <defs>
                  <radialGradient cx="27.0288363%"
                                  cy="10.3693483%"
                                  fx="27.0288363%"
                                  fy="10.3693483%"
                                  r="93.8427229%"
                                  id="radialGradient-1">
                    <stop stop-color="#4ECA75"
                          offset="0%"></stop>
                    <stop stop-color="#39B460"
                          offset="100%"></stop>
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">

// 引入第三方组件
import BScroll from 'better-scroll'
import { Toast } from 'vant'
// 引入中央事件总线
import { mapMutations } from 'vuex'
import { ADD_TO_CART } from './../../../../config/pubsub_type.js'
export default {
  props: {
    flash_sale_product_list: Array
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      let contentWrapperWidth = 0;
      let el = this.$refs.productItem;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 给ul设置值
      this.$refs.ulWrapper.style.width = contentWrapperWidth + 'px';
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll('.flashItemwrapper', {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh();
      }
    });
  },
  components: {

  },
  methods: {
    // 添加到购物车
    ...mapMutations({
      addToCart: 'ADD_TO_CART'
    })
  }
}
</script>
<style lang="less" scoped>
#flashFood {
  .flashItemwrapper {
    width: 100%;
    overflow: hidden;
    .itemWrapper {
      display: flex;
      justify-content: flex-start;
    }
    .itemInCovers {
      // 设置子li的宽度
      flex: 0 0 6rem;
      align-items: center;
      padding-right: 0.5rem;
      .itemImage {
        width: 100%;
        // 等比缩小图片来适应元素的尺寸
        background-size: contain;
        background-image: url("../../../../images/placeholderImg/product-img-load.png");
      }
      .title {
        padding: 0.2rem;
        display: inline-block;
        font-size: 0.6258rem;
        height: 1.8rem;
        line-height: 1rem;
        font-size: 0.625rem;
        word-break: break-all;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        position: relative;
        padding-left: 0.5rem;
        .nowPrice {
          color: #f37078;
          font-size: 0.928rem;
        }
        .originPrice {
          font-size: 0.6875rem;
          color: #999999;
          text-decoration: line-through;
        }
        .buyCar {
          position: absolute;
          right: 0.6rem;
          top: 0.1rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>
