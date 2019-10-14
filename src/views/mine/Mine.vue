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
          <div class="personMsg">
            <img class="iconImage"
                 src="./../../images/mine/defaultImg.jpeg"
                 alt="">
            <div class="personInfo">
              <span>极客James</span>
              <span>手机号：12345679876</span>
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
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ]
    }
  },
  components: {

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
}
</style>
