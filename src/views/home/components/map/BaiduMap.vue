<template>
  <div id="map">
    <van-nav-bar title="请选择收货地址"
                 :border=false
                 :fixed="
                 true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
  </div>

</template>

<script type="text/javascript">

import BaiduMap from 'vue-baidu-map'

export default {
  mounted () {

  },
  data () {
    return {

    }
  },
  components: {
    BaiduMap
  },
  methods: {
    onClickLeft () {
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
}
</style>
