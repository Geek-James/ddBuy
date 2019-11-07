<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:26:56
 * @Description: 分类模块->可滑动标题详情组件
 * @FilePath: /ddBuy/src/views/category/components/DropMenu.vue
 -->
<template>
  <div id="dropMenu"
       v-if="menuDown"
       @touchmove.prevent
       ref="dropMenuWrapp"
       @click="touchClick">
    <div class="itemWraper">
      <ul v-for="(item,index) in categoriesDetailData"
          :key="item.id">
        <li class="titleItem"
            @click="itemClick(index)"
            :class="{selected:currentSubTitle === index}">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    menuDown: Boolean,
    categoriesDetailData: Array,
    currentSubTitle: Number
  },
  data () {
    return {
    }
  },
  components: {

  },
  methods: {
    itemClick (index) {
      this.$emit('itemClick', index);
    },
    touchClick () {
      this.$emit('touchClick');
    }
  }
}
</script>

<style lang="less" scoped>
#dropMenu {
  position: fixed;
  justify-content: flex-start;
  z-index: 50 !important;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  top: 5.6rem;
  bottom: 3rem;
  .itemWraper {
    padding: 0.5rem;
    display: flex;
    flex-flow: row wrap;
    background-color: white;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .titleItem {
      text-align: center;
      margin-right: 2rem;
      margin-top: 0.4rem;
      width: 3.5rem;
      line-height: 1.4rem;
      height: 1.4rem;
      font-size: 0.65rem;
      border-radius: 1rem;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid grey;
    }
    .selected {
      background-color: rgba(60, 185, 99, 0.1);
      color: #3cb963;
      border: 1px solid #3cb963;
    }
  }
}
@keyframes animate {
  from {
    height: 0;
    top: 0;
  }
  to {
    height: 90%;
    top: 0px;
  }
}
</style>
