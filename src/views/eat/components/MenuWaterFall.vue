<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:25:50
 * @Description: 瀑布流及上拉加载
 * @FilePath: /ddBuy/src/views/eat/components/MenuWaterFall.vue
 -->
<template>
  <div class="container-water-fall">
    <waterfall :col='col'
               :data="data"
               @loadmore="loadmore">
      <div class="cell-item"
           v-for="(item,index) in data"
           :key="item.id">
        <img v-lazy="item.image">
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar"
                 v-lazy="item.author_avatar"
                 alt="">
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { getTodayMenuDetail } from './../../../serve/api/index.js'
import { Toast } from 'vant';

export default {
  data () {
    return {
      data: [],
      col: 2,
      menulistDetail: [],
      page: 1
    }
  },
  computed: {
  },
  mounted () {
    this._initData();
  },
  methods: {
    // 1.数据请求
    async _initData () {
      // 第一条数据
      let ref = await getTodayMenuDetail('/lk01');
      if (ref.success) {
        this.menulistDetail = ref.data.big_recommend.list;
        this.data = ref.data.big_recommend.list;
      }
    },
    loadmore (num) {
      let index = ++this.page;
      let param;
      if (index > 31) {
        Toast({
          message: $t('eat.tip_bottom'),
          duration: 800
        });
        return;
      } else {
        param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
      }
      getTodayMenuDetail(param).then(response => {
        if (response.success) {
          let newArray = response.data.big_recommend.list;
          this.data = this.data.concat(newArray);
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.container-water-fall {
  width: 100vw;
  box-sizing: border-box;
  background-color: #f5f5f5f5;
  .vue-waterfall {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 2rem;
  }
  h4 {
    padding-top: 56px;
    padding-bottom: 1rem;
    font-family: PingFangSC-Medium;
    font-size: 2rem;
    color: #000000;
    letter-spacing: 1px;
    text-align: justify;
  }
  .cell-item {
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: 0.3rem;
    img {
      border-radius: 12px;
      width: 100%;
      display: block;
      // 等比缩小图片来适应元素的尺寸
      background-size: contain;
      background-image: url("../../../images/placeholderImg/product-img-load.png");
    }
    .item-body {
      padding: 0.6rem;
      .item-desc {
        font-size: 0.8 rem;
        color: #333333;
        line-height: 1rem;
        font-weight: bold;
      }
      .item-footer {
        margin-top: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #999999;
        }
      }
    }
  }
}
</style>
