/**
 * @Author: 极客James  
 * @Date: 2019-10-1 11:44:08 
 * @Last Modified by: 极客James 
 * @Last Modified time: 2019-10-30 11:53:10
 * @GitHub https://github.com/Geek-James
 * @掘金 https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @描述 首页->Nav组件
 */
<template>
  <div id="wrapper">
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="(nav,index) in nav_list"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name" />
    </van-grid>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    nav_list: Array
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
</style>

