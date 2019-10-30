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
                      :search-result="searchResult"
                      @save="onSave"
                      @change-detail="onChangeDetail"
                      style="margin-top:3rem" />
  </div>
</template>

<script type="text/javascript">
import areaList from './../../../../config/area.js'

export default {
  data () {
    return {
      areaList: areaList,
      searchResult: []
    }
  },
  components: {

  }, methods: {
    // 1.返回上级界面
    onClickLeft () {
      this.$router.go(-1);
      //   this.$router.back();
    },
    // 2. 保存
    onSave () {
      Toast('save');
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
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
