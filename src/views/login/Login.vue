<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 11:39:10
 * @Description: 登录模块
 * @FilePath: /ddBuy/src/views/login/Login.vue
 -->
<template>
  <div id="login">
    <div class="loginBox"
         @click="changeImage(3)">
      <div class="auth-form">
        <div class="panfish">
          <img :src="imageURL"
               alt="">
        </div>
        <!-- 关闭按钮 -->
        <van-icon name="close"
                  class="closeButton"
                  @click="close" />
        <van-tabs v-model="active"
                  animated>
          <van-tab :title="$t('login.title')">
            <!-- 账号密码登录 -->
            <van-cell-group v-show="!isShowSMSLogin">
              <van-field v-model="login_userName"
                         required
                         clearable
                         :label="$t('login.phoneNumber')"
                         maxlength="11"
                         @click.stop="
                         changeImage(0)"
                         :error-message="phoneNumberRight?'':$t('login.phoneNumberNotCorrect')"
                         :placeholder="$t('login.phoneInput')" />
              <van-field v-model="login_password"
                         type="password"
                         :label="$t('login.pass')"
                         :placeholder="$t('login.passTip')"
                         required
                         @click.stop="changeImage(1)"
                         autocomplete />
              <van-field v-model="imgCaptcha"
                         center
                         clearable
                         maxlength="4"
                         :placeholder="$t('login.varify')">
                <img class="verificationImage"
                     src="http://demo.itlike.com/web/xlmc/api/captcha"
                     alt="captcha"
                     @click.prevent="getCaptcha"
                     ref="imgCaptcha"
                     slot="button">
              </van-field>
              <!-- 手机号快捷登录 -->
            </van-cell-group>
            <van-cell-group v-show="isShowSMSLogin">
              <van-field v-model="login_phone"
                         required
                         clearable
                         maxlength="11"
                         :label="$t('login.phoneNumber')"
                         :placeholder="$t('login.phoneInput')"
                         :error-message="phoneNumberRight?'':$('login.phoneNumberNotCorrect')" />
              <van-field center
                         clearable
                         required
                         :label="$t('login.varify')"
                         maxlength="6"
                         v-model="smsCaptcha"
                         :placeholder="$t('login.varify')">
                <van-button slot="button"
                            size="small"
                            type="primary"
                            v-if="!countDown"
                            :disabled="captchaDisable"
                            @click="sendVerifyCode">{{$t('login.sendVerify')}}</van-button>
                <van-button slot="button"
                            size="small"
                            type="primary"
                            disabled=""
                            v-model="smsCaptcha"
                            v-else>{{$t('login.hasSend')}}{{countDown}}s</van-button>
              </van-field>
            </van-cell-group>
            <van-button type="info"
                        size="large"
                        style="margin-top:1rem"
                        @click='login'>{{$t('login.login')}}</van-button>
            <div class="switchLogin"
                 @click="switchLogin">{{this.isShowSMSLogin?$t('login.phoneVerify'):$t('login.smsMessage')}}</div>
          </van-tab>
          <!-- 注册 -->
          <van-tab :title="$t('login.resgin')">
            <van-cell-group>
              <van-field v-model="register_userName"
                         clearable
                         maxlength="11"
                         :label="$t('login.phoneNumber')"
                         :placeholder="$t('login.phoneInput')"
                         required />
              <van-field v-model="register_pwd"
                         type="password"
                         :label="$t('login.pass')"
                         :placeholder="$t('login.passTip2')"
                         required />
            </van-cell-group>
            <van-button type="info"
                        size="large"
                        style="margin-top:1rem"
                        @click='register'>{{$t('login.resgin')}}</van-button>
          </van-tab>
        </van-tabs>

        <!-- 第三方登录 -->
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }">
          {{$t('login.otherMethods')}}
        </van-divider>
        <van-grid :column-num="2"
                  :border=false>
          <van-grid-item @click="thirdLogin(0)">
            <svg-icon iconClass="wechat" />
            <div class="title">{{$t('login.wechat')}}</div>
          </van-grid-item>
          <van-grid-item @click="thirdLogin(1)">
            <svg-icon iconClass="QQ" />
            <div class="title">{{$t('login.qqchant')}}</div>
          </van-grid-item>
        </van-grid>
        <!-- 底部声明 -->
        <p class="agreement"> {{$t('login.tipTile')}}<br>{{$t('login.tipContent')}}<a @click.stop="agreement(0)"
             class="agreement-box">{{$t('login.tip')}}</a>、<a @click.stop=agreement(1)
             class="agreement-box">{{$t('login.tipProcy')}}</a></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
// 引入Vant的组件
import { Toast, Dialog } from 'vant'
// 引入API调用接口
import { getPhoneCaptcha, phoneCaptchaLogin, pwdLogin } from '../../serve/api/index.js'
// 引入vuex
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      countDown: 0,                 // 倒计时
      active: 0,
      login_userName: '',            // 用户名
      login_password: '',           // 用户密码
      login_phone: '',              // 手机号码

      register_userName: '',        // 注册用户名
      register_pwd: '',             // 注册密码

      imgCaptcha: '',               // 图片验证码
      smsCaptcha: '',               // 短信验证码
      isShowSMSLogin: true,         // 是否短信登录
      switchLoginMsg: this.$t('login.switchLoginMsg'),
      imageURL: require('./../../images/login/normal.png'),
      smsCaptchaResult: null,
      userInfo: null
    };
  },
  computed: {
    // 1.手机号码验证
    phoneNumberRight () {
      let value = this.isShowSMSLogin ? this.login_phone : this.login_userName;
      // 1.1 当输入的手机号大于10位进行验证
      if (value.length > 10) {
        return /[1][3,4,5,6,7,8][0-9]{9}$/.test(value);
      } else {
        return true;
      }
    },
    // 2.发送验证码按钮显示
    captchaDisable () {
      if (this.login_phone.length > 10 && this.phoneNumberRight) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    // 0.mapActions 同步用户信息
    ...mapActions(['syncuserInfo']),
    // 1.账号密码登录及短信验证码切换
    switchLogin () {
      this.isShowSMSLogin = !this.isShowSMSLogin;
    },
    // 2.切换萌猫图片
    changeImage (index) {
      if (index == 0) {
        this.imageURL = require('./../../images/login/greeting.png')
      } else if (index == 1) {
        this.imageURL = require('./../../images/login/blindfold.png')
      } else {
        this.imageURL = require('./../../images/login/normal.png')
      }
    },
    // 3.账号密码登录切换图片验证码
    getCaptcha () {
      // 获取验证码的标签
      let captchaEle = this.$refs.imgCaptcha;
      this.$set(captchaEle, 'src', 'http://demo.itlike.com/web/xlmc/api/captcha?time=' + new Date());
    },
    // 4.获取手机验证码
    async sendVerifyCode () {
      this.countDown = 60;
      this.timeIntervalID = setInterval(() => {
        this.countDown--;
        // 4.1 如果减到0 则清除定时器
        if (this.countDown == 0) {
          clearInterval(this.timeIntervalID);
        }
      }, 1000)

      // 4.2 获取短信验证码
      let result = await getPhoneCaptcha(this.login_phone);
      if (result.success_code == 200) {
        this.smsCaptchaResult = result.data.code;
        // 4.3  获取验证码成功
        Dialog.alert({
          title: this.$t('login.tipTile'),
          message: this.$t('login.message') + result.data.code
        }).then(() => {
        });
      }
    },
    // 5.登录
    async login () {
      if (this.isShowSMSLogin) {
        // 5.1手机验证码登录
        // 5.1.1 验证手机号
        if (!this.phoneNumberRight || this.login_phone.length < 10) {
          Toast({
            message: this.$t('login.pleaseInputCorrectPhoneNumber'),
            duration: 800
          });
          return;
        } else if (this.smsCaptcha < 7 || this.smsCaptcha != Number(this.smsCaptchaResult)) {
          // 5.1.2 验证验证码
          Toast({
            message: this.$t('login.pleaseInputCorrectVerifyNumber'),
            duration: 800
          });
          return;
        }
        // 5.1.3 请求后台登录接口
        let ref = await phoneCaptchaLogin(this.login_phone, this.smsCaptcha);
        // 设置userInfo 保存到vuex和本地
        this.syncuserInfo(ref.data);
        this.$router.back();
      } else {
        // 5.2 账号密码登录
        // 5.2.1 验证输入框
        if (this.login_userName.length < 1) {
          Toast({
            message: this.$t('login.phoneNumber'),
            duration: 800
          });
          return;
        } else if (!this.phoneRegex(this.login_userName)) {
          Toast({
            message: this.$t('login.phoneNumberNotCorrect'),
            duration: 800
          });
          return;
        } else if (this.login_password.length < 1) {
          Toast({
            message: this.$t('login.passNumberNotCorrect'),
            duration: 800
          });
          return;
        } else if (this.imgCaptcha.length < 1) {
          Toast({
            message: this.$t('login.pleaseInputCorrectVerifyNumber'),
            duration: 800
          });
          return;
        }
        // 5.2.2 请求后台
        let ref = await phoneCaptchaLogin(this.login_userName, this.login_password);
        this.syncuserInfo(ref.data);
        this.$router.back();
      }
    },
    // 6.注册
    async register () {
      if (this.register_userName.length < 1) {
        Toast({
          message: this.$t('login.phoneNumberNotEmpty'),
          duration: 800
        })
      } else if (!this.phoneRegex(this.register_userName)) {
        Toast({
          message: this.$t('login.phoneNumberNotCorrect'),
          duration: 800
        })
      } else if (this.register_pwd.length < 0) {
        Toast({
          message: this.$t('login.passTip'),
          duration: 800
        })
      } else if (this.register_pwd.length < 6) {
        Toast({
          message: this.$t('login.passTip2'),
          duration: 800
        })
      } else {
        // 6.1 请求后台登录接口
        let ref = await phoneCaptchaLogin(this.register_userName, this.register_pwd);
        // 设置userInfo 保存到vuex和本地
        this.syncuserInfo(ref.data);
        this.$router.back();
      }
    },
    // 7.用户协议
    agreement (index) {
      if (index == 0) {
        Toast({
          message: this.$t('login.tip'),
          duration: 800
        })
      } else {
        Toast({
          message: this.$t('login.tipProcy'),
          duration: 800
        })
      }
    },
    // 8.关闭
    close () {
      this.$router.back();
    },
    // 9.第三方登录
    thirdLogin (value) {

      if (value == 0) {
        Toast({
          message: this.$t('login.otherWechat'),
          duration: 800
        });
      } else {
        Toast({
          message: this.$t('login.otherQQ'),
          duration: 800
        });
      }
    },
    // 正则验证
    phoneRegex (number) {
      return (/[1][3,4,5,6,7,8][0-9]{9}$/.test(number));
    }
  }
}
</script>
<style lang="less" scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../images/login/back2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .loginBox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    opacity: 0.95;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    .auth-form {
      position: relative;
      padding: 2rem;
      width: 26.5rem;
      max-width: 90%;
      font-size: 1.167rem;
      background-color: #fff;
      border-radius: 8px;
      box-sizing: border-box;
    }
    img {
      position: absolute;
      top: 1rem;
      left: 50%;
      width: 4rem;
      transform: translate(-50%, -70%);
      z-index: 1;
      @media screen and (max-width: 320px) {
        top: 0.5rem;
        transform: translate(-50%, -40%);
        width: 5rem;
      }
    }
    .closeButton {
      position: absolute;
      right: 1rem;
      top: 0.4rem;
    }
    .verificationImage {
      position: absolute;
      right: 0;
      width: 8rem;
      height: 3rem;
      margin-left: 3rem;
    }
    .switchLogin {
      margin-top: 1rem;
      font-size: 0.78rem;
    }
  }
}
.title {
  padding: 0.5rem;
  font-size: 0.5rem;
  color: grey;
}
.agreement {
  // margin-top: 1.667rem;
  line-height: 1rem;
  color: #767676;
  font-size: 0.867rem;
  .agreement-box {
    color: blue;
  }
}
</style>
