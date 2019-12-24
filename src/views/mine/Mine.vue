<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2019-12-24 13:53:22
 * @Description: 我的
 * @FilePath: /ddBuy/src/views/mine/Mine.vue
 -->
<template>
  <div id="mine">
    <van-nav-bar :title="$t('mine.title')"
                 :fixed=true
                 :border=false
                 style="height:2.5rem" />
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg"
               v-if="userInfo.token"
               @click="goToPage('userCenter')">
            <img class="iconImage"
                 :src="user_image.login_icon"
                 alt="">
            <div class="sex"
                 v-if="userInfo.sex">
              <img :src="userInfo.sex=='1'?user_image.female:user_image.male"
                   alt="">
            </div>
            <div class="personInfo"
                 v-if="userInfo.token">
              <span>{{userInfo.user_name}}</span>
              <span>{{$t('mine.phone')}}：{{phoneNumber}}</span>
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
              <div @click="goToPage('login')">立即登录</div>
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
                is-link
                @click="goTomyOrder(-1)">
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                       @click="goTomyOrder(index)" />
      </van-grid>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                :value="userInfo.token?'2张':''"
                @click="goToPage('couponList')"
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                @click="goToPage('myAddress')" />
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                @click="goToPage('myVip')">
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
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                @click="onFeedBack" />
    </van-cell-group>
    <div class="version">当前版本{{version}}</div>
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
import { Dialog, Toast } from 'vant'
import { _VERSION_ } from './../../config/global'

export default {
  data () {
    return {
      // 头像
      user_image: {
        login_icon: require('./../../images/mine/defaultImg.jpeg'),
        noLogin_icon: require('./../../images/login/grey.jpg'),
        female: require('./../../images/mine/female.png'),
        male: require('./../../images/mine/male.png')
      },
      // 订单状态
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ],
      version: _VERSION_,           // 版本信息
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
  methods: {
    // 跳转到我的订单
    goTomyOrder (index) {
      if (index !== 3) {
        return this.$router.push({ name: "myOrder", params: { active: index + 1 } });
      }
      // 跳转到售后退款界面
      Toast({
        message: '退款页面尚未开通啦!',
        duration: 1500
      })
    },
    goToPage (name) {
      this.$router.push({ name });
    },
    // 意见反馈
    onFeedBack () {
      Dialog.alert({
        confirmButtonText: '记得点个小星❤️哦~',
        title: '💘感谢您的关注💘',
        message: 'GitHub上搜索 \nGeek-James/ddBuy \n🦉欢迎提出优化建议🙉'
      }).then(() => {
        // on close
      });
    }
  }
}
</script>

<style lang="less" scoped>
#mine {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
  .version {
    margin: 0 auto;
    text-align: center;
    font-size: 0.6rem;
    background-color: #ffffff;
    height: 2rem;
    color: grey;
    line-height: 2rem;
  }
  .van-nav-bar {
    background-color: #3bba63;
    font-size: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  .personMsg {
    display: flex;
    align-items: center;
    .sex {
      position: absolute;
      top: 3.5rem;
      left: 3.8rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
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
