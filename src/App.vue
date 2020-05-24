<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-05-24 22:07:56
 * @Description: 入口
 * @FilePath: /ddBuy-dev/src/App.vue
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
/** 解决 [Intervention] Unable to preventDefault 
inside passive event listener due to target being treated as
**/
* {
  touch-action: pan-y;
}
</style>
