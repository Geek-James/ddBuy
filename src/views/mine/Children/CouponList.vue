<template>
  <div id="couponList">
    <van-nav-bar title="我的优惠券"
                 :fixed=true
                 :border=false
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <!--优惠券列表-->
    <van-coupon-list :coupons="coupons"
                     style="margin-top:3rem"
                     input-placeholder="请输入520it兑换"
                     @exchange="onExchange" />

  </div>

</template>

<script type="text/javascript">
export default {
  data () {
    return {
      coupons: [{
        available: 1,
        condition: '无使用门槛\n最多优惠15元',
        reason: '',
        value: 150,
        name: '优惠券 ',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '15',
        unitDesc: '元'
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
        this.coupons.push(coupon);
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
}
</style>
