<template>

  <div class="wrapper emptyWrapper">
    <!-- 可滑动的标题 -->
    <ScrollTitle :categoriesDetailData="categoriesDetailData"></ScrollTitle>
    <div v-for="(categoriesDetail, index) in categoriesDetailData"
         :key="categoriesDetail.id">
      <div class="categoryTitle">{{categoriesDetail.name}}</div>
      <ProductItem :products="categoriesDetail.products" />
      <p class="bottomTip">到底啦,看看别的分类吧</p>
    </div>

  </div>
</template>

<script>
import ProductItem from './ProductItem'
import ScrollTitle from './ScrollTitle'

export default {
  name: "ContentView",
  props: {
    categoriesDetailData: Array
  },
  components: {
    ProductItem,
    ScrollTitle
  }
}
</script>

<style scoped>
.wrapper {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  padding-bottom: 2rem;
}

.wrapper {
  position: absolute;
  left: 5.3125rem;
  right: 0;
  bottom: 0;
  top: 0;
  background: #fff;
}

.categoryTitle {
  padding: 0 0.3125rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  background: #f8f8f8;
  color: #666666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bottomTip {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: gray;
  text-align: center;
}
</style>