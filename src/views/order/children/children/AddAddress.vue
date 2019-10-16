<template>
  <div id="addAddress">
    <van-nav-bar title="添加地址"
                 left-arrow
                 :fixed=true
                 :border=true
                 @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      save-button-text="保存并使用"
                      @save="onSave"
                      @change-detail="onChangeDetail"
                      style="margin-top:3rem" />
  </div>
</template>

<script type="text/javascript">
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
    // 1.返回上级界面
    onClickLeft () {
      this.$router.go(-1);
      //   this.$router.back();
    },
    // 2. 保存
    onSave () {
      Toast('save');
    },
    // 3.数据改变
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
