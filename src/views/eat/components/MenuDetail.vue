<template>

  <div id="menuDetail"
       ref="aarootMenu">
    <p class="drop-down"
       v-if="dropDown">松手刷新数据...</p>
    <ul class="root">
      <li class="item"
          v-for="(item,index) in menulistDetail"
          :key="item.id">
        <img class="itemImg"
             :src="item.image"
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
  </div>
  <!-- </div> -->
</template>

<script type="text/javascript">
import { getTodayMenuDetail } from './../../../serve/api/index.js'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      menulistDetail: [],
      dropDown: false
    }
  },
  components: {

  },
  mounted () {
    this._initData();
    this.$nextTick(() => {
      this._initMenuScroll();
    })
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
        this.rootMenuScroll = new BScroll(this.$refs.aarootMenu, {
          probeType: 3,
          click: true,
          scrollY: true,
          mouseWheel: true,
          ullUpLoad: {
            threshold: 10    // 当上拉距离超过盒子高度的10px的时候,就派发一个上拉加载的事件
          },
          pullDownRefresh: {
            threshold: -10,    //当下拉长度距离盒子顶部的高度超过10px的时候,就派发一个下拉刷新的事件
            stop: 10            // 回弹停留在距离顶部20px的位置
          },
          useTransition: false  // 防止iphone微信滑动卡顿
        });
        // 上拉加载事件
        this.rootMenuScroll.on('pullingUp', function () {
          console.log('加载ajax数据');
          //   this.rootMenuScroll.finishPullUp();//可以多次执行上拉加载，没有这段代码上拉只会加载一次
        });
        //下拉刷新事件
        this.rootMenuScroll.on('pullingDown', function () {
          console.log('处理下拉刷新操作')
          setTimeout(() => {
            console.log('asfsaf')
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次

          }, 2000)
        });
        this.rootMenuScroll.refresh();//初始化demo  当异步加载数据的时候，重新渲染页面，这段代码非常重要
      } else {
        this.rootMenuScroll.refresh();
      }
      this.rootMenuScroll.on('scroll', (pos) => {
        //如果下拉超过50px 就显示下拉刷新的文字
        if (pos.y > 50) {
          this.dropDown = true;
        } else {
          this.dropDown = false
        }
      });

    }
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
        vertical-align: middle;
        border-radius: 0.5rem;
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
