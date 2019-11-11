<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 14:59:50
 * @Description: 项目根入口
 * @FilePath: /ddBuy/src/views/dashboard/Dashboard.vue
 -->
<template>
  <div id="dashboard">
    <van-tabbar v-model="active"
                class="active_tab"
                active-color="#75a342">
      <van-tabbar-item v-for="(item,index) in tabbars"
                       :key="index"
                       @click="tab(index,item.name)"
                       :info="item.name=='cart'?goodsNum:''">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon"
                  slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 是否缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script type="text/javascript">
import { setStore } from '../../config/global.js'
import { setLocalStore, getLocalStore } from '../../config/global.js'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "DashBoard",
  mounted () {
  },
  created () {
    //通过路由跳转绑定Tabbar的选中
    switch (this.$route.name) {
      case 'home':
        this.active = 0;
        break;
      case 'category':
        this.active = 1;
        break;
      case 'eat':
        this.active = 2;
        break;
      case 'cart':
        this.active = 3;
        break;
      case 'mine':
        this.active = 4;
        break;
      default:
        break;
    }
  },
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: require("@/images/tabbar/home_default.png"),
          active: require("@/images/tabbar/home_selected.png")
        },
        {
          name: "category",
          title: "分类",
          normal: require("@/images/tabbar/category_default.png"),
          active: require("@/images/tabbar/category_selected.png")
        },
        {
          name: "eat",
          title: "吃什么",
          normal: require("@/images/tabbar/eat_default.png"),
          active: require("@/images/tabbar/eat_selected.png"),
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("@/images/tabbar/shoppingcart_default.png"),
          active: require("@/images/tabbar/shoppingcart_selected.png"),
          num: 5
        },
        {
          name: "mine",
          title: "我的",
          normal: require("@/images/tabbar/mine_default.png"),
          active: require("@/images/tabbar/mine_selected.png")
        }
      ]
    };
  },
  components: {
  },
  mounted () {
    this._initData();
  },
  computed: {
    ...mapState(['shopCart'], ['userInfo']),
    goodsNum () {
      let num = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num;
      });
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    // ...mapActions(['autoLogin']),
    // 1.点击tabbar触发的方法
    tab (index, val) {
      this.currIndex = index;
      this.$router.push(val);
      // 将索引保存到本地
      //   setLocalStore('tatbarActive', index);
    },
    // 2.初始化购物车数据
    _initData () {
      this.INIT_SHOP_CART();
      this.INIT_USER_INFO();
    }
  }
}
</script>       
<style lang="less" scoped>
/*转场动画*/
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
