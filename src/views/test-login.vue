<template lang="html">
  <div>
    <van-nav-bar title="登录" left-text="返回" right-text="注册" left-arrow @click-right="regist" />
    <van-form @submit="onSubmit" ref="loginform">
      <van-field v-model="username" name="mobile" placeholder="手机号" :rules="formrule.mobile">
        <i slot="left-icon" class="iconfont">&#xe60a;</i>
      </van-field>
      <van-field name="验证码" v-model="password" placeholder="验证码" :rules="formrule.code">
        <i slot="left-icon" class="iconfont">&#xe60c;</i>
        <van-button slot="right-icon" v-if="!flag" class="regCode" native-type="button">
        <van-count-down ref="countDown" millisecond :time="6000" :auto-start="true" format="ss秒后重新获取" @finish="finish" /></van-button>
        <!-- <i slot="right-icon" class="regCode" v-if="flag" @click="sendCode">发送验证码</i> -->
        <van-button slot="right-icon" class="regCode" v-if="flag" @click="sendCode" native-type="button">发送验证码</van-button>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login, sendSms } from '@/api/user'
export default {
  data () {
    return {
      flag: true,
      username: '',
      password: '',
      formrule: {
        mobile: [
          { required: true, message: '请填写手机号' },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }
        ]
      }
    }
  },
  methods: {
    async sendCode () {
      try {
        await this.$refs.loginform.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }
      this.flag = false
      try {
        await sendSms(this.username)
        this.$toast('验证码发送成功')
      } catch (err) {
        this.flag = true
        this.$toast('验证码发送失败')
      }
      // if (this.username !== '') {
      //   this.flag = false
      //   this.$toast('验证码发送成功')
      // } else {
      //   this.$toast(this.formrule.mobile[1].message)
      // }
    },
    finish () {
      this.flag = true
    },
    regist () {
      console.log('ok')
    },
    async onSubmit () {
      const user = { mobile: this.username, code: this.password }
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 2000
      })
      try {
        const res = await login(user)
        console.log('ok', res)
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.van-button {
  width: 694px;
  height: 88px;
  background-color: #6db4fb;
  border-radius: 10px;
  font-family: MicrosoftYaHei;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 2px;
  color: #ffffff;
}

.van-nav-bar {
  background: #3296fa;

  /deep/.van-nav-bar__title {
    color: white;
  }
}

/deep/.van-field__control {
  margin-left: 10px;
}

.regCode {
  font-family: MicrosoftYaHei;
  font-size: 5px;
  // padding: 5px ;
  background: #ededed;
  color: #666666;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .van-count-down{
     font-size: 5px;
     color: #666666;
     background: #ededed;
     border-radius: 10px;
  }
}
</style>
