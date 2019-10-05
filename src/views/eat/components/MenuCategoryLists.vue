<template>
  <div id="allMenuWrapper">
    <div class="menuLists"
         ref="menuLists"
         v-if="isShowMenuList">
      <div class="menuWrapper">
        <span class="menuCategoryTitle">最近找过</span>
        <ul class="contentTip">
          <li class="item">请客吃饭</li>
          <li class="item">一人</li>
          <li class="item">夏季</li>
          <li class="item">面食</li>
          <li class="item">下饭菜</li>
          <li class="item">减肥</li>
          <li class="item">宝宝餐</li>
          <li class="item">请客吃饭</li>
        </ul>
        <span class="menuCategoryTitle">菜单分类</span>
        <ul class="contentTip">
          <li class="item"
              v-for="(item,index) in todayMenuCategoryLists"
              :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <MenuDetail v-else></MenuDetail>
  </div>
</template>

<script type="text/javascript">
import MenuDetail from './MenuDetail'

export default {
  props: {
    todayMenuCategoryLists: Array,
    isShowMenuList: Boolean
  },
  data () {
    return {

    }
  },
  components: {
    MenuDetail
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
