<template>
  <div id="dropMenu"
       v-if="menuDown"
       @touchmove.prevent>
    <!-- <div @click="click">

    </div> -->
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    menuDown: Boolean
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    click () {
      this.$emit('click', menuDown);
    }
  }
}
</script>

<style lang="less" scoped>
#dropMenu {
  position: fixed;
  z-index: 50 !important;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 5.8rem;
  bottom: 3rem;
  animation: animate 300ms ease-in;
  overflow: hidden;
}
@keyframes animate {
  from {
    height: 0px;
    top: 0;
  }
  to {
    height: 90%;
    top: 0px;
  }
}
</style>
