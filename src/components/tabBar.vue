<!--  -->
<template>
        <van-tabbar  route>
        <van-tabbar-item replace to="/mainPage">
            <span>首页</span>
            <template #icon=''>
                <i class="iconfont">&#xe609;</i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/qaPage">
            <span>问答</span>
            <template #icon=''>
                <i class="iconfont">&#xe60e;</i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/videoPage">
            <span>视频</span>
            <template #icon=''>
                <i class="iconfont">&#xe607;</i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/myPage">
            <span>我的</span>
            <template #icon=''>
                <i class="iconfont">&#xe60d;</i>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default {

  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped>
.iconfont{
    font-size: large;
}
</style>
