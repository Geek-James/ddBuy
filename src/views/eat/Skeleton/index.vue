<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 22:06:51
 * @Description: 吃什么页面骨架屏
 * @FilePath: /ddBuy-dev/src/views/eat/Skeleton/index.vue
 * @Quote :https://danilowoz.com/create-content-loader/            
 -->

<template>
  <div id="skeleton">
    <content-loader
      :width="414"
      :height="836"
      :speed="1"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="8" y="31" rx="2" ry="2" width="380" height="30" />
      <rect x="31" y="76" rx="0" ry="0" width="150" height="100" />
      <rect x="232" y="74" rx="0" ry="0" width="146" height="147" />
      <rect x="25" y="233" rx="0" ry="0" width="161" height="152" />
      <rect x="231" y="284" rx="0" ry="0" width="153" height="120" />
      <rect x="26" y="453" rx="0" ry="0" width="165" height="110" />
      <rect x="234" y="466" rx="0" ry="0" width="156" height="156" />
      <rect x="29" y="628" rx="0" ry="0" width="150" height="118" />
      <rect x="234" y="692" rx="0" ry="0" width="162" height="117" />
      <rect x="35" y="183" rx="0" ry="0" width="141" height="8" />
      <rect x="62" y="203" rx="0" ry="0" width="117" height="9" />
      <circle cx="42" cy="209" r="15" />
      <rect x="28" y="392" rx="0" ry="0" width="158" height="8" />
      <rect x="63" y="415" rx="0" ry="0" width="116" height="11" />
      <circle cx="40" cy="418" r="14" />
      <rect x="28" y="573" rx="0" ry="0" width="161" height="9" />
      <circle cx="40" cy="602" r="13" />
      <rect x="65" y="599" rx="0" ry="0" width="118" height="9" />
      <rect x="30" y="756" rx="0" ry="0" width="145" height="10" />
      <circle cx="45" cy="786" r="14" />
      <rect x="66" y="781" rx="0" ry="0" width="100" height="9" />
      <rect x="237" y="230" rx="0" ry="0" width="141" height="11" />
      <rect x="273" y="256" rx="0" ry="0" width="106" height="8" />
      <circle cx="248" cy="258" r="14" />
      <rect x="237" y="417" rx="0" ry="0" width="146" height="9" />
      <rect x="269" y="437" rx="0" ry="0" width="115" height="7" />
      <circle cx="244" cy="443" r="12" />
      <rect x="237" y="635" rx="0" ry="0" width="154" height="8" />
      <rect x="267" y="655" rx="0" ry="0" width="118" height="7" />
      <circle cx="247" cy="658" r="11" />
      <rect x="37" y="810" rx="0" ry="0" width="150" height="70" />
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
