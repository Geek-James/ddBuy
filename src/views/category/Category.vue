<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-16 16:54:41
 * @Description: 分类
 * @FilePath: /ddBuy-dev/src/views/category/Category.vue
 -->
<template>
  <div id="category">
    <!--头部-->
    <Header></Header>
    <!--内容-->
    <div class="listWrapper"
         v-if="!isShowLoading">
      <!--左边-->
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem"
              v-for="(cate, index) in categoriesData"
              :class="{ selected: currentIndex === index }"
              @click="clickLeftLi(index)"
              :key="cate.id"
              ref="menuList">
            <span class="textWrapper">{{ cate.name }}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <ContentView :categoriesDetailData="categoriesDetailData" />
    </div>
    <!-- 加载动画 -->
    <!-- <Loading :show="isShowLoading" /> -->
    <!-- 骨架屏 -->
    <Skeleton v-if="isShowLoading" />
    <!-- 点击左边按钮加载数据时候显示动画 -->
    <LoadingGif v-show="isShowLoadingGif" />
  </div>
</template>

<script>
// 1. 引入组件
import Header from './components/SearchHead'
import ContentView from './components/ContentView'
// 2. 引入滚动组件
import BScroll from 'better-scroll'
// 3. 引入接口
import {
  getCategoryData,
  getCategoryDetailData
} from './../../serve/api/index.js'
// 4.引入加载动画
import Loading from '../../components/loading/LoadingGif'
// 5.引入加载动画
import LoadingGif from '../../components/loading/Loading'
// 6.引入骨架屏
import Skeleton from './Skeleton'
export default {
  name: 'Category',
  data () {
    return {
      // 是否显示加载图标
      isShowLoading: true,
      // 左边列表数据
      categoriesData: [],
      // 右边列表数据
      categoriesDetailData: [],
      // 左边item选中与否
      currentIndex: 0,
      isShowLoadingGif: false
    }
  },
  created () { },
  mounted () {
    // 初始化数据
    this._initData()
  },
  components: {
    Header,
    ContentView,
    Loading,
    LoadingGif,
    Skeleton
  },
  activated () {
    // 页面缓存了数据,所以会走这个方法
    this.$nextTick(() => {
      if (this.$route.params.currentIndex > -1) {
        this.clickLeftLi(this.$route.params.currentIndex + 1)
      }
    })
  },
  methods: {
    // 1. 初始化操作(数据和界面)
    async _initData () {
      // 1.1 获取左边的数据
      let leftRes = await getCategoryData()
      if (leftRes.success) {
        this.categoriesData = leftRes.data.cate
      }
      // 1.2 获取右边的数据
      let rightRes = await getCategoryDetailData('/lk001')
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate
      }
      // 1.3. 隐藏loading框
      this.isShowLoading = false

      // 1.4.初始化滚动视图
      this.$nextTick(() => {
        if (!this.leftScroll) {
          this.leftScroll = new BScroll('.leftWrapper', {
            probeType: 3,
            click: true,
            scrollY: true,
            tap: true,
            mouseWheel: true
          })
        } else {
          this.leftScroll.refresh()
        }
      })
    },
    // 2. 处理左边的点击
    async clickLeftLi (index) {
      this.isShowLoadingGif = true
      // 2.1 改变索引
      this.currentIndex = index
      // 2.2 滚动到对应的位置
      setTimeout(() => {
        let menuLists = this.$refs.menuList
        let el = menuLists[index]
        // 2.3 滚动到对应元素上
        this.leftScroll.scrollToElement(el, 300)
      }, 900)

      // 2.4 获取右边的数据
      let param
      if (index >= 9) {
        param = `/lk0${index + 1}`
      } else {
        param = `/lk00${index + 1}`
      }
      let rightRes = await getCategoryDetailData(param)
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate
      }
      this.isShowLoadingGif = false
    }
  }
}
</script>

<style scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}

.listWrapper {
  display: flex;
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  width: 100%;
  overflow: hidden;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 0.01rem #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 0.01rem solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>
