<template>
  <div id="tabbarItem">
    <van-tabs v-model="active"
              ref="tabs"
              sticky
              color="#28BE57"
              title-active-color="#28BE57"
              animated:yes>
      <van-tab v-for="(item,index) in items"
               :key="item.id"
               :title="item.title">
        <ProduceItem :tabbar_all_product_list="tabbar_all_product_list"></ProduceItem>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="text/javascript">
import ProduceItem from './ProduceItem'
export default {
  props: {
    tabbar_all_product_list: Array
  },
  data () {
    return {
      active: 0,
      items: [
        { id: 1, title: '全部' },
        { id: 2, title: '晚餐' },
        { id: 3, title: '人气' },
        { id: 4, title: '心选' }]
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
