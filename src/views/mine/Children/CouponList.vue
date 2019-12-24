<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2019-12-24 14:01:13
 * @Description: 我的->我的优惠券
 * @FilePath: /ddBuy/src/views/mine/Children/CouponList.vue
 -->
<template>
  <div id="couponList">
    <van-nav-bar :title="$t('mine.myBills')"
                 :fixed=true
                 :border=false
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <!--优惠券列表-->
    <van-coupon-list :coupons="coupons"
                     style="margin-top:3rem"
                     :input-placeholder="$t('mine.persent')"
                     @exchange="onExchange" />

  </div>

</template>

<script type="text/javascript">
export default {
  data () {
    return {
      coupons: [{                  // 优惠券信息     
        available: 1,
        condition: this.$t('mine.condition'),
        reason: '',
        value: 150,
        name: this.$t('mine.bill'),
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '1.5',
        unitDesc: this.$t('mine.rmb')
      }, {                  // 优惠券信息     
        available: 1,
        condition: this.$t('mine.condition'),
        reason: '',
        value: 200,
        name: this.$t('mine.bill'),
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '1.5',
        unitDesc: this.$t('mine.rmb')
      }]
    }
  },
  components: {

  },
  methods: {
    // 返回到上个界面
    onClickLeft () {
      this.$router.go(-1);
    },

    onExchange (code) {
      // 兑换优惠券
      if (code == '520it') {
        this.coupons.push(this.coupons[0]);
      }
    }
  }
}
</script>

<style lang="less" scoped>
#couponList {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .van-nav-bar__title {
    color: black;
  }
  .van-icon {
    color: #dedede;
  }
}
</style>
