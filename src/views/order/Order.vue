/**
 * @Author: 极客James  
 * @Date: 2019-10-1 11:44:08 
 * @Last Modified by: 极客James
 * @Last Modified time: 2019-10-30 11:53:10
 * @GitHub https://github.com/Geek-James
 * @掘金 https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @描述 订单模块
 */
<template>
  <div id="order">
    <van-nav-bar title="填写订单"
                 left-arrow
                 :fixed=true
                 @click-left="onClickLeft" />
    <!-- 选择收货地址 -->
    <van-contact-card :type="address_type"
                      add-text="选择收货地址"
                      :name="address_name"
                      @click="chooseAddress"
                      style="margin-top:3rem" />
    <van-cell-group>
      <van-cell title="送达时间"
                :value="deliveryTime"
                is-link
                @click="showTimePickView">
        <template slot="label">
          <span class="custom-title">超过十分钟可获得积分补偿</span>
          <van-icon name="question-o" />
        </template>
      </van-cell>
      <!-- 送货时间区间选择器 -->
      <TimeIntervalList ref="timeInterval"
                        :showDateTimePopView="showDateTimePopView"
                        @changeData="changeData(arguments)"></TimeIntervalList>
      <!-- 商品缩略图 -->
      <div class="wrapper"
           @click="goToGoodsList">
        <div class="productImageWrapper"
             ref="productImageWrapper">
          <ul class="imageWrapper"
              ref="imageWrapper">
            <li ref="subWrapper"
                style="display:inline"
                v-for="(item,index) in goods"
                :key="index">
              <img :src="item.smallImage"
                   alt="">
            </li>
          </ul>
        </div>
        <ul class="productCount">
          <span>共{{selectedCount}}件
          </span>
          <van-icon name="arrow" />
        </ul>
      </div>
    </van-cell-group>
    <!-- 支付方式选择 -->
    <van-radio-group v-model="radio">
      <van-cell-group title="支付方式">
        <van-cell clickable
                  @click="radio = '1'">
          <template slot="title">
            <img src="./../../images/order/wx.png"
                 alt=""
                 width="25px"
                 height="25px"
                 style=" vertical-align: middle;padding-right:5px">
            <span>微信支付</span>
          </template>
          <van-radio slot="right-icon"
                     name="1"
                     checked-color="#07c160" />
        </van-cell>
        <van-cell clickable
                  @click="radio = '2'">
          <template slot="title">
            <img src="./../../images/order/zfb.png"
                 alt=""
                 width="25px"
                 height="25px"
                 style=" vertical-align: middle;padding-right:5px">
            <span>支付宝支付</span>
          </template>
          <van-radio slot="right-icon"
                     name="2"
                     checked-color="#07c160" />
        </van-cell>
        <van-cell clickable
                  @click="radio = '3'">
          <template slot="title">
            <img src="./../../images/order/hb.png"
                 alt=""
                 width="25px"
                 height="25px"
                 style=" vertical-align: middle;padding-right:5px">
            <span>花呗支付</span>
          </template>
          <van-radio slot="right-icon"
                     name="3"
                     checked-color="#07c160" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <!-- 优惠券及积分满减 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-coupon-cell :coupons="coupons"
                       :chosen-coupon="chosenCoupon"
                       @click="showList = true" />

      <van-cell>
        <!-- 优惠券列表 -->
        <van-popup v-model="showList"
                   position="bottom">
          <van-coupon-list :coupons="coupons"
                           :chosen-coupon="chosenCoupon"
                           @change="onChange"
                           @exchange="onExchange" />
        </van-popup>
        <span slot="title">使用{{integral}}积分兑换<b>{{integralToprice | moneyFormat}}</b></span>
        <van-switch v-model="checked"
                    slot="right-icon"
                    @input="onInput"
                    active-color="#07c160" />
      </van-cell>
    </van-cell-group>
    <!-- 备注 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-field label="备注"
                 type="textarea"
                 placeholder="选填,可以告诉我们您的特殊需求"
                 rows="1"
                 autosize
                 is-link />
    </van-cell-group>

    <!-- 商品金额 -->
    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额">
        <div class="money">{{(selectedTotalPrice/100) |moneyFormat }}</div>
      </van-cell>
      <van-cell title="配送费">
        <div class="money">0.00</div>
      </van-cell>
      <van-cell title="积分"
                v-show="isShowPreferential">
        <div class="integralToMoney">-{{integralToprice | moneyFormat}}</div>
      </van-cell>
    </van-cell-group>

    <!-- 提交订单 -->
    <van-submit-bar :price="actualPrice"
                    label="实付"
                    button-text="
                    提交订单"
                    @submit="onSubmit" />
    <!-- 路由出口 -->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">

