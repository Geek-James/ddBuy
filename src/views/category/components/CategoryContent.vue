<template>
  <div class="categoryContent">
    <!-- 顶部子类菜单栏 -->
    <div class="subTitleWrapper">
      <ul class="subTitleContent"
          ref="ulContent">
        <li class="title"
            :class="{selected:currentSubTitle === index}"
            v-for="(detailItem,index) in detailContentData"
            :key="detailItem.id"
            ref="subTitle"
            @click="subTitleClick(index)"
            :productContentData="detailItem.product">
          {{detailItem.name}}
        </li>
      </ul>
    </div>
    <!--内容栏目-->
    <!-- <div class="content">
      <li class="contentTitle">
        <span class="title">猜你喜欢</span>
        <div class="rightTitle">
          <span class="sales"
                v-show="!isShowMore"
                @click="salesClick">销量</span>
          <span class="price"
                v-show="!isShowMore"
                @click="priceClick">价格</span>
          <span class="more"
                v-show="isShowMore"
                @click="moreClick">查看全部</span>
        </div>
      </li>
      <li class="detailContent"
          v-for="(product,index) in productContentData['products']"
          :key="product.id">
        <div class="detailImg">
          <img :src="product.small_image"
               alt=""
               class="detailImg">
        </div>
        <div class="detailMessage">
          <p class="detailTitle">进口香蕉</p>
          <p class="detailSubTitle">香甜软速 老少皆宜香甜软速 老少皆宜香甜软速 老少皆宜香甜软速 老少皆宜香甜软速 老少皆宜</p>
          <span class="nowPrice">17</span>
          <span class="originPrice">29</span>
          <div class="buyCar">
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
    </div> -->
  </div>
</template>

<script type="text/javascript">
//引入发布订阅
import PubSub from 'pubsub-js'
import { CATEGORY_ITEM_CLICK } from '../../../config/pubsub_type.js'

import ProductItem from './../components/ProductItem'

import { getCategoryDetailData } from '../../../serve/api/index.js'
// 引入滑动组件BetterScroll
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      currentIndex: -1,
      currentSubTitle: 0,
      detailContentData: [],
      isShowMore: true,
      productContentData: [],
    }
  },
  components: {
    ProductItem
  },
  watch: {

  },
  created () {
  },
  mounted () {
    this._initData();
    this.getItemIndex();
  },
  methods: {
    // 初始化数据
    _initData () {
      // 拿到第一条数据
      let detailContent = getCategoryDetailData('/lk001').then(response => {
        if (response.success) {
          this.detailContentData = response.data.cate;

          this.detailContentData.forEach((produces, item) => {
            this.productContentData.push(item);
          });
        }
      });
    },
    // 通过左边点击的发布来订阅item的index数据
    getItemIndex () {
      PubSub.subscribe(CATEGORY_ITEM_CLICK, (msg, itemIndex) => {
        if (itemIndex == 0) this.isShowMore = true;
        if (this.currentIndex !== itemIndex) {
          this.currentIndex = itemIndex;
          // 是否显示或隐藏 查看更多
          this.isShowMore = itemIndex > 0 ? false : true;
          // 更新右边的数据
          let detailContent = getCategoryDetailData(`/lk00${itemIndex + 1}`).then(response => {
            if (response.success) {
              this.detailContentData = response.data.cate;
              this.currentSubTitle = 0;
              console.log(this.detailContentData);
              this.$nextTick(() => {
                this._initSubTitleScroll();
              });
            }
          });
        }
      });
    },
    // 让内容上部分的子标题可以滚动
    _initSubTitleScroll () {
      let contentWrapperWidth = 0;
      let el = this.$refs.subTitle;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 给ul设置值
      this.$refs.ulContent.style.width = contentWrapperWidth + 'px';
      if (!this.scroll) {
        this.scroll = new BScroll('.subTitleWrapper', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh();
      }
    },
    // 处理点击subTitle的事件
    subTitleClick (index) {
      this.currentSubTitle = index;
      let el = this.$refs.subTitle[index];
      this.scroll.scrollToElement(el, 500);
    },
    // 点击了销量
    salesClick () {
      alert('销量');
    },
    // 点击了价格
    priceClick () {
      alert('价格');

    },
    moreClick () {
      alert('查看更多');
    }
  }
}
</script>
<style lang="less" scoped>
.categoryContent {
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  right: 0;
  width: 75%;
  overflow: hidden;
  .subTitleWrapper {
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    .title {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
  .content {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.73rem;
    padding-left: 0.5rem;
    border-bottom: solid 0.01rem #e8e9e8;
    color: grey;
    list-style: none;
    .contentTitle {
      list-style: none;
      .rightTitle {
        float: right;
        // height: 2rem;
        padding: 0 0.5rem;
        span {
          padding: 0 0.5rem;
        }
      }
    }
    .detailContent {
      display: inline-block;
      padding-bottom: 1rem;
      border-bottom: solid 1px #e8e9e8;
      .detailImg {
        float: left;
        width: 30%;
        height: 5rem;
        background-color: aquamarine;
      }
    }
    .detailMessage {
      position: relative;
      float: left;
      width: 70%;
      height: auto;
      .buyCar {
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        right: 1rem;
        bottom: 0rem;
      }
      .detailTitle {
        padding: 0 0.2rem;
        font-size: 0.828rem;
        color: black;
      }
      .detailSubTitle {
        padding-left: 0.2rem;
        padding-right: 1rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 2.5rem;
        line-height: 1.25rem;
        font-size: 0.8125rem;
        word-break: break-all;
        font-size: 0.628rem;
        color: grey;
      }
      .nowPrice {
        padding-left: 0.2rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.6875rem;
        color: #fe6263;
      }
      .originPrice {
        padding-left: 0.5rem;
        font-size: 0.6875rem;
        color: #999999;
        text-decoration: line-through;
      }
    }
  }
}
</style>
