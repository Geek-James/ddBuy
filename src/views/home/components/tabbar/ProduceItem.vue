<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 22:34:48
 * @Description: 首页->产品列表
 * @FilePath: /ddBuy/src/views/home/components/tabbar/ProduceItem.vue
 -->
<template>
  <div id="produceItem">
    <div class="item"
         v-for="(product,index) in product_lists"
         :key="product.id">
      <img v-lazy="product.small_image"
           alt="">
      <p class="itemTitle">{{product.name}}</p>
      <p class="itemSubTitle">{{product.spec}}</p>
      <span class="tagEat"
            v-if="isShowEatTag">吃货节</span>
      <span class="price">
        {{product.price | moneyFormat}}
      </span>
      <span class="originPrice">{{product.origin_price | moneyFormat}}</span>
      <div class="buyCar"
           @click="addCart(product)">
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
  </div>
</template>

<script type="text/javascript">
// 引入消息发布订阅
import PubSub from 'pubsub-js'
import { mapMutations } from 'vuex'
import { ADD_TO_CART } from './../../../../config/pubsub_type.js'

export default {
  props: {
    product_lists: Array
  },
  data () {
    return {
      isShowEatTag: false
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    ...mapMutations({
            addCart: 'ADD_TO_CART'
    })
  }
}
</script>

<style lang="less" scoped>
#produceItem {
  background-color: #f5f5f5;
  height: auto;
  padding-left: 2%;
  padding-top: 0.5rem;
}
.item {
  position: relative;
  display: inline-block;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 0.3rem;
  padding-bottom: 0.6rem;
}

.item img {
  width: 100%;
  height: 100%;
  // 等比缩小图片来适应元素的尺寸
  background-size: contain;
  background-image: url("../../../../images/placeholderImg/product-img-load.png");
}
.item .itemTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  line-height: 1rem;
  font-size: 0.625rem;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item .itemSubTitle {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: gray;
  padding-top: 0.2rem;
  font-size: 0.45rem;
  line-height: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 1.5rem;
}

.item .price {
  padding-left: 0.5rem;
  color: #f37078;
  font-size: 0.928rem;
}
.tagEat {
  margin-left: 0.5rem;
  padding: 0.09rem;
  color: orangered;
  width: 2.5rem;
  height: 0.1rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  border: 0.05rem solid red;
}

.originPrice {
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
.buyCar {
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  right: 1rem;
  bottom: 0.5rem;
}
</style>
