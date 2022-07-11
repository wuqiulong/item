<template lang="html">
  <div>
    <van-nav-bar title="登录" left-text="返回" right-text="注册" left-arrow @click-right="regist" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" placeholder="手机号">
        <i slot="left-icon" class="iconfont">&#xe60a;</i>
      </van-field>
      <van-field name="验证码" placeholder="验证码">
        <i slot="left-icon" class="iconfont">&#xe60c;</i>
        <i slot="right-icon" class="regCode">获取验证码</i>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    regist () {
      console.log('ok')
    },
    onSubmit (values) {
      console.log('submit', values)
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
    color: white
  }
}

/deep/.van-field__control {
  margin-left: 10px;
}

.regCode {
  font-family: MicrosoftYaHei;
  font-size: 5px;
  padding: 5px auto;
  background: #ededed;
  color: #666666;
  border-radius: 10px;
}
</style>
