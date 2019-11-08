<template>
  <div class="loader-layer"
       :class="show?'active':''">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2">loading...</div>
      <div class="double-bounce3"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['show']
}
</script>
<style scoped>
.loader-layer {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;

  transition: all 0.6s;
  opacity: 0;
  -webkit-opacity: 0;
  -o-opacity: 0;
  -ms-opacity: 0;
  -moz-opacity: 0;
  visibility: hidden;

  filter: alpha(opacity=0);
}
.loader-layer.active {
  visibility: visible;
  opacity: 1;
  -webkit-opacity: 1;
  -o-opacity: 1;
  -ms-opacity: 1;
  -moz-opacity: 1;
  filter: alpha(opacity=100);
}

.spinner {
  width: 120px;
  height: 120px;
  text-align: center;
  line-height: 120px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
}

.double-bounce1,
.double-bounce2,
.double-bounce3 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #45c763;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.double-bounce3 {
  -webkit-animation-delay: -1.8s;
  animation-delay: -1.8s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

@keyframes loading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
