<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 21:58:23
 * @Description: 吃什么->今日菜单
 * @FilePath: /ddBuy-dev/src/views/eat/components/TodayMenu.vue
 -->
<template>
  <div>
    <div id="todayMenu" v-if="!isShowLoading">
      <div class="todayMenuWrapper">
        <div class="menuList">
          <ul ref="menuUlContent">
            <li
              class="menuItem"
              v-for="(item, index) in todayMenuCategoryLists"
              :key="item.id"
              ref="menuTitle"
              :class="{ selected: currentSubTitle === index }"
              @click="menuItemClick(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="menuAll" @click="clickAll">
          {{ msg }}
          <span class="downMenu" v-if="menuDown">
            <svg-icon iconClass="down" style="width:1rem;height:1rem" />
          </span>
          <span class="upMenu" v-else>
            <svg-icon iconClass="up" style="width:1rem;height:1rem" />
          </span>
        </div>
      </div>

      <MenuCategoryLists
        :todayMenuCategoryLists="todayMenuCategoryLists"
        :isShowMenuList="isShowMenuList"
        v-on:hiddenMenu="clickAll"
      >
      </MenuCategoryLists>
    </div>
    <!-- <Loading :show="isShowLoading"> </Loading> -->
    <!-- 骨架屏 -->
    <Skeleton v-if="isShowLoading"></Skeleton>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
import MenuCategoryLists from './MenuCategoryLists'

// 引入通知
import PubSub from 'pubsub-js'
import { EAT_MENUTITLE_CLICK } from '../../../config/pubsub_type.js'

// 引入加载动画
import Loading from '../../../components/loading/LoadingGif'
// 引入骨架屏
import Skeleton from '../Skeleton'

import { getTodayMenuCategoryList } from './../../../serve/api/index.js'
export default {
  data() {
    return {
      menuDown: true,
      isShowMenuList: false,
      todayMenuCategoryLists: [],
      msg: this.$t('eat.all'),
      currentSubTitle: 0,
      isShowLoading: true
    }
  },
  mounted() {
    let that = this
    this._initData()
    // 订阅通知
    PubSub.subscribe(EAT_MENUTITLE_CLICK, function(msg, index) {
      // 点击顶部滑动菜单
      that.menuItemClick(index)
    })
  },
  components: {
    MenuCategoryLists,
    Loading,
    Skeleton
  },
  watch: {
    menuDown() {
      let all = this.$t('eat.all')
      let close = this.$t('eat.close')
      this.msg = this.menuDown == true ? all : close
    }
  },
  methods: {
    // 1.获取网络数据
    async _initData() {
      let todayMenuCategory = await getTodayMenuCategoryList()
      if (todayMenuCategory.success) {
        this.todayMenuCategoryLists = todayMenuCategory.data.list
        this.$nextTick(() => {
          this._initMenuTitleScroll()
        })
      }
      // 1.3. 隐藏loading框
      this.isShowLoading = false
    },
    // 2.处理点击全部按钮切换菜单栏
    clickAll() {
      // 2.1上下菜单图标切换
      this.menuDown = !this.menuDown
      // 2.2是否显示商品分类列表切换
      this.isShowMenuList = !this.isShowMenuList
    },
    // 3.点击滑动菜单栏
    menuItemClick(index) {
      // 3.1 让横向滑动到合适位置
      this.currentSubTitle = index
      let el = this.$refs.menuTitle[index]
      this.menuTitleScroll.scrollToElement(el, 500)
      // 3.2 点击顶部菜单栏,如果下拉菜单存在,那么就隐藏
      if (!this.menuDown) {
        // 直接调点击下拉菜单按钮
        this.clickAll()
      }
    },
    // 4.初始化菜单栏滑动
    _initMenuTitleScroll() {
      // 让ul完全渲染完成后
      this.$nextTick(() => {
        if (!this.menuTitleScroll) {
          let contentWrapperWidth = 100
          let el = this.$refs.menuTitle
          for (let i = 0; i < el.length; i++) {
            contentWrapperWidth += el[i].clientWidth * 1.18
          }
          // 4.1给ul设置宽度,保证可以横向滚动
          this.$refs.menuUlContent.style.width = contentWrapperWidth + 'px'
          this.menuTitleScroll = new BScroll('.menuList', {
            probeType: 3,
            startX: 0,
            click: true,
            scrollX: true
          })
        } else {
          this.menuTitleScroll.refresh()
        }
      })
    }
  },
  beforeDestroy() {
    PubSub.unsubscribe(EAT_MENUTITLE_CLICK)
  }
}
</script>
<style lang="less" scoped>
#todayMenu {
  width: 100%;
  margin-top: 6.5rem;
  overflow: hidden;
  margin-bottom: 3rem;
  .todayMenuWrapper {
    width: 100%;
    height: 1.5rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 5.1rem;
    background-color: white;
    .menuList {
      width: 80%;
      overflow: hidden;
      .menuItem {
        margin-right: 0.5rem;
        display: inline-block;
        font-size: 0.73rem;
        padding: 0.4rem;
        border: 1px solid #dedede;
        border-radius: 0.6rem;
        padding: 0.3rem;
      }
      .selected {
        color: #3cb963;
        border: 1px solid #3cb963;
      }
    }
    .menuAll {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 0.9rem;
      font-size: 0.6rem;
      color: gray;
      .downMenu {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}
</style>
