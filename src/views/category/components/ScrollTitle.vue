<template>
  <div id="scrollTitle">
    <div class="subTitleWrapper">
      <ul class="subTitleContent"
          ref="ulContent">
        <li class="title"
            :class="{selected:currentSubTitle === index}"
            v-for="(detailItem,index) in categoriesDetailData"
            :key="detailItem.id"
            ref="subTitle"
            @click="subTitleClick(index)">
          {{detailItem.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">

// 引入BScroll组件
import BScroll from 'better-scroll'
export default {
  props: {
    categoriesDetailData: Array
  },
  data () {
    return {
      currentSubTitle: 0,
    }
  },
  components: {

  },
  watch: {
    categoriesDetailData () {
      this.currentSubTitle = 0;
      // 更新滑动组件
      this.$nextTick(() => {
        this._initTitleScroll();
      });
    }
  },
  methods: {
    _initTitleScroll () {
      let contentWrapperWidth = 80;
      let el = this.$refs.subTitle;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 给ul设置值
      this.$refs.ulContent.style.width = contentWrapperWidth + 'px';
      if (!this.scroll) {
        this.scroll = new BScroll('.subTitleWrapper', {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh();
      }
    },// 处理点击subTitle的事件
    subTitleClick (index) {
      this.currentSubTitle = index;
      let el = this.$refs.subTitle[index];
      this.scroll.scrollToElement(el, 500);
    },
  }
}
</script>

<style lang="less" scoped>
#scrollTitle {
  height: 2.8rem;
  .subTitleWrapper {
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 2.6rem;
    background-color: white;
    .title {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
}
</style>

