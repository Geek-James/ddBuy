<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:25:33
 * @Description: 吃什么->下拉菜单
 * @FilePath: /ddBuy/src/views/eat/components/MenuCategoryLists.vue
 -->
<template>
  <div id="allMenuWrapper">
    <div class="menuLists"
         ref="menuLists"
         v-show="isShowMenuList">
      <div class="menuWrapper">
        <span class="menuCategoryTitle"
              v-if="recentlyChooseLists.length>0">{{$t('eat.recent')}}</span>
        <ul class="contentTip">
          <li v-for="(item,index) in recentlyChooseLists"
              :key="item.id"
              class="item">{{item.name}}</li>
        </ul>
        <span class="menuCategoryTitle">{{$t('eat.menuDevide')}}</span>
        <ul class="contentTip">
          <li class="item"
              v-for="(item,index) in todayMenuCategoryLists"
              :key="item.id"
              @click="menuTitleClick(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <!-- 使用vue-waterfall2 组件 完成的瀑布流 效果良好-->
    <MenuWaterFall v-show="!isShowMenuList"></MenuWaterFall>

  </div>
</template>

<script type="text/javascript">
import MenuWaterFall from './MenuWaterFall'

// 引入通知
import Pubsub from 'pubsub-js'
import { EAT_MENUTITLE_CLICK } from '../../../config/pubsub_type.js'

// 导入本地存储
import { setLocalStore, getLocalStore } from './../../../config/global.js'

export default {
  props: {
    // 父组件传下来的数据
    todayMenuCategoryLists: Array,
    isShowMenuList: Boolean,
  },
  data () {
    return {
      recentlyChooseLists: []
    }
  },
  components: {
    MenuWaterFall
  },
  methods: {
    menuTitleClick (index) {
      // 1.发送通知改变顶部标题的选中
      Pubsub.publish(EAT_MENUTITLE_CLICK, index);
      // 2.通知父组件来隐藏当前菜单栏
      this.$emit('hiddenMenu');
      // 3.将选中的值赋值给最近选中的数组里且保证数组只有8个 
      if (this.recentlyChooseLists.length <= 7) {
        // 3.1 添加到数组的第一个
        this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index]);
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists));
      } else {
        // 3.2 先末尾移除一个
        this.recentlyChooseLists.pop();
        // 3.3 数组开头添加一个
        this.recentlyChooseLists.unshift(this.todayMenuCategoryLists[index])
        // 3.4 数组去重
        this.recentlyChooseLists = Array.from(new Set(this.recentlyChooseLists));
      }
    }
  }
}
</script>

<style lang="less" scoped>
.menuLists {
  padding: 0.5rem;
  width: 100%;
  background-color: white;
  overflow: auto;
  .menuCategoryTitle {
    font-size: 0.6rem;
    color: grey;
  }
  .menuWrapper {
    .contentTip {
      padding: 0.5rem;
      display: flex;
      flex-flow: row wrap;
      .item {
        text-align: center;
        margin-right: 1.45rem;
        margin-top: 0.4rem;
        width: 3.3rem;
        line-height: 1.5rem;
        height: 1.5rem;
        font-size: 0.6rem;
        border-radius: 1rem;
        color: rgba(0, 0, 0, 0.7);
        border: 1px solid #dedede;
      }
    }
  }
}
</style>
