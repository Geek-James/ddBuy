/**
 * @Author: 极客James  
 * @Date: 2019-10-1 11:44:08 
 * @Last Modified by: 极客James
 * @Last Modified time: 2019-10-30 11:53:10
 * @GitHub https://github.com/Geek-James
 * @掘金 https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @描述 订单模块->编辑地址
 */
<template>
  <div id="editAddress">
    <van-nav-bar title="编辑地址"
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
    console.log(this.$route.params.content);
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
