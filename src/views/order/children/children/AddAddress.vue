<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:24:23
 * @Description: 订单模块->添加地址
 * @FilePath: /ddBuy/src/views/order/children/children/AddAddress.vue
 -->
<template>
  <div id="addAddress">
    <van-nav-bar :title="$t('order.addLocation')"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      :save-button-text="$t('order.comfirmAndUse')"
                      @save="onSave"
                      style="margin-top:3rem" />
  </div>
</template>

<script type="text/javascript">

import { mapMutations, mapState } from 'vuex'

import { Toast } from 'vant'
import areaList from './../../../../config/area.js'
export default {
  data () {
    return {
      areaList: areaList,
      searchResult: []
    }
  },
  components: {

  },
  methods: {
    ...mapMutations(['ADD_USER_SHOPPING_ADDRESS']),
    // 1.返回上级界面
    onClickLeft () {
      this.$router.go(-1);
    },
    // 2. 保存
    onSave (content) {
      let addressID = this.addressID().toString();
      content['id'] = addressID;
      content['address'] = content.province + content.city + content.county + content.addressDetail;
      this.ADD_USER_SHOPPING_ADDRESS({
        addressID,
        content
      });
      this.$router.back();
    },
    // 生成不重复的id
    addressID () {
      var lastUuid = 0;
      return (new Date()).getTime() * 1000 + (lastUuid++) % 1000;
    }
  }
}
</script>
<style lang="less" scoped>
#addAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 99999;
  .van-address-edit {
    .van-button {
      background-color: #45c763;
    }
  }
}
</style>
