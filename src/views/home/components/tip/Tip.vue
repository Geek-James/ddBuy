<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:17:58
 * @Description: 首页->Tip组件
 * @FilePath: /ddBuy/src/views/home/components/tip/Tip.vue
 -->
<template>
  <div id="tip">
    <!-- <div class="tipContent"> -->
    <div class="tipBox">
      <img src="../../../../images/icon/transport.png"
           alt="">
      <span class="tipText">最快29分钟送达</span>
    </div>
    <div class="tipBox">
      <img src="../../../../images/icon/money.png"
           alt="">
      <span class="tipText">0元起送 0配送费</span>
    </div>
    <div class="tipBox">
      <img src="../../../../images/icon/seal.png"
           alt="">
      <span class="tipText">安心退</span>
    </div>
    <div>
      <img class="adImg"
           src="http:\/\/img.ddimg.mobi\/o_1dkib68ka1t1i1l0cctkvgi1s0e10.jpg">
      <div class="adTitle">点击<br>
        领取
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {

  data () {
    return {
    }
  },
}
</script>

<style lang="less" scoped>
#tip {
  //   display: flex;
  margin-top: 0.3rem;
  position: relative;
}

.tipBox {
  float: left;
  width: 33%;
  text-align: center;
}

.tipBox img {
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}

.tipText {
  font-size: 0.6rem;
  color: #45c763;
}
.adImg {
  margin-top: 0.5rem;
  width: 100%;
  height: 6rem;
}
.adTitle {
  position: absolute;
  top: 3.4rem;
  right: 0.3rem;
  width: 3rem;
  height: 3rem;
  line-height: 1.4rem;
  border-radius: 50%;
  font-size: 0.6rem;
  text-align: center;
  color: gold;
  background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
  -webkit-animation-name: scaleDraw; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite; /*动画播放的次数*/
  -webkit-animation-duration: 3s; /*动画所花费的时间*/

  @keyframes scaleDraw {
    /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0% {
      transform: scale(1); /*开始为原始大小*/
    }
    25% {
      transform: scale(1.1); /*放大1.1倍*/
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
  }
}
</style>
