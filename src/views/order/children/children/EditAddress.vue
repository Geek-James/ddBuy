<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:24:40
 * @Description: 订单模块->编辑地址
 * @FilePath: /ddBuy/src/views/order/children/children/EditAddress.vue
 -->
<template>
  <div id="editAddress">
    <van-nav-bar :title="$t('order.editLocation')"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      :addressInfo="addressInfo"
                      :search-result="searchResult"
                      @save="onSave"
                      @delete="onDelete"
                      style="margin-top:3rem" />
  </div>
</template>

<script type="text/javascript">
import { mapMutations, mapState } from 'vuex'
import areaList from './../../../../config/area.js'

export default {
  data () {
    return {
      areaList: areaList,
      addressInfo: {},
      searchResult: []
    }
  },
  mounted () {
    // 处理路由传过来的数据
    this.addressInfo = this.$route.params.content;
  },
  components: {

  }, methods: {
    ...mapMutations(['ADD_USER_SHOPPING_ADDRESS', 'DELETE_USER_SHOPPING_ADDRESS', 'CHANGE_USER_SHOPPING_ADDRESS']),
    // 1.返回上级界面
    onClickLeft () {
      this.$router.go(-1);
    },
    // 2. 保存
    onSave (content) {
      let id = content.id;
      content['address'] = content.province + content.city + content.county + content.addressDetail;
      this.CHANGE_USER_SHOPPING_ADDRESS({
        id, content
      });
      this.$router.back();
    },
    // 删除
    onDelete (content) {
      let id = content.id;
      this.DELETE_USER_SHOPPING_ADDRESS({ id });
      this.$router.back();
    }
  }
}
</script>
<style lang="less" scoped>
#editAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 99999;
}
</style>
