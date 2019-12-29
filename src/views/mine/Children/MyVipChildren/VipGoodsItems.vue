<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2019-12-29 23:34:20
 * @Description: 我的->我的绿卡->绿卡产品列表
 * @FilePath: /ddBuy/src/views/mine/Children/MyVipChildren/VipGoodsItems.vue
 -->
<template>
  <div id="vipGoodsItems">
    <!-- 商品内容列表 -->
    <section class="r_list"
             ref="r_list">
      <div>
        <ul>
          <li v-for="(item,index) in vipCateDetail"
              :key="index"
              class="list ">
            <div class="list_item flex">
              <p>
                <img :src="item.small_image"
                     alt="">
              </p>
              <div>
                <p class="name">{{item.product_name}}</p>
                <p class="des">{{item.spec}}</p>
                <p class="originPrice">{{item.origin_price | moneyFormat}}</p>
                <p class="price">{{item.price | moneyFormat}}
                  <van-tag plain
                           mark
                           color="#5fa85f">{{$t('mine.openCard')}}</van-tag>
                </p>
                <div class="iconCartWrapper">
                  <svg-icon iconClass="car_disable"
                            style="width:1.3rem;height:1.3rem" />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="bottomTip">{{$t('mine.moreMessage')}}</div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    vipCateDetail: Array
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
#vipGoodsItems {
  .r_list {
    overflow: hidden;
    // 防止抖动
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    padding-bottom: 3rem;
    .productCategoryTitle {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
      border-left: 3px solid #d9dde1;
      height: 0.32rem;
      width: 100%;
      font-size: 0.73rem;
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
      padding-left: 0.28rem;
    }
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .list {
      padding: 0.36rem 0.36rem 0 0.36rem;
      img {
        width: 4.0625rem;
        height: 4.0625rem;
        border-radius: 0.04rem;
      }
      .list_item {
        justify-content: flex-start;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        padding-bottom: 1rem;
        position: relative;
        & > div {
          margin-left: 0.2rem;
          .name {
            font-size: 0.8375rem;
            color: rgb(7, 17, 27);
            margin-bottom: 0.16rem;
          }
          .des,
          .sale {
            padding: 0.2rem;
            line-height: 0.8rem;
            font-size: 0.65rem;
            color: rgb(147, 153, 159);
            margin-bottom: 0.16rem;
          }
          .sale {
            margin-bottom: 0;
            span {
              margin-left: 0.24rem;
            }
          }
          .originPrice {
            margin-top: 0.5rem;
            font-size: 0.6875rem;
            color: #8f8f8f;
          }
          .price {
            font-size: 0.8rem;
            padding-top: 0.3rem;
            color: #5fa85f;
          }
          .add {
            position: absolute;
            right: 0;
            bottom: 0.28rem;
          }
          .iconCartWrapper {
            position: absolute;
            width: 1.875rem;
            top: 3.4rem;
            right: 0.6rem;
          }
          .icon {
            fill: #999;
            width: 1rem;
            height: 1rem;
          }
          .iconCart {
            display: block;
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
    .bottomTip {
      padding-top: 0.8rem;
      color: grey;
      font-size: 0.8rem;
      text-align: center;
    }
  }
}
</style>
