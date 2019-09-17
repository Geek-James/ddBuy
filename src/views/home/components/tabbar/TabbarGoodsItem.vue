<template>
  <div id="tabbarItem">
    <van-tabs v-model="active"
              animated
              swipeable
              ref="tabs"
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list"></ProduceItem>
      </van-tab>
      <!-- 晚餐 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list"></ProduceItem>
      </van-tab>
      <!-- 人气 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <ProduceItem :product_lists="tabbar_all_product_list"></ProduceItem>
      </van-tab>
      <!-- 心选 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <ProduceItem :product_lists="flash_sale_product_list"></ProduceItem>
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
