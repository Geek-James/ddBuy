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
