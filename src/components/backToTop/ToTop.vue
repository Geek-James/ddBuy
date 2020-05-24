<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-05-24 21:06:10
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
    //回到顶部
    toTop () {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30)
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