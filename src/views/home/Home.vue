<template>
  <div id="home">
    <h1>HOME</h1>
  </div>
</template>

<script type="text/javascript">
import { getHomeData } from './../../serve/api/index.js'

export default {
  name: 'Home',
  created () {
    getHomeData().then(response => {
      console.log(response);

    }).catch(error => {
      console.log(error);

    });
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
#id {
  color: rebeccapurple;
}
</style>