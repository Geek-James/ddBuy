<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-13 10:41:58
 * @Description: 分类模块->可滑动标题组件
 * @FilePath: /ddBuy/src/views/category/components/ContentView.vue
 -->
<template>
  <div class="wrapper">
    <!-- 可滑动的标题 -->
    <div class="subTitleWrapper"
         ref="subTitleWrapper">
      <ul ref="ulContent">
        <li class="title"
            :class="{selected:currentSubTitle === index}"
            v-for="(detailItem,index) in categoriesDetailData"
            :key="detailItem.id"
            ref="subTitle"
            @click="subTitleClick(index)">
          {{detailItem.name}}
        </li>
      </ul>
    </div>
    <!-- 下拉菜单 -->
    <div class="showMenu"
         @click="menuClick"
         v-show="isShowDropMenu">
      <span class="downMenu"
            v-if="menuDown">
        <svg t="1569722977319"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="759"
             width="32"
             height="32">
          <path d="M511.31 989.39999995a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 971.53999995a61.41 61.41 0 0 1-43.39 17.86z"
                fill="#8a8a8a"
                p-id="760"></path>
        </svg>
      </span>
      <span class="upMenu"
            v-else>
        <svg t="1569723063527"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="759"
             width="32"
             height="32">
          <path d="M512.69 653.26666662a61.19 61.19 0 0 1 43.25 17.79l237.12 237.2a35 35 0 0 1-49.55 49.55l-230.89-230.9-230.9 230.89a35 35 0 1 1-49.55-49.55000001L469.3 671.12666662a61.41 61.41 0 0 1 43.39-17.86z"
                fill="#8a8a8a"
                p-id="760"></path>
        </svg>
      </span>
    </div>
    <!-- 下拉菜单内容 -->
    <DropMenu :menuDown="!menuDown"
              :categoriesDetailData="categoriesDetailData"
              :currentSubTitle="currentSubTitle"
              @itemClick="itemClick"
              @touchClick="menuClick"></DropMenu>

    <!-- 商品内容列表 -->
    <section class="r_list"
             ref="r_list">
      <div ref="b">
        <div v-for="(it,index) in categoriesDetailData"
             :key="index"
             ref="good">
          <p class="productCategoryTitle">
            {{it.name}}
          </p>
          <ul>
            <li v-for="(item,index) in it.products"
                :key="index"
                class="list ">
              <div class="list_item flex">
                <p @click="getDetails(item)">
                  <img v-lazy="item.small_image"
                       alt="">
                </p>
                <div>
                  <p class="name">{{item.product_name}}</p>
                  <p class="des">{{item.spec}}</p>
                  <p class="price">{{item.price | moneyFormat}}</p>
                  <p class="originPrice">{{item.origin_price | moneyFormat}}</p>
                  <div class="iconCartWrapper"
                       @click="addToCart(item)">
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
            </li>
          </ul>
        </div>
        <div class="bottomTip">到底了,看看别的分类吧</div>
      </div>
    </section>
  </div>
</template>
<script>

import BScroll from 'better-scroll'
import { Toast } from 'vant'
import DropMenu from './DropMenu'
import { mapMutations, mapState } from 'vuex'

export default {

  data () {
    return {
      scrollY: 0,
      currentSubTitle: 0,
      arrli: 0,
      flag: true,
      value: 0,
      menuDown: true,
      isShowDropMenu: false
    }
  },
  props: {
    categoriesDetailData: Array
  },
  components: {
    DropMenu
  },
  mounted () {
    // 初始化更新滑动组件
    this.$nextTick(() => {
      this._initTitleScroll();
      this._initProductScroll();
      this._isShowDropMenu();
    });
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch: {
    categoriesDetailData () {
      this.currentSubTitle = 0;
      this.menuDown = true;
      // 初始化更新滑动组件
      this.$nextTick(() => {
        this._initTitleScroll();
        this._initProductScroll();
        // 是否显示下拉菜单按钮
        this._isShowDropMenu();
      });
    }
  },
  methods: {
    // 0.延展Vuex的方法
    ...mapMutations(['ADD_GOODS', 'ADD_TO_CART']),
    // 1.titleScroll 滚动初始化
    _initTitleScroll () {
      let contentWrapperWidth = 120;
      let el = this.$refs.subTitle;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 1.1给ul设置宽度,保证可以横向滚动
      this.$refs.ulContent.style.width = contentWrapperWidth + 'px';
      if (!this.titleScroll) {
        this.titleScroll = new BScroll('.subTitleWrapper', {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true,
        });
      } else {
        this.titleScroll.refresh();
      }
    },
    // 2.产品列表滚动初始化
    _initProductScroll () {
      if (!this.productScroll) {
        this.productScroll = new BScroll(this.$refs.r_list, {
          click: true,
          probeType: 3
        })
      } else {
        this.productScroll.refresh();
        // 2.1 进入默认商品列表滚到顶部
        this.productScroll.scrollToElement(this.$refs.good[0], 10, 0, 0);
      }
    },
    // 3.处理点击subTitle的事件
    subTitleClick (index) {
      this.flag = true;
      // 3.0 判断如果蒙版存在 那么让它消失
      this.menuDown = true;
      // 3.1 让横向滑动到合适位置
      this.currentSubTitle = index;
      let el = this.$refs.subTitle[index];
      this.titleScroll.scrollToElement(el, 500);
      // 3.2 让产品列表根据点击的index值滚动
      this.arrli = index;
      this.productScroll.scrollToElement(this.$refs.good[index], 100, 0, 0);
      setTimeout(() => {
        this.flag = false;
      }, 100);
    },
    // 4.添加购物车
    ...mapMutations({
      addToCart: 'ADD_TO_CART'
    }),
    // 5.点击下拉菜单
    menuClick () {
      this.menuDown = !this.menuDown;
    },
    // 6.处理点击蒙版里面的标题
    itemClick (index) {
      this.currentSubTitle = index;
      this.subTitleClick(index);
      // 让蒙版消失
      this.menuDown = false;
    },
    // 7.是否显示标题下拉按钮
    _isShowDropMenu () {
      // 如果标题超出则显示下拉框按钮
      let subTitleWrapperWidth = this.$refs.subTitleWrapper.clientWidth;
      let ulContentWidth = this.$refs.ulContent.clientWidth;
      this.isShowDropMenu = ulContentWidth > subTitleWrapperWidth ? true : false;
    },
    // 8.商品详情
    getDetails (item) {
      Toast({
        message: '商品详情暂未实现哦~',
        duration: 800
      });
    }
  }
}
</script>

<style <style lang="less" scoped>
/**scrollTitle  CSS***/
.wrapper {
  width: 100%;
  .subTitleWrapper {
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 2.8rem;
    background-color: white;
    .title {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
  .showMenu {
    position: fixed;
    width: 10%;
    height: 2.5rem;
    line-height: 2.5rem;
    right: -0.2rem;
    z-index: 1999;
    margin-top: 0.1rem;
    background-color: white;
    .menuIcon {
      width: 100%;
      height: 2.8re;
    }
  }
}

.r_list {
  position: absolute;
  left: 5.2rem;
  right: 0;
  top: 2.9rem;
  bottom: 0rem;
  overflow: hidden;
  // 防止抖动
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
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
          line-height: 1rem;
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
        .price {
          display: inline;
          font-size: 0.75rem;
          color: red;
        }
        .originPrice {
          display: inline;
          padding-left: 0.5rem;
          text-decoration: line-through;
          font-size: 0.6875rem;
          color: #b2b2b2;
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
    font-size: 0.6rem;
    text-align: center;
  }
}
</style>