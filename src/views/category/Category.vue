<template>
  <div class="category">
    <div v-if="!isShowLoading">
      <!-- 头部搜索栏 -->
      <SearchHead></SearchHead>
      <!-- 左边列表菜单栏-->
      <CategoryItems :categoryLists="categoryLists"></CategoryItems>
      <!--右边内容栏-->
      <CategoryContent></CategoryContent>
      <!-- <Demo></Demo> -->
    </div>
    <van-loading v-else
                 size="24px "
                 class="loading">数据拼命加载中...</van-loading>
  </div>
</template>

<script type="text/javascript">
// 引入组件
import SearchHead from './components/SearchHead'
import CategoryItems from './components/CategoryItems'
import CategoryContent from './components/CategoryContent'


import { getCategoryData, getCategoryDetailData } from '../../serve/api/index.js'
export default {
  data () {
    return {
      isShowLoading: false,
      categoryLists: [],
      categoryDetail: []
    }
  },
  created () {
    this.ininData();
  },
  components: {
    SearchHead,
    CategoryItems,
    CategoryContent,
  },
  methods: {
    async ininData () {
      // 1.获取左边列表数据
      let leftRes = await getCategoryData();
      if (leftRes.success) {
        this.categoryLists = leftRes.data.cate;
      }
      // 隐藏加载
      this.isShowLoading = false;
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  width: 100%;
  height: 100%;
}
</style>
