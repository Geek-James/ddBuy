<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-05-24 20:44:46
 * @Description: 回到顶部组件
 * @FilePath: /ddBuy-dev/src/components/backToTop/ToTop.vue
 -->
<template>
  <transition name="moveR">
    <div class="scrollTop"
         v-show="showTop"
         @click="toTop">

      <svg-icon iconClass="backtotop"
                class="backtotop" />
    </div>
  </transition>
</template>
<script>
import SvgIcon from "../SvgIcon/index";
export default {
  components: { SvgIcon },
  name: 'scroll-top',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop: function () {
      let value = this.scrollTop > 200 ? true : false;
      return value;
    },
  },
  mounted () {
    //监听scroll事件
    window.addEventListener('scroll', this.throttler(this.getScrollTop, 300));
  },
  methods: {
    toTop (e) {
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function () { _this.gotoTop(_this.scrollTop - _this.dParams) }, 10);
    },
    gotoTop (distance) {
      this.dParams += 20;
      distance = distance > 0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if (this.scrollTop < 10) {
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log('页面滚动了' + this.scrollTop);
    },
    // 创建一个节流函数用来减少getScrollTop方法的执行 
    // 固定时间为300ms
    throttler (fn, time) {
      console.log("来了老弟,和我一起愉快的玩耍吧~");
      let timeOut = null;
      // 创建闭包
      return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          fn.apply(this, arguments);
        }, time);
      }
    }
  },
}
</script>
<style scoped>
.backtotop {
  width: 2.5rem;
  height: 2.5rem;
}
.scrollTop {
  right: 0;
  position: fixed;
  bottom: 5rem;
  cursor: pointer;
  z-index: 100;
}
.moveR-enter-active,
.moveR-leave-active {
  transition: all 0.2s linear;
  transform: translateX(0);
}
.moveR-enter,
.moveR-leave {
  transform: translateX(100%);
}
.moveR-leave-to {
  transform: translateX(100%);
}
</style>