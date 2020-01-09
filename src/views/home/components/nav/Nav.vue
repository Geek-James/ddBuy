<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-09 23:28:38
 * @Description: 首页->Nav组件
 * @FilePath: /ddBuy/src/views/home/components/nav/Nav.vue
 -->
<template>
  <div id="wrapper">
    <van-grid :column-num="5"
              :border="false">
      <van-grid-item v-for="(nav,index) in nav_list"
                     :key="nav.cid"
                     :icon="nav.icon_url"
                     :text="nav.name"
                     @click="gotoCategory(index)" />
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

  },
  methods: {
    gotoCategory (index) {
      this.$router.push({ name: 'category', params: { currentIndex: index } })
    }
  }
}
</script>

<style lang="less" scoped>
</style>

