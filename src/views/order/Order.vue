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
                value="请选择送达时间"
                is-link>
        <template slot="label">
          <span class="custom-title">超过十分钟可获得积分补偿</span>
          <van-icon name="question-o" />
        </template>
      </van-cell>

      <!-- 商品缩略图 -->
      <div class="wrapper">
        <div class="productImageWrapper"
             ref="productImageWrapper">
          <ul class="imageWrapper"
              ref="imageWrapper">
            <li ref="subWrapper"
                style="display:inline"
                v-for="(item,index) in shopCart"
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
      <van-cell title="优惠券"
                is-link
                value="0张可用">
      </van-cell>
      <van-cell>
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
        <div class="money">{{integralToprice | moneyFormat}}</div>
      </van-cell>

    </van-cell-group>

    <!-- 提交订单 -->
    <van-submit-bar :price="actualPrice"
                    label="实付"
                    button-text="
                    提交订单"
                    @submit="onSubmit" />
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
import { mapState, mapGetters } from 'vuex'
import { Toast, Dialog } from 'vant';

export default {
  data () {
    return {
      address_type: 'add',//地址卡片类型
      address_name: null,
      radio: '1',
      checked: false,
      isShowPreferential: false,
      integral: 800
    };
  },
  computed: {
    ...mapState(['shopCart']),
    // 数量
    ...mapGetters({
      selectedCount: 'SELECTED_GOODS_COUNT',
      goods: 'SELECTED_GOODS',
      selectedTotalPrice: 'SELECTED_GOODS_PRICE'
    }),
    actualPrice () {
      // 如果用户使用积分兑换
      if (this.checked) {
        let discountsPrice = this.integralToprice.toFixed(2).toString().replace('.', '');
        let finalPrice = this.selectedTotalPrice - discountsPrice;
        return (finalPrice < 0 ? this.selectedTotalPrice : finalPrice);
      } else {
        // 不使用积分兑换
        return this.selectedTotalPrice;
      }
    },
    // 计算积分兑换人民币
    integralToprice () {
      if (this.integral > 0) {
        return (this.integral / 100);
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  created () {
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
    // 5.选择地址
    chooseAddress () {
      this.$router.push('/order/myAddress');
    }
  }
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
}
</style>
