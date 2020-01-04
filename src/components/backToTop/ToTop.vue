<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-04 15:32:21
 * @Description: 回到顶部组件
 * @FilePath: /ddBuy/src/components/backToTop/ToTop.vue
 -->
<template>
  <div class="scrollTop"
       v-show="showTop"
       @click="toTop">
    <svg-icon iconClass="backtotop"
              class="backtotop" />
  </div>
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
    window.addEventListener('scroll', this.getScrollTop);
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
</style>