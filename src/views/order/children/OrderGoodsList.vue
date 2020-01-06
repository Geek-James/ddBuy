<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 15:57:40
 * @Description: 订单->订单商品详情
 * @FilePath: /ddBuy/src/views/order/children/OrderGoodsList.vue
 -->
 <template>
  <div id="orderGoodsList">
    <van-nav-bar :title="$t('order.goodsList')"
                 left-arrow
                 :fixed=true
                 @click-left="onClickLeft" />
    <div class="listitle">
      <span>{{$t('order.goods')}}</span>
      <span class="total">{{selectedCount}}</span>
    </div>
    <ul>
      <li class="goodsList"
          v-for="(item,index) in
          goods"
          :key=index>
        <div class="listItem">
          <img :src="item.smallImage"
               alt="">
        </div>
        <div class="textDetail">
          <p class="name">{{item.name}}</p>
          <span class="subParam">{{$t('order.sigalPrice')}}{{item.price | moneyFormat}}</span>
          <span class="subParam">{{$t('order.numbers')}}{{item.num}}</span>
        </div>
        <div class="goodPrice">{{item.price*item.num | moneyFormat}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // 从store中取选中的商品信息
    ...mapGetters({
      selectedCount: 'SELECTED_GOODS_COUNT',
      goods: 'SELECTED_GOODS',
    }),
  },
  data () {
    return {
    }
  },
  components: {

  },
  methods: {
    onClickLeft () {
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#orderGoodsList {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 200;
  overflow-y: auto;
  overflow-x: hidden;
  .listitle {
    padding-left: 0.5rem;
    margin-top: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    width: 100%;
    background-color: white;
    border-bottom: solid 0.01rem #e8e9e8;
    font-size: 0.9rem;
    .total {
      padding-right: 2rem;
      font-size: 0.9rem;
      float: right;
    }
  }
  .goodsList {
    display: flex;
    height: 3rem;
    width: 100%;
    background-color: white;
    border-bottom: solid 0.01rem #e8e9e8;
    .listItem {
      height: 3rem;
      width: 10%;
      img {
        padding: 0.5rem;
        width: 100%;
        height: 2.5rem;
      }
    }
    .textDetail {
      height: 3rem;
      width: 70%;
      padding-left: 0.9rem;
      .name {
        font-size: 0.8rem;
        padding: 0.3rem 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .subParam {
        font-size: 0.6rem;
        color: grey;
        padding-right: 0.5rem;
      }
    }
    .goodPrice {
      padding-top: 0.3rem;
      font-size: 0.8rem;
    }
  }
}
</style>
