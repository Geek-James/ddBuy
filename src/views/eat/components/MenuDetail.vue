<template>
  <div id="menuDetail"
       ref="rootMenu">
    <ul class="root">
      <li class="item"
          v-for="(item,index) in menulistDetail"
          :key="item.id">
        <img class="itemImg"
             v-lazy="item.image"
             alt="" />
        <div class="desc">{{item.name}}</div>
        <div class="userInfo">
          <img :src="item.author_avatar"
               alt=""
               class="avatar">
          <span class="username">{{item.author_name}}</span>
        </div>
      </li>
    </ul>
    <loading :show="loading" />
  </div>
</template>

<script type="text/javascript">
import { getTodayMenuDetail } from './../../../serve/api/index.js'
import Loading from '../../../../src/components/loading/LoadingGif'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      menulistDetail: [],
      dropDown: false,
      pullUpIndex: 1,
      end: false,
      loading: false
    }
  },
  components: {
    Loading
  },
  created () {
    this._initData();
  },
  mounted () {
    setTimeout(() => {
      this._initMenuScroll();
    }, 700);
  },
  methods: {
    // 1.数据请求
    async _initData () {
      let ref = await getTodayMenuDetail('/lk01');
      if (ref.success) {
        this.menulistDetail = ref.data.big_recommend.list;
      }
    },
    // 2.上下滚动菜单初始化
    _initMenuScroll () {
      if (!this.rootMenuScroll) {
        var that = this;
        this.rootMenuScroll = new BScroll(this.$refs.rootMenu, {
          probeType: 3,
          click: true,
          scrollY: true,
          mouseWheel: true,
          pullUpLoad: {
            // 2.1 当上拉距离超过盒子高度的10px的时候,就派发一个上拉加载的事件
            threshold: 10
          },
          pullDownRefresh: {
            // 2.2 当下拉长度距离盒子顶部的高度超过10px的时候,就派发一个下拉刷新的事件
            threshold: -10,
            // 2.3 回弹停留在距离顶部10px的位置
            stop: 10
          },
          useTransition: false  // 防止iphone微信滑动卡顿
        });
        // 2.4 上拉加载事件
        this.rootMenuScroll.on('pullingUp', function () {
          this.loading = true
          let index = that.pullUpIndex++;
          console.log(index++);
          let param;
          if (index > 31) {
            this.end = true;
            return;
          } else {
            param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
          }
          getTodayMenuDetail(param).then(response => {
            if (response.success) {
              let newArray = response.data.big_recommend.list;
              for (let index = 0; index < newArray.length; index++) {
                const element = newArray[index];
                that.menulistDetail.push(element);
              }
            }
          });
          that.rootMenuScroll.finishPullUp();
          setTimeout(() => {
            this.loading = false
            that.rootMenuScroll.refresh();
          }, 1000);
        });
        // 2.7 当异步加载数据的时候，重新渲染页面，这段代码非常重要
        this.rootMenuScroll.refresh();
      } else {
        this.rootMenuScroll.refresh();
      }
    },
  }
}
</script>
<style lang="less" scoped>
#menuDetail {
  width: 100%;
  margin-top: 0.2rem;
  background-color: rgb(238, 238, 238);
  position: absolute;
  left: 0;
  top: 6.5rem;
  bottom: 3rem;
  overflow: hidden;
  .drop-down {
    margin-top: 2rem;
    text-align: center;
  }
  .root {
    margin: 0 0.1rem;
    width: 100%;
    column-count: 2;
    column-gap: 0.6rem;
    .item {
      margin-bottom: 0.7rem;
      /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
      break-inside: avoid;
      background: #fff;
      border-radius: 0.7rem;
      .itemImg {
        width: 100%;
        border-radius: 0.5rem;
        height: auto;
        display: block;
      }
      .desc {
        padding: 0.5rem;
        font-size: 0.8rem;
      }
      .userInfo {
        padding: 0.5rem;
        .avatar {
          vertical-align: middle;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background-color: rgb(238, 238, 238);
        }
        .username {
          margin-left: 0.5rem;
          font-size: 0.6rem;
          color: grey;
        }
      }
    }
  }
}
</style>
