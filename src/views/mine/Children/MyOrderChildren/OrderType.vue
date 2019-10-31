<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0">
    </div>
    <div v-else
         class="noDataPlaceHold">
      <img src="./../../../../images/mine/noData.jpeg"
           alt="">
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    orderTypeDataArray: Array
  },
  mounted () {

  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
#orderType {
  margin-top: 5rem;
  height: 20rem;
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
