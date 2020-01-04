<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-04 15:34:36
 * @Description: 分类模块->搜索框
 * @FilePath: /ddBuy/src/views/category/components/SearchHead.vue
 -->
<template>
  <div class="searchWrapper">
    <div class="searchBox"
         @click="goSearch">
      <div class="iconSearchWrapper">
        <svg-icon iconClass="search"></svg-icon>
      </div>
      <span class="searchPrompt">{{$t('category.tip')}}</span>
    </div>
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
    // 到搜索界面
    goSearch () {
      Toast({
        message: this.$t('common.unrealized'),
        duration: 800
      });
    }
  }
}
</script>

<style lang="less" scoped>
.searchWrapper {
  padding: 0.5rem 0.625rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px #e6e6e6;
  z-index: 999;
}

.searchBox {
  display: block;
  padding: 0 0.875rem 0 1.75rem;
  border-radius: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  font-size: 0.875rem;
  background: #f2f2f2;
}

.iconSearchWrapper {
  position: absolute;
  left: 0.9375rem;
  top: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
}

.icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}

.iconSearch {
  width: 100%;
  height: 100%;
}

.searchPrompt {
  color: #b5b5b5;
}
</style>
