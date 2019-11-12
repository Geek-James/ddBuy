<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-12 16:55:53
 * @Description: 分类模块->搜索框
 * @FilePath: /ddBuy/src/views/category/components/SearchHead.vue
 -->
<template>
  <div class="searchWrapper">
    <div class="searchBox"
         @click="goSearch">
      <div class="iconSearchWrapper">
        <svg viewBox="0 0 32 32"
             class="icon iconSearch">
          <path fill="#999"
                fill-rule="evenodd"
                d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
        </svg>
      </div>
      <span class="searchPrompt">输入商品名称</span>
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
        message: '暂未实现哦~',
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
