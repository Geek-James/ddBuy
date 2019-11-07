<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 16:07:04
 * @Description: 我的->我的绿卡->开通绿卡
 * @FilePath: /ddBuy/src/views/mine/Children/MyVipChildren/VipPay.vue
 -->
<template>
  <div id="vipPay">
    <van-nav-bar title="开通绿卡"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <div class="userInfoBox">
      <img class="iconImage"
           :src="user_image.login_icon"
           alt="">
      <div class="personInfo">
        <span>{{userInfo.user_name}}</span>
        <i>{{vipTipMsg}}</i>
      </div>
    </div>
    <div class="vipDesc">
      <p>开通绿卡享三大权益,预计每单省6.66元</p>
      <van-grid :column-num="3"
                :border=false>
        <van-grid-item icon="vip-card-o"
                       text="专享券"
                       style="color:#60b86a" />
        <van-grid-item icon="discount"
                       text="专享特价"
                       style="color:#60b86a" />
        <van-grid-item icon="gem-o"
                       text="2倍积分"
                       style="color:#60b86a" />
      </van-grid>
    </div>
    <!-- 会员类型 -->
    <div class="vipType">
      <div class="chooseType"
           :class="{selected:checked,normal:!checked}"
           @click="chooseClick(1)">
        <i>5折</i>
        <span class="title">年卡·365天</span>
        <a href="javaScript:;"
           class="cartCheckBox"
           :checked="checked"></a>
        <p>相当于约0.24元/天</p>
        <div class="price">¥88</div>
        <span class="originPrice">¥188</span>
      </div>
      <div class="chooseType"
           :class="{selected:secondChecked,normal:!secondChecked}"
           @click="chooseClick(2)">
        <i>7折</i>
        <span class="title">季卡·90天</span>
        <a href="javaScript:;"
           class="cartCheckBox"
           :checked="secondChecked"></a>
        <p>相当于约0.33元/天</p>
        <div class="price">¥30</div>
        <span class="originPrice">¥45</span>
      </div>
    </div>
    <!-- 支付方式 -->
    <!-- 支付方式选择 -->
    <van-radio-group v-model="radio">
      <van-cell-group title="支付方式">
        <van-cell clickable
                  @click="radio = '1'">
          <template slot="title">
            <img src="./../../../../images/order/wx.png"
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
            <img src="./../../../../images/order/zfb.png"
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
            <img src="./../../../../images/order/hb.png"
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

    <div class="payButton"
         @click="clickPay">立即支付</div>
  </div>
</template>

<script type="text/javascript">

import { mapState } from 'vuex'
import { Toast } from 'vant'

export default {
  data () {
    return {
      // 头像
      user_image: {
        login_icon: require('./../../../../images/mine/defaultImg.jpeg'),
      },
      vipTipMsg: '绿卡未开通',
      checked: true,
      secondChecked: false,
      radio: '1',
    }
  },
  components: {

  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.back();
    },
    // 切换类型
    chooseClick (index) {
      if (index == 1) {
        if (!this.checked) {
          this.checked = true;
          this.secondChecked = false;
        } else {
          return;
        }
      } else {
        if (!this.secondChecked) {
          this.checked = false;
          this.secondChecked = true;
        } else {
          return;
        }
      }
    },
    // 点击了支付
    clickPay () {
      Toast({
        message: '只能到这步啦!后面的臣妾做不到啊~~',
        duration: 900
      })
    }
  }
}
</script>

<style lang="less" scoped>
#vipPay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 100;
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 4rem;
  .van-nav-bar {
    background-color: #303747;
    font-size: 0.6rem;
    .van-icon {
      color: #ffffff;
    }
  }
  .van-nav-bar__title {
    color: #f5f5f5;
  }
  .userInfoBox {
    padding-left: 1rem;
    margin-top: 2.5rem;
    height: 3rem;
    background-color: #303747;
    display: flex;
    align-items: center;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
      color: white;
      line-height: 1rem;
      font-size: 0.8rem;
      i {
        font-size: 0.6rem;
        color: #f5f5f5;
      }
    }
  }
  .vipDesc {
    position: relative;
    padding-top: 1rem;
    width: 100%;
    background-color: #ffffff;
    p {
      text-align: center;
      font-size: 0.8rem;
      font-weight: bolder;
    }
  }
  .vipType {
    display: flex;
    width: 100%;
    height: 8rem;
    padding-top: 1rem;
    .selected {
      background-color: #ecfef0;
    }
    .normal {
      background-color: #f5f5f5;
    }
    .chooseType {
      width: 35%;
      height: 80%;
      margin-left: 1rem;
      border-radius: 0.6rem;
      position: relative;
      i {
        display: block;
        width: 1.8rem;
        height: 1rem;
        line-height: 1rem;
        background-color: #ed504a;
        text-align: right;
        padding-right: 0.2rem;
        color: white;
        font-size: 0.8rem;
        border-radius: 0.5rem 0.2rem 0.2rem 0;
      }
      .title {
        padding-left: 0.7rem;
        font-size: 0.8rem;
        color: black;
      }
      a {
        display: inline-block;
        float: right;
        margin-right: 0.8rem;
      }
      .cartCheckBox {
        background: url("./../../../../images/cart/shop-icon.png") no-repeat;
        background-size: 2.5rem 5rem;
        width: 1rem;
        height: 1rem;
      }
      .cartCheckBox[checked] {
        background-position: -1.2rem 0;
      }
      p {
        padding-top: 0.2rem;
        font-size: 0.6rem;
        padding-left: 0.7rem;
        color: #9faba1;
        white-space: nowrap;
        margin-bottom: 1rem;
      }
      .price {
        display: inline;
        padding-left: 0.7rem;
        padding-right: 0.5rem;
        font-size: 1.5rem;
        color: #60b86a;
      }
      .originPrice {
        color: grey;
        font-size: 0.75rem;
        text-decoration: line-through;
      }
    }
  }
  .payButton {
    text-align: center;
    position: fixed;
    bottom: 1rem;
    height: 2.5rem;
    line-height: 2.5rem;
    color: white;
    width: 90%;
    left: 5%;
    right: 5%;
    z-index: 999;
    border-radius: 1.5rem;
    background-color: #60b86a;
  }
}
</style>
