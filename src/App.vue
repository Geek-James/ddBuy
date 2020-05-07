<!--
 * @Github: https://github.com/Geek-James
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @Date: 2020-05-07 10:13:15
 * @LastEditors: your name
 * @LastEditTime: 2020-05-07 11:05:21
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}

</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
