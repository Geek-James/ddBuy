<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-04 15:35:18
 * @Description: 吃什么->搜索栏
 * @FilePath: /ddBuy/src/views/eat/components/Search.vue
 -->
<template>
  <div id="search">
    <div class="searchBox"
         @click="clickSearch">
      <div class="iconSearchWrapper">
        <svg-icon iconClass="search"
                  class="icon" />
      </div>
      <span class="searchPrompt">{{$t('eat.pleaseHolder')}}</span>
      <div class="collection">
        <!-- 收藏 -->
        <svg-icon iconClass="collection"
                  @click="clickCollerction" />
      </div>
    </div>
    <div class="todayMenu">{{$t('eat.menu')}}</div>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    clickCollerction () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    },
    clickSearch () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      })
    }
  }
}

</script>

<style lang="less" scoped>
#search {
  padding: 0.5rem 0.625rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .searchBox {
    display: block;
    right: 2rem;
    padding: 0 0.875rem 0 1.75rem;
    border-radius: 1.75rem;
    height: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.875rem;
    background: #f2f2f2;
    width: 80%;
    .iconSearchWrapper {
      position: absolute;
      left: 0.9375rem;
      top: 0.75rem;
      width: 1.25rem;
      height: 1.25rem;
      .icon {
        fill: #999;
        width: 1rem;
        height: 1rem;
        // padding-bottom: 0.2rem;
      }
      .iconSearch {
        width: 80%;
        height: 80%;
      }
    }
  }
  .searchPrompt {
    margin: 0 auto;
    color: #b5b5b5;
  }
  .collection {
    position: absolute;
    top: 0.6rem;
    right: -1.1rem;
    width: 2.5rem;
    height: 2rem;
  }
  .todayMenu {
    margin-top: 0.9rem;
    padding-left: 0.4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-left: 0.25rem solid #75a342;
    font-size: 0.6728;
    font-weight: 2000;
  }
}
</style>
