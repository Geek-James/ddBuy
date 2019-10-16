<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar title="我的地址"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <!-- 联系人 -->
    <van-address-list v-model="chosenAddressId"
                      :list="list"
                      @add="onAdd"
                      @edit="onEdit"
                      style="margin-top: 3rem"
                      add-button-text="+ 增加新地址">

    </van-address-list>
    <van-cell :border=false
              title="单元格"
              value="内容" />
    <!-- 路由出口 -->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script type="text/javascript">
import { Toast } from 'vant'
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  components: {

  },
  methods: {
    onClickLeft () {
      this.$router.back();
    },
    onAdd () {
      this.$router.push({ path: '/order/myAddress/addAddress' });
    },

    onEdit (item, index) {
      this.$router.push({ path: '/order/myAddress/editAddress' });
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
  background-color: #f5f5f5;
  z-index: 200;

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
