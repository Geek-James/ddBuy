<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:26:17
 * @Description: 吃什么模块
 * @FilePath: /ddBuy/src/views/eat/Eat.vue
 -->
<template>
  <div class="eatWrapper">
    <!-- 搜索栏 -->
    <Search></Search>
    <!-- 今日菜单 -->
    <TodayMenu></TodayMenu>
  </div>
</template>

<script type="text/javascript">

import Search from './components/Search'
import TodayMenu from './components/TodayMenu'

export default {
  data () {
    return {

    }
  },
  components: {
    Search,
    TodayMenu
  }
}
</script>

<style lang="less" scoped>
#eatWrapper {
  background-color: "#f5f5f5";
}
</style>
