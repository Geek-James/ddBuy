<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-12 16:57:37
 * @Description: 吃什么->搜索栏
 * @FilePath: /ddBuy/src/views/eat/components/Search.vue
 -->
<template>
  <div id="search">
    <div class="searchBox"
         @click="clickSearch">
      <div class="iconSearchWrapper">
        <svg viewBox="0 0 32 32"
             class="icon iconSearch">
          <path fill="#999"
                fill-rule="evenodd"
                d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
        </svg>
      </div>
      <span class="searchPrompt">搜索菜谱、食材</span>
      <div class="collection">
        <svg t="1569828707785"
             class=""
             viewBox="0 0 1165 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="8465"
             width="16"
             height="16"
             @click="clickCollerction">
          <path d="M945.230769 1024H220.553846A220.553846 220.553846 0 0 1 0 803.446154V220.553846A220.553846 220.553846 0 0 1 220.553846 0h192.512a78.769231 78.769231 0 0 1 69.159385 41.117538l67.584 123.98277a15.753846 15.753846 0 0 0 13.863384 8.192H945.230769a220.553846 220.553846 0 0 1 220.553846 220.553846v409.6a220.553846 220.553846 0 0 1-220.553846 220.553846zM220.553846 63.015385A157.538462 157.538462 0 0 0 63.015385 220.553846v582.892308a157.538462 157.538462 0 0 0 157.538461 157.538461h724.676923a157.538462 157.538462 0 0 0 157.538462-157.538461V393.846154a157.538462 157.538462 0 0 0-157.538462-157.538462H563.672615a78.769231 78.769231 0 0 1-69.159384-41.117538L426.929231 71.207385a15.753846 15.753846 0 0 0-13.863385-8.192z"
                fill="#45c763"
                p-id="8466"></path>
          <path d="M707.505231 842.043077a53.563077 53.563077 0 0 1-25.678769-7.089231L582.892308 782.651077 481.910154 834.953846a54.665846 54.665846 0 0 1-78.769231-57.816615l19.692308-111.379693-80.502154-78.76923a54.508308 54.508308 0 0 1 30.562461-92.790154l111.852308-15.753846L535.630769 376.832A53.878154 53.878154 0 0 1 583.837538 346.584615a54.350769 54.350769 0 0 1 48.679385 30.562462l49.624615 101.612308 111.69477 16.856615a54.350769 54.350769 0 0 1 29.774769 92.947692l-81.289846 78.769231 18.589538 111.379692a54.350769 54.350769 0 0 1-21.897846 53.248 54.980923 54.980923 0 0 1-31.507692 10.082462z m3.938461-62.070154zM582.892308 718.532923a54.823385 54.823385 0 0 1 25.678769 6.301539l88.379077 47.261538-15.753846-98.934154a54.193231 54.193231 0 0 1 15.753846-47.261538l71.995077-69.632-99.091693-15.753846a54.665846 54.665846 0 0 1-40.96-29.932308l-43.795692-90.112-44.898461 89.639384a53.720615 53.720615 0 0 1-41.117539 29.617231l-99.249231 14.020923 71.522462 70.262154a54.508308 54.508308 0 0 1 15.753846 48.364308l-17.486769 98.619077L557.056 724.676923a54.508308 54.508308 0 0 1 25.836308-6.144z"
                fill="#45c763"
                p-id="8467"></path>
        </svg>
      </div>
    </div>
    <div class="todayMenu">今日菜单</div>
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
        message: "收藏暂未实现哦~",
        duration: 800
      })
    },
    clickSearch () {
      Toast({
        message: "搜索暂未实现哦~",
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
