<template>
  <div id="todayMenu">
    <div class="todayMenuWrapper">
      <span class="menuTitle">今日菜单</span>
      <div class="menuAll"
           @click="clickAll">全部
        <span class="downMenu"
              v-if="menuDown">
          <svg t="1569722977319"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="759"
               width="16"
               height="16">
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
               width="16"
               height="16">
            <path d="M512.69 653.26666662a61.19 61.19 0 0 1 43.25 17.79l237.12 237.2a35 35 0 0 1-49.55 49.55l-230.89-230.9-230.9 230.89a35 35 0 1 1-49.55-49.55000001L469.3 671.12666662a61.41 61.41 0 0 1 43.39-17.86z"
                  fill="#8a8a8a"
                  p-id="760"></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="menuLists"
         v-if="isShowMenuList"
         ref="menuLists">
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
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
          <li class="item">请客吃饭</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      menuDown: true,
      isShowMenuList: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initMenuListScroll();
    });
  },
  components: {

  },
  methods: {
    // 1.0 初始化滑动视图
    _initMenuListScroll () {
      if (!this.menuListScroll) {
        console.log("来了");
        this.menuListScroll = new BScroll(this.$refs.menuLists, {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
        });
      } else {
        console.log("asf");
        this.menuListScroll.refresh();
      }
      console.log(this.menuListScroll);

    },

    clickAll () {
      this.menuDown = !this.menuDown;
      this.isShowMenuList = !this.isShowMenuList;
    }
  }
}
</script>
<style lang="less" scoped>
#todayMenu {
  width: 97%;
  padding-left: 0.3rem;
  position: fixed;
  z-index: 999;
  top: 3rem;
  bottom: 3rem;
  overflow: hidden;
  .todayMenuWrapper {
    padding-left: 0.3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-left: 0.25rem solid #75a342;
    font-size: 0.6728;
    font-weight: 2000;
  }
  .menuAll {
    padding-right: 1rem;
    float: right;
    font-size: 0.6rem;
    color: gray;

    .downMenu {
      width: 1rem;
      height: 1rem;
    }
  }
  .menuLists {
    padding: 0.5rem;
    width: 100%;
    background-color: white;
    .menuCategoryTitle {
      font-size: 0.6rem;
      color: grey;
    }
    .menuWrapper {
      .contentTip {
        padding: 0.5rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .item {
          text-align: center;
          margin-right: 1.45rem;
          margin-top: 0.4rem;
          width: 3rem;
          line-height: 1.4rem;
          height: 1.4rem;
          font-size: 0.65rem;
          border-radius: 1rem;
          color: rgba(0, 0, 0, 0.7);
          border: 1px solid grey;
        }
      }
    }
  }
}
</style>
