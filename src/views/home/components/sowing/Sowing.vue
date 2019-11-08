<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-08 10:02:43
 * @Description: 首页->轮播组件
 * @FilePath: /ddBuy/src/views/home/components/sowing/Sowing.vue
 -->
<template>
  <swiper id="swiper"
          :options="swiperOption"
          ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(sowing,index) in sowing_list"
                  :key="sowing.public_id">
      <img :src="sowing.icon_url"
           :alt="sowing.public_name">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script type="text/javascript">
// 引入 swiper.css
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    // 接受父组件传过来的数据
    sowing_list: Array
  },
  data () {
    return {
      swiperOption: {
        // 进来就加载
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        //配置自动播放
        autoplay: {
          delay: 3000,
          // 最后一个是否停止
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        // 配置速度
        speed: 600,
        // 滑动后回调函数
        on: {
          slideChangeTransitionEnd () {
          },
          //   preventLinksPropagation: false
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {

  },
  computed: {
    // 拿到swiper对象
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  }
}
</script>

<style scoped>
#swiper {
  padding-top: 6rem;
  width: 95%;
  height: 10rem;
  border-radius: 1rem;
}
#swiper img {
  width: 100%;
  height: 100%;
}
/*
穿透修改样式
*/
#swiper >>> .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper >>> .swiper-pagination-bullet {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0;
}
</style>
