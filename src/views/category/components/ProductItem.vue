<template>
  <div class="productWrapper"
       ref="productWrapper">
    <div v-for="(product, index) in products"
         class="infoWrapper"
         :key="product.id">
      <div class="imageWrapper">
        <div class="LazyLoad is-visible">
          <img class="image"
               :src="product.small_image"
               alt=""></div>
      </div>
      <div class="nameWrapper">
        <div class="name">
          <span class="nameTag nameText">{{product.product_name}}</span>
        </div>
        <div class="spec">
          {{product.spec}}
        </div>
        <div class="tagsWrapper">
          <div class="H1B9Rvu"></div>
        </div>
      </div>
      <div class="priceWrapper">
        <div class="price">
          {{product.price | moneyFormat}}
        </div>
        <div class="originPrice"> {{product.origin_price | moneyFormat}}</div>
        <div class="iconCartWrapper"
             @click="addToCart(product)">
          <svg viewBox="0 0 52 52"
               class="icon iconCart">
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
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    products: Array
  },
  mounted () {
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
.productWrapper {
  position: relative;
  padding: 0.8125rem 0;
  background: #fff;
}

.productWrapper + .productWrapper {
  border-top: solid 1px #eeeeee;
}

.imageWrapper {
  position: absolute;
  left: 0;
  top: 0.2375rem;
  width: 4.0625rem;
  height: 4.0625rem;
  overflow: hidden;
  border-radius: 4px;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}

.noticeGreen,
.noticeGray {
  position: absolute;
  height: 100%;
  text-align: center;
}

.noticeGreen {
  background: #76da96;
  color: #fff;
}

.noticeGray {
  background: rgba(255, 255, 255, 0.6);
}

.noticeGray span {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 0.75rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
}

.infoWrapper {
  position: relative;
  padding: 0 0.625rem 0.4rem 4.6625rem;
  border-bottom: 1px solid #e0e0e0;
}

.nameWrapper {
  padding-top: 0.5rem;
  min-height: 2.1875rem;
}

.name {
  line-height: 1.25rem;
  word-break: break-all;
  font-size: 0.9375rem;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.name .nameTag {
  margin-right: 0.125rem;
  vertical-align: middle;
}
.name .nameText {
  vertical-align: middle;
}

.spec {
  padding-top: 0.2rem;
  height: 2.15rem;
  line-height: 1.2rem;
  font-size: 0.75rem;
  color: #999999;
  /* white-space: nowrap; */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tagsWrapper {
  margin-top: 0.1875rem;
  max-height: 1.0625rem;
  line-height: 0.8125rem;
  overflow: hidden;
}

.H1B9Rvu {
  height: 1rem;
}

.tag + .tag {
  margin-left: 0.3125rem;
}

.priceWrapper {
  position: relative;
}

.price {
  display: inline-block;
  height: 1.875rem;
  line-height: 1.875rem;
  font-weight: bold;
  font-size: 0.75rem;
  color: #fe6263;
}

.originPrice {
  display: inline-block;
  margin-left: 0.3125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-decoration: line-through;
  font-size: 0.6875rem;
  color: #b2b2b2;
}

.iconCartWrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 1.875rem;
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}

.iconCart {
  display: block;
  width: 1.875rem;
  height: 1.875rem;
}
</style>