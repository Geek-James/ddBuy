<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:18:59
 * @Description: 我的->我的订单->订单类型
 * @FilePath: /ddBuy/src/views/mine/Children/MyOrderChildren/OrderType.vue
 -->
<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0">
    </div>
    <div v-else
         class="noDataPlaceHold">
      <img src="./../../../../images/mine/noData.jpeg"
           alt="">
      <span class="desc">{{$t('mine.feedbackTip')}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    orderTypeDataArray: Array
  },
  mounted () {

  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
#orderType {
  margin-top: 5rem;
  height: 20rem;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
