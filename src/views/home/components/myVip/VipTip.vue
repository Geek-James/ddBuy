<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 15:34:59
 * @Description: 首页->加入会员Tip
 * @FilePath: /ddBuy/src/views/home/components/myVip/VipTip.vue
 -->
<template>
  <div id="vipPage"
       @click="goToMyVip">
    <svg-icon iconClass="vip"
              class="icon" />
    <span class="title">{{$t('home.vipDesc')}}</span>
    <span class="subTitle">{{$t('home.vipSubDesc')}}</span>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  mounted () {
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  components: {
  },
  methods: {
    goToMyVip () {
      if (this.userInfo.token) {
        this.$router.push({ name: 'myVip' });
      } else {
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style lang="less" scoped>
#vipPage {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem auto;
  height: 2rem;
  background-color: #3bba63;
  width: 95%;
  border-radius: 0.2rem;
  opacity: 0.9;
  .icon {
    padding-left: 0.5rem;
  }
  .title {
    margin-left: 0.5rem;
    font-size: 0.6rem;
    color: white;
  }
  .subTitle {
    margin-left: auto;
    margin-right: 0.5rem;
    font-size: 0.6rem;
    color: white;
  }
}
</style>

