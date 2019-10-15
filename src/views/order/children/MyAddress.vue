<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar title="我的地址"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    onClickLeft () {
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#myAddress {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
