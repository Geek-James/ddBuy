<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 15:02:56
 * @Description: 我的->我的绿卡
 * @FilePath: /ddBuy/src/views/mine/Children/MyVip.vue
 -->
<template>
  <div id="myVip"
       ref="myVip">
    <div v-if="!isShowLoading">
      <van-nav-bar :title="$t('mine.greenCard')"
                   :border=false
                   :fixed="true"
                   @click-left="onClickLeft"
                   left-arrow
                   style="height:2.5rem" />
      <div class="vipHeader">
        <img src="./../../../images/mine/vip.png"
             alt="">
      </div>
      <div class="vipPrivilege">
        <p class="title">{{$t('mine.greenCardPower')}}</p>
        <van-grid :border=false>
          <van-grid-item icon="vip-card-o"
                         :text="$t('mine.cardTip1')" />
          <van-grid-item icon="discount"
                         :text="$t('mine.cardTip2')" />
          <van-grid-item icon="gem-o"
                         :text="$t('mine.cardTip3')" />
          <van-grid-item icon="more-o"
                         :text="$t('mine.cardTip4')" />
        </van-grid>
        <div class="becomVipBtn"
             @click="goToPayPage">{{$t('mine.fiftypecert')}}</div>
      </div>
      <!-- 第1部分 -->
      <div class="coupons">
        <!--今日专享券 -->
        <span class="number">1</span><span class="desc">{{$t('mine.cardRecoamnd')}}</span>
        <p class="todayCouns">{{$t('mine.TodayExclusivecoupon')}}<i>{{$t('mine.everyUpadate')}}</i></p>
        <div class="quanBox">
          <div class="quan"
               v-for="(item,index) in todayTicket"
               :key="item.id"
               @click="getCoupons">
            <div class="money"><i>¥</i>{{item.money}}</div>
            <div class="couponsConditions">{{$t('mine.to')}}{{item.pay_min}}{{$t('mine.toUse')}}</div>
            <div class="couponsScope">{{item.description}}</div>
            <div class="getCopons">
              {{$t('mine.immeatallyGet')}}
            </div>
          </div>
        </div>
        <!--本周专享券-->
        <p class="todayCouns">{{$t('mine.weekBill')}}</p>
        <div class="quanBox">
          <div class="quan"
               v-for="(item,index) in weekTicket"
               :key="item.id"
               @click="getCoupons">
            <div class="money"><i>¥</i>{{item.money}}</div>
            <div class="couponsConditions">{{$t('mine.to')}}{{item.pay_min}}{{$t('mine.toUse')}}</div>
            <div class="couponsScope">{{item.description}}</div>
            <div class="getCopons">
              {{$t('mine.immeatallyGet')}}
            </div>
          </div>
        </div>
      </div>
      <!-- 第2部分 -->
      <div class="coupons">
        <span class="number">2</span><span class="desc">{{$t('mine.billTip')}}</span>
        <div class="integralBox">
          <div class="leftBox">
            <div class="leftBoxTitle">{{$t('mine.currentGoods')}}</div>
            <div class="leftBoxSubTitle">{{$t('mine.cardBack')}}<i>{{$t('mine.onece')}}</i></div>
          </div>
          <div class="rightBox">
            <div class="rightBoxTitle">{{$t('mine.cardShop')}}</div>
            <div class="rightBoxSubTitle">{{$t('mine.cardBack')}}<i>{{$t('mine.twice')}}</i></div>
            <div class="line"></div>
            <img src="./../../../images/mine/rockets.png"
                 alt="">
          </div>
        </div>
        <div class="integralToFast"
             @click="goToPayPage">{{$t('mine.cardSpecialTip')}}</div>
      </div>
      <!-- 第3部分 -->
      <div class="coupons">
        <span class="number">3</span><span class="desc">{{$t('mine.cardSpecial')}}</span>
        <!-- 可横向滑动的菜单 -->
        <van-sticky :offset-top="40">
          <VipMenuTitleScroll :menuTitlesArray="cate"
                              @menuTitleClick="menuTitleClick" />
        </van-sticky>
        <!-- Vip商品列表 -->
        <VipGoodsItems :vipCateDetail="cateDetail" />
      </div>
    </div>
    <!-- 底部按钮 -->
    <transition name="fade">
      <div class="bottomJoinVip"
           v-show="isShowBottomBtn"
           transiton="fade">
        <div class="bottomDesc">
          <span class="yearCart">{{$t('mine.yearCard')}}</span><i>{{$t('mine.cardPrisea')}}</i><span class="originPrice">{{$t('mine.cardPriseb')}}</span>
        </div>
        <div class="joinVip"
             @click="goToPayPage">
          {{$t('mine.openCards')}}
        </div>
      </div>
    </transition>
    <!-- 数据加载提示gif -->
    <Loading :show="isShowLoading" />
  </div>
