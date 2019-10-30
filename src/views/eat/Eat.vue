/**
 * @Author: 极客James  
 * @Date: 2019-10-1 11:44:08 
 * @Last Modified by: 极客James 
 * @Last Modified time: 2019-10-30 11:53:10
 * @GitHub https://github.com/Geek-James
 * @掘金 https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @描述 吃什么模块
 */
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
