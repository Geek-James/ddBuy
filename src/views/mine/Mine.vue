<template>
  <div id="mine">
    <van-nav-bar title="我的"
                 :fixed=true
                 :border=false
                 style="height:2.5rem"></van-nav-bar>
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg"
               v-if="userInfo.token"
               @click="goToUserCenter">
            <img class="iconImage"
                 :src="user_image.login_icon"
                 alt="">
            <div class="personInfo"
                 v-if="userInfo.token">
              <span>{{userInfo.user_name}}</span>
              <span>手机号：{{phoneNumber}}</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg"
               v-if="!userInfo.token">
            <img class="iconImage"
                 :src="user_image.noLogin_icon"
                 alt="">
            <div class="personInfo"
                 v-if="!userInfo.token">
              <div @click="login">立即登录</div>
            </div>
          </div>

        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关-->
    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link>
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title" />
      </van-grid>
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                value="1张"
                is-link></van-cell>
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card">
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger"
                   :round=true>NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link></van-cell>
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="叮咚买菜APP"
                icon="gem"
                value="下载APP体验更佳"
                is-link></van-cell>
    </van-cell-group>
    <!--路由的出口-->
    <transition name="router-slider"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
// 引入vuex
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // 头像
      user_image: {
        login_icon: require('./../../images/mine/defaultImg.jpeg'),
        noLogin_icon: require('./../../images/login/grey.jpg')
      },
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ]
    }
  },
  computed: {
    ...mapState(['userInfo']),
    phoneNumber () {
      // 设置隐藏手机号中间四位
      var mobile = String(this.userInfo.phone)
      var reg = /^(\d{3})\d{4}(\d{4})$/
      return mobile.replace(reg, '$1****$2')
    }
  },
  components: {

  },
  methods: {
    // 1.跳转到登录界面
    login () {
      this.$router.push('/login');
    },
    // 2.跳转到用户中心
    goToUserCenter () {
      this.$router.push('/dashboard/Mine/userCenter');
    }
  }
}
</script>

<style lang="less" scoped>
#mine {
  width: 100%;
  //   height: 100%;
  background-color: #f5f5f5;
  .van-nav-bar {
    background-color: #45c763;
    font-size: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  .personMsg {
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
  }
  .van-cell__left-icon {
    color: #45c763;
    font-size: 1.2rem;
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
