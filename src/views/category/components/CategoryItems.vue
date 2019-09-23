<template>
  <div class="listWrapper">
    <div class="leftWrapper">
      <ul class="wrapper">
        <li class="categoryItem"
            v-for="(cate, index) in categoryLists"
            :class="{selected:currentIndex === index}"
            @click="clickLeftLi(index)"
            :key="cate.id"
            ref="menuList">
          <span class="textWrapper">{{cate.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">

// 引入滑动组件BetterScroll
import BScroll from 'better-scroll'

//引入发布订阅
import PubSub from 'pubsub-js'
import { CATEGORY_ITEM_CLICK } from '../../../config/pubsub_type.js'

export default {
  props: {
    categoryLists: Array
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    _initScroll () {
      if (!this.leftScroll) {
        this.leftScroll = new BScroll('.leftWrapper', {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
          mouseWheel: true
        })
      } else {
        this.scroll.refresh();
      }
    },
    clickLeftLi (index) {
      this.currentIndex = index;
      // 滚动到对应的位置上
      // 取到当前点击的li
      let el = this.$refs.menuList[index];
      this.leftScroll.scrollToElement(el, 300);
      // 发送通知传递给CategoryContent,并且传递索引值
      PubSub.publish(CATEGORY_ITEM_CLICK, index);
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.listWrapper {
  display: flex;
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  width: 25%;
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
  line-height: 2.25rem;
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
    border-right: 1px solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>
