<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 14:58:49
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
          <span>{{itemsTitle[0]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <!-- 晚餐 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list" />
      </van-tab>
      <!-- 人气 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list" />
      </van-tab>
      <!-- 心选 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
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
      itemsTitle: ['全部', '晚餐', '人气', '心选'],
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
