<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 09:53:07
 * @Description: 首页->TabBar组件
 * @FilePath: /ddBuy/src/views/home/components/tabbar/TabbarGoodsItem.vue
 -->
<template>
  <div id="tabbarItem">
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{$t(itemsTitle[0])}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <!-- 晚餐 -->
      <van-tab>
        <div slot="title">
          <span>{{$t(itemsTitle[1])}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
      <!-- 人气 -->
      <van-tab>
        <div slot="title">
          <span>{{$t(itemsTitle[2])}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <!-- 心选 -->
      <van-tab>
        <div slot="title">
          <span>{{$t(itemsTitle[3])}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import ProduceItem from './ProduceItem'
export default {
  props: {
    tabbar_all_product_list: Array,
    flash_sale_product_list: Array,
  },
  data () {
    return {
      active: 0,
      itemsTitle: ['common.all', 'home.dinner', 'home.popularity', 'home.goodChoose'],
    }
  },
  components: {
    ProduceItem
  }
}
</script>

<style lang="less" scoped>
#tabbarItem {
  width: 100%;
}
</style>
