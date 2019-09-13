<template>
  <div id="home">
    <Header></Header>
    <Sowing :sowing_list="sowing_list"></Sowing>
  </div>
</template>

<script type="text/javascript">
import { getHomeData } from './../../serve/api/index.js'
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'


export default {
  name: 'Home',
  created () {
    getHomeData().then(response => {
      if (response.success) {
        // 给轮播组件 sowing_list赋值 
        this.sowing_list = response.data.list[0].icon_list;
      }
    }).catch(error => {
      console.log(error);

    });
  },
  data () {
    return {
      // 首页轮播图数据
      sowing_list: []
    }
  },
  components: {
    Header,
    Sowing
  }
}
</script>

<style scoped>
#id {
  color: rebeccapurple;
}
</style>