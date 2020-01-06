<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 16:26:00
 * @Description: 个人中心->语言切换
 * @FilePath: /ddBuy/src/views/mine/Children/SwitchLanguage.vue
 -->
<template>
  <div id="switchLanguage">
    <van-nav-bar :title="$t('mine.switchLanguage')"
                 :fixed=true
                 :border=false
                 @click-left="onClickLeft"
                 left-arrow
                 @click-right="onClickSave"
                 :right-text="$t('mine.confirm')"
                 style="height:2.5rem" />

    <div style="margin-top:3rem">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell :title="$t('mine.chinese')"
                    clickable
                    @click="radio = 'zh'">
            <van-radio slot="right-icon"
                       name="zh" />
          </van-cell>
          <van-cell :title="$t('mine.english')"
                    clickable
                    @click="radio = 'en'">
            <van-radio slot="right-icon"
                       name="en" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant'
import { phoneCaptchaLogin } from './../../../serve/api/index.js'
import Cookies from "js-cookie";
// 设置vant的多语言
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';

export default {
  data () {
    return {
      radio: Cookies.get("language")
    }
  },
  methods: {
    // 返回按钮
    onClickLeft () {
      this.$router.back();
    },
    // 保存
    onClickSave () {
      if (this.radio == "zh") {
        this.$i18n.locale = "zh";
        this.$store.dispatch("setLanguage", "zh");
        Locale.use('zh-CN', zhCN);
      } else {
        this.$i18n.locale = "en";
        this.$store.dispatch("setLanguage", "en");
        Locale.use('en-US', enUS);
      }
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
#switchLanguage {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .van-nav-bar__text {
    color: #45c763;
  }
}
</style>