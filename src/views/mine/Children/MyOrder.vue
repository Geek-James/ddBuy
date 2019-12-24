<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 15:03:29
 * @Description: 我的->我的订单
 * @FilePath: /ddBuy/src/views/mine/Children/MyOrder.vue
 -->
<template>
  <div id="myOrder">
    <van-nav-bar :title=" $t('mine.myOrders')"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/javascript">
import OrderType from './MyOrderChildren/OrderType'
export default {
  data () {
    return {
      typeArray: [],
      // 路由传递过来的数据 active
      active: this.$route.params.active,
      itemsTitle: this.$t('mine.itemsTitle'),
    }
  },
  components: {
    OrderType
  },
  methods: {
    onClickLeft () {
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
