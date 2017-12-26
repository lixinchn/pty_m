<template>
  <div class="wrapper">
    <img src="/static/img/android/mobilesite-andriod_34.png" style="width: 100%;">
    <p style="font-size: 36px; margin: 20px 0; color: #fff;">PERSONALIZATION</p>
    <el-row style="padding: 0 20px;">
      <el-col :span="12">
        <img src="/static/img/android/mobilesite-andriod_37.png">
        <p>Convenient Emoji Prediction, Based on What You've Just Typed</p>
      </el-col>
      <el-col :span="12">
        <img src="/static/img/android/mobilesite-andriod_39.png">
        <p>Simply swipe-to-type with Typany Flow</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'page-expression',
    components: {},
    data () {
      return {
      }
    },

    methods: {
    },

    created() {
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-android-bg4.png) no-repeat;
    background-size: 100% 100%;
    padding-bottom: 40px;

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }
  }
</style>
