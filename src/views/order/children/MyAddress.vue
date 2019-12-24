<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-12 09:43:34
 * @Description: 订单->我的地址
 * @FilePath: /ddBuy/src/views/order/children/MyAddress.vue
 -->
<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar :title="$t('order.addLocation')"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <!-- 没有数据的占位图 -->
    <div class="noDataPlaceHold"
         v-show="shippingAddress.length<1">
      <img src="./../../../images/order/noAddress.png"
           alt="">
      <span class="desc">{{$t('order.addTip')}}</span>
    </div>
    <!-- 联系人 -->
    <van-address-list v-model="chosenAddressId"
                      :list="shippingAddress"
                      @add="onAdd"
                      @edit="onEdit"
                      @select="onBackAddress"
                      style="margin-top: 3rem"
                      :add-button-text="$t('order.addLocation')">
    </van-address-list>
    <!-- 路由出口 -->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script type="text/javascript">

import { mapState, mapMutations } from 'vuex'
import { Toast } from 'vant'
import { getLocalStore } from './../../../config/global.js'
// 引入发布订阅
import { CHOOSE_USER_ADDRESS } from './../../../config/pubsub_type.js'
import PubSub from 'pubsub-js'

export default {
  data () {
    return {
      chosenAddressId: 0,
    }
  },
  computed: {

    ...mapState(['shippingAddress']),
  },
  mounted () {
    this.INIT_USER_SHOPPING_ADDRESS();
  },
  components: {

  },
  methods: {
    ...mapMutations(['INIT_USER_SHOPPING_ADDRESS']),
    onClickLeft () {
      this.$router.back();
    },
    onAdd () {
      this.$router.push({ path: '/order/myAddress/addAddress' });
    },
    onEdit (item, index) {
      this.$router.push({ name: 'editAddress', params: { content: item } });
    },
    onBackAddress (item, index) {
      // 发布通知到订单界面修改值
      PubSub.publish(CHOOSE_USER_ADDRESS, item);
      // 返回到上一个界面
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#myAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 200;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      height: 20%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
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
  .van-address-list__add {
    bottom: 1rem;
  }
  .van-button--large {
    left: 15%;
    width: 70%;
    border-radius: 2rem;
    background-color: #45c763;
    border: none;
  }
}
</style>