</template>

<script type="text/javascript">

import { Dialog } from 'vant'
import { getVipContent } from './../../../serve/api/index.js'

// 水平滑动组件
import VipMenuTitleScroll from './MyVipChildren/VipMenuTitleScroll'
// 商品列表组件
import VipGoodsItems from './MyVipChildren/VipGoodsItems'

import Loading from '../../../components/loading/LoadingGif'

export default {
  data () {
    return {
      todayTicket: [],//今日更新
      weekTicket: [],// 本周更新
      cate: [],      // 分类标题
      cateDetail: [],
      isShowLoading: true,
      currentSubTitle: 0,
      isShowBottomBtn: false
    }
  },
  created () {

  },
  mounted () {
    // 初始化数据
    this._initData();
    let box = this.$refs.myVip;
    box.addEventListener('scroll', () => {
      this.handleScroll();
    }, false);
  },
  components: {
    Loading,
    VipMenuTitleScroll,
    VipGoodsItems
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.back();
    },
    // 数据请求
    async  _initData () {
      let ref = await getVipContent();
      if (ref.success) {
        // 设置数据
        this.todayTicket = ref.data.today_ticket.tickets;
        this.weekTicket = ref.data.week_ticket.tickets;
        this.cate = ref.data.cate;
        this.cateDetail = ref.data.cate_detail
        // 隐藏动画
        this.isShowLoading = false;
      }
    },
    // 领取优惠券
    getCoupons () {
      Dialog.confirm({
        message: '开通绿卡,立享此券',
        confirmButtonText: "开卡领券",
        confirmButtonColor: '#60b86a'
      }).then(() => {
        // 跳转到开通会员界面
        this.$router.push({ name: 'vipPay' });
      }).catch(() => {
        // on cancel
      });
    },
    // 开通绿卡支付
    goToPayPage () {
      this.$router.push({ name: 'vipPay' });
    },
    // 监听页面滑动显示和隐藏底部Button
    handleScroll () {
      var scrollTop = this.$refs.myVip.scrollTop;
      if (scrollTop > 500) {
        this.isShowBottomBtn = true;
      } else {
        this.isShowBottomBtn = false;
      }
    },
    // 处理子组件VipMenuTitleScroll传递的事件
    menuTitleClick (index) {

    }
  }
}
</script>
<style lang="less" scoped>
#myVip {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 100;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  .van-nav-bar {
    background-color: #303747;
    font-size: 0.6rem;
    .van-icon {
      color: #ffffff;
    }
  }
  .van-nav-bar__title {
    color: #ffffff;
  }
  .vipHeader {
    width: 100%;
    height: 10rem;
    margin-top: 2.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .vipPrivilege {
    background-color: #ffffff;
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    .title {
      padding-left: 1rem;
      font-size: 1rem;
      color: black;
      font-weight: bolder;
    }
    .becomVipBtn {
      margin-top: 0.5rem;
      width: 60%;
      height: 2.5rem;
      line-height: 2.5rem;
      background-color: #303747;
      text-align: center;
      border-radius: 2rem;
      margin: 0 auto;
      color: #5fa85f;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
  .coupons {
    margin-top: 1rem;
    width: 100%;
    background-color: #ffffff;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .number {
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      background-color: #60b86a;
      color: white;
      padding: 0 0.3rem;
      border-radius: 0.1rem;
    }
    .desc {
      font-size: 1rem;
      padding-left: 0.5rem;
      color: black;
      font-weight: bolder;
    }
    .todayCouns {
      padding-top: 1rem;
      font-size: 0.7rem;
      i {
        color: grey;
        padding-left: 0.4rem;
      }
    }
    .quanBox {
      display: flex;
      justify-content: start;
      flex-flow: wrap;
      min-height: 4rem;
      .quan {
        padding-left: 0.6rem;
        position: relative;
        margin-top: 0.6rem;
        margin-right: 5%;
        width: 40%;
        height: 4rem;
        border-left: 2px dashed #60b86a;
        border-top: 1px solid #60b86a;
        border-bottom: 1px solid #60b86a;
        border-radius: 0 2px 2px 0;
        .getCopons {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 0.7rem;
          color: #ffffff;
          writing-mode: vertical-rl;
          border-radius: 0 2px 2px 0;
          width: 1.4rem;
          height: 4rem;
          line-height: 1.5rem;
          text-align: center;
          background-color: #60b86a;
        }
        .money {
          color: #60b86a;
          font-size: 2rem;
          i {
            font-size: 1rem;
          }
        }
        .couponsConditions {
          font-size: 0.7rem;
          color: #565656;
        }
        .couponsScope {
          padding-top: 0.4rem;
          font-size: 0.7rem;
          width: 90%;
          color: #60b86a;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .integralBox {
      margin-top: 0.6rem;
      padding-right: 2rem;
      display: flex;
      .leftBox {
        width: 38%;
        height: 0;
        border-right: 4rem solid transparent;
        border-top: 3.5rem solid #dbdbdb;
        border-radius: 0.5rem 0 0 0;
        .leftBoxTitle {
          margin-top: -3rem;
          margin-left: 1rem;
          font-size: 0.5rem;
          color: black;
        }
        .leftBoxSubTitle {
          margin-left: 1rem;
          padding-top: 0.3rem;
          font-size: 0.7rem;
          i {
            color: black;
            font-size: 0.9rem;
          }
        }
      }
      .rightBox {
        position: relative;
        width: 38%;
        height: 0;
        border-left: 4rem solid transparent;
        border-top: 3.5rem solid #6bbe66;
        transform: rotateX(180deg);
        margin-left: -3.2rem;
        border-top-right-radius: 0.5rem;
        .rightBoxTitle {
          margin-top: -1.3rem;
          font-size: 0.5rem;
          color: black;
          transform: rotateX(-180deg);
        }
        .rightBoxSubTitle {
          margin-top: -1.75rem;
          transform: rotateX(-180deg);
          font-size: 0.7rem;
          i {
            color: black;
            font-size: 0.9rem;
          }
        }
        .line {
          margin-top: -1.6rem;
          margin-left: -130%;
          width: 190%;
          height: 0.5rem;
          background-image: linear-gradient(to left, #fbec53, #7affaf);
          border-radius: 0.3rem;
        }
        img {
          top: -2.3rem;
          right: -1.2rem;
          position: absolute;
          transform: rotateX(-180deg);
          width: 3rem;
          height: 3rem;
        }
      }
    }
    .integralToFast {
      width: 60%;
      height: 2.5rem;
      line-height: 2.5rem;
      background-color: #303747;
      text-align: center;
      border-radius: 2rem;
      margin: 0 auto;
      color: #5fa85f;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      font-weight: bold;
    }
    .vipSubTitleWrapper {
      width: 100%;
      height: 2.8rem;
      display: inline-block;
      white-space: nowrap;
      border-bottom: solid 0.01rem #e8e9e8;
      overflow: hidden;
      background-color: white;
      .vipTitle {
        display: inline-block;
        font-size: 0.73rem;
        padding: 1rem;
      }
      .selected {
        color: #3cb963;
      }
    }
  }
  .bottomJoinVip {
    position: fixed;
    display: flex;
    bottom: 0.6rem;
    height: 2.5rem;
    width: 90%;
    left: 5%;
    right: 5%;
    z-index: 999;
    border-radius: 1.5rem;
    .bottomDesc {
      background-color: #303747;
      width: 70%;
      border-radius: 1.5rem 0 0 1.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      justify-content: flex-start;
      padding-left: 1rem;
      color: white;
      font-size: 0.8rem;
      i {
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        color: #f2525a;
      }
      .originPrice {
        font-size: 0.6rem;
        text-decoration: line-through;
      }
    }
    .joinVip {
      text-align: center;
      width: 30%;
      height: 2.5rem;
      line-height: 2.5rem;
      background-color: #3cb963;
      border-radius: 0 1.5rem 1.5rem 0;
      color: white;
      font-size: 0.8rem;
    }
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      transition: opacity 3s;
    }
    .fade-leave-to {
      opacity: 0;
    }
    .fade-leave-active {
      transition: opacity 3s;
    }
  }
}
</style>