import BScroll from 'better-scroll'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { Toast, Dialog } from 'vant';
import { getLocalStore } from './../../config/global.js'

// 送货时间区间组件
import TimeIntervalList from './children/TimeIntervalList'

export default {
  data () {
    return {
      address_type: 'add',           //地址卡片类型
      address_name: null,            // 收货地址
      radio: '1',                    // 支付方式  
      checked: false,                // 积分兑换开关
      isShowPreferential: false,     // 展示积分兑换
      integral: 800,                // 积分,
      showList: false,              // 展示优惠列表
      currentIndex: 0,
      currentItem: 0,
      deliveryTime: '请选择配送时间',
      showDateTimePopView: false,
      coupons: [{                  // 优惠券信息  
        available: 1,
        condition: '无使用门槛\n最多优惠1.5元',
        reason: '',
        value: 150,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '1.5',
        unitDesc: '元'
      }, {                  // 优惠券信息     
        available: 1,
        condition: '无使用门槛\n最多优惠2元',
        reason: '',
        value: 200,
        name: '优惠券 ',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '2',
        unitDesc: '元'
      }],
      chosenCoupon: -1,
    };
  },
  computed: {
    // 数量
    ...mapGetters({
      selectedCount: 'SELECTED_GOODS_COUNT',
      goods: 'SELECTED_GOODS',
      selectedTotalPrice: 'SELECTED_GOODS_PRICE'
    }),
    // 实际价格
    actualPrice () {
      // 如果用户使用积分兑换或使用优惠券
      let finalPrice;
      if (this.checked) {
        let discountsPrice = this.integralToprice.toFixed(2).toString().replace('.', '');
        finalPrice = this.selectedTotalPrice - discountsPrice;
      } else {
        finalPrice = this.selectedTotalPrice;
      }
      // 是否选择优惠券
      if (this.chosenCoupon > -1) {
        return finalPrice - this.coupons[this.chosenCoupon].value;
      } else {
        return finalPrice;
      }
    },
    // 计算积分兑换人民币
    integralToprice () {
      if (this.integral > 0) {
        return (this.integral / 100);
      }
    },
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  created () {

  },
  components: {
    TimeIntervalList
  },
  methods: {
    // 1.初始化滚动视图
    _initScroll () {
      if (!this.productImageScroll) {
        this.$refs.imageWrapper.style.width = (this.$refs.subWrapper.length * 60) + 'px';
        this.productImageScroll = new BScroll(this.$refs.productImageWrapper, {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true,
        });
      } else {
        this.productImageScroll.refresh();
      }
    },
    // 2.返回到上个界面
    onClickLeft () {
      this.$router.back();
    },
    // 3.提交订单
    onSubmit () {
    },
    // 4.switch开关
    onInput (checked) {
      let discountsPrice = this.integralToprice * 100;
      // 4.1 判断积分使用条件是否满足
      if (discountsPrice > this.selectedTotalPrice) {
        // 4.2不能使用积分
        Dialog.alert({
          message: '您的实际价格小于积分兑换价格,建议您在多买几件'
        }).then(() => {
          this.checked = false;
        });
      } else {
        this.isShowPreferential = !this.isShowPreferential;
      }
    },
    goToGoodsList () {
      this.$router.push({ name: 'orderGoodsList' })

    },
    // 选择地址
    chooseAddress () {
      this.$router.push('/order/myAddress');
    },
    // 选择优惠券
    onChange (index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    // 优惠券兑换
    onExchange (code) {
      this.coupons.push(coupon);
    },
    // 显示时间选择器
    showTimePickView () {
      this.showDateTimePopView = true;
    },
    changeData () {
      this.showDateTimePopView = arguments[0][0];
      this.deliveryTime = arguments[0][1];
    }
  },
}
</script>
<style lang="less" scoped>
#order {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  margin-bottom: 5rem;
  .wrapper {
    height: 4rem;
    width: 100%;
    position: relative;
    .productImageWrapper {
      display: flex;
      white-space: nowrap;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: start;
      height: 4rem;
      width: 80%;
      overflow: hidden;
      .imageWrapper {
        flex-wrap: nowrap;
        img {
          height: 3rem;
          width: 3rem;
        }
      }
    }
    .productCount {
      right: 0.1rem;
      top: 1.5rem;
      position: absolute;
      color: grey;
    }
  }

  /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }
  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>
