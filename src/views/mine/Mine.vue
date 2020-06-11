<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-06-11 09:23:52
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
              <div @click="goToPage('login')">{{$t('mine.login')}}</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 订单相关-->
    <van-cell-group>
      <van-cell :title="$t('mine.myOrder')"
                icon="label"
                :value="$t('mine.allOrder')"
                is-link
                @click="goTomyOrder(-1)">
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="$t(order.title)"
                       @click="goTomyOrder(index)" />
      </van-grid>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <van-cell :title="$t('mine.myBill')"
                icon="gold-coin"
                :value="userInfo.token?'2':''"
                @click="goToPage('couponList')"
                is-link />
      <van-cell :title="$t('mine.myLocation')"
                icon="todo-list"
                is-link
                @click="goToPage('myAddress')" />
    </van-cell-group>

    <van-cell-group style="margin-top:0.4rem">
      <van-cell is-link
                icon="vip-card"
                @click="goToPage('myVip')">
        <template slot="title">
          <span class="custom-title">{{$t('mine.myCar')}}</span>
          <van-tag type="danger"
                   :round=true>NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:0.4rem">
      <!-- 联系客服 -->
      <van-cell :title="$t('mine.servier')"
                icon="phone"
                :value="$t('mine.servierTime')"
                is-link />
      <!-- 意见反馈 -->
      <van-cell :title="$t('mine.feedback')"
                icon="comment-circle"
                is-link
                @click="onFeedBack" />
      <!-- 语言切换 -->
      <van-cell :title="$t('mine.switchLanguage')"
                icon="clock"
                @click="onSwitchLanguage"
                is-link />
    </van-cell-group>

    <div class="version">{{$t('mine.version')}}{{version}}</div>
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
        { icon: 'cart-circle-o', title: 'mine.itemsTitle[1]' },
        { icon: 'gift-o', title: 'mine.itemsTitle[2]' },
        { icon: 'smile-comment-o', title: 'mine.itemsTitle[3]' },
        { icon: 'cash-back-record', title: 'mine.waitingFeedback' }
      ],
      // 版本信息
      version: _VERSION_,
    }
  },
  mounted () {
    console.log("🎉 https://github.com/Geek-James/ddBuy 努力遇到最好的自己 ✨✨");
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
        message: this.$t('mine.unrealized'),
        duration: 1500
      })
    },
    goToPage (name) {
      this.$router.push({ name });
    },
    // 意见反馈
    onFeedBack () {
      Dialog.alert({
        confirmButtonText: this.$t('mine.tip2'),
        title: this.$t('mine.tip3'),
        message: this.$t('mine.tip4')
      }).then(() => {
        // on close
      });
    },
    // 切换语言
    onSwitchLanguage () {
      this.$router.push({ name: 'switchLanguage' });
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
