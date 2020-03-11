<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 22:06:34
 * @Description: 分类页面骨架屏
 * @FilePath: /ddBuy-dev/src/views/category/Skeleton/index.vue
 * @Quote :https://danilowoz.com/create-content-loader/            
 -->
<template>
  <div id="skeleton">
    <content-loader
      :width="414"
      :height="836"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="7" y="17" rx="5" ry="5" width="400" height="24" />
      <rect x="11" y="55" rx="0" ry="0" width="102" height="790" />
      <rect x="75" y="555" rx="0" ry="0" width="0" height="30" />
      <rect x="140" y="58" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="157" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="258" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="356" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="456" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="556" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="654" rx="0" ry="0" width="260" height="70" />
      <rect x="140" y="757" rx="0" ry="0" width="260" height="70" />
    </content-loader>
  </div>
</template>

<script type="text/javascript">
import { ContentLoader } from 'vue-content-loader'

export default {
  mounted() {},
  data() {
    return {
      width: 414
    }
  },
  components: {
    ContentLoader
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
