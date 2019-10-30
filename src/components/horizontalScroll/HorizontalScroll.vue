<template>
  <div id="horizontalScroll">
    <!-- 水平滑动 -->
    <div class="menuTitleWrapper"
         ref="menuTitleWrapper">
      <ul ref="menuTitleUlContent">
        <li class="menuTitles"
            :class="{selected:currentSubTitle === index}"
            v-for="(item,index) in menuTitlesArray"
            :key="item.id"
            ref="menuTitles"
            @click="menuTitleClick(index)">
          {{item.name}}
        </li>
      </ul>
      <div class="showMenu"
           @click="menuClick"
           v-show="isShowDropMenu">
        <span class="downMenu"
              v-if="menuDown">
          <svg t="1569722977319"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="759"
               width="32"
               height="32">
            <path d="M511.31 989.39999995a61.19 61.19 0 0 1-43.25-17.79l-237.12-237.2a35 35 0 0 1 49.55-49.55l230.89 230.9 230.9-230.89a35 35 0 1 1 49.55 49.55L554.7 971.53999995a61.41 61.41 0 0 1-43.39 17.86z"
                  fill="#8a8a8a"
                  p-id="760"></path>
          </svg>
        </span>
        <span class="upMenu"
              v-else>
          <svg t="1569723063527"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="759"
               width="32"
               height="32">
            <path d="M512.69 653.26666662a61.19 61.19 0 0 1 43.25 17.79l237.12 237.2a35 35 0 0 1-49.55 49.55l-230.89-230.9-230.9 230.89a35 35 0 1 1-49.55-49.55000001L469.3 671.12666662a61.41 61.41 0 0 1 43.39-17.86z"
                  fill="#8a8a8a"
                  p-id="760"></path>
          </svg>
        </span>
      </div>
    </div>
    <!-- 下拉菜单 -->

  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'

export default {
  props: {
    // 接受父组件传递的数据
    menuTitlesArray: Array
  },
  mounted () {
    this.$nextTick(() => {
      this._initHorizontalScroll();
    });
  },
  data () {
    return {
      currentSubTitle: 0,
      isShowDropMenu: true,
      menuDown: true
    }
  },
  components: {

  },
  methods: {
    // 初始化滚动
    _initHorizontalScroll () {
      let contentWrapperWidth = 50;
      let el = this.$refs.menuTitles;
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth;
      }
      // 1.1给ul设置宽度,保证可以横向滚动
      this.$refs.menuTitleUlContent.style.width = contentWrapperWidth + 'px';
      if (!this.horizontalScroll) {
        this.titleScroll = new BScroll('.menuTitleWrapper', {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true,
        });
      } else {
        this.horizontalScroll.refresh();
      }
    },
    menuClick () {

    }
  }
}
</script>

<style lang="less" scoped>
#horizontalScroll {
  .menuTitleWrapper {
    position: relative;
    width: 100%;
    height: 2.8rem;
    display: inline-block;
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    background-color: white;
    .menuTitles {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
    .showMenu {
      position: absolute;
      width: 10%;
      top: -0.1rem;
      right: 0;
      padding-right: 0.5rem;
      height: 2.8rem;
      line-height: 2.8rem;
      background-color: #ffffff;
      .menuIcon {
        width: 100%;
        height: 2.8re;
      }
    }
  }
}
</style>
