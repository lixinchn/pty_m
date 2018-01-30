<template>
  <div class="wrapper">
    <!-- <img src="/static/img/ios/mobilesite-ios2_37-38.png" style="width: 100%;"> -->
    <lazy-component>
      <img v-lazy="typingGif" style="width: 100%;">
    </lazy-component>
    <p style="font-size: 26px; margin: 20px 0;">A.I. TYPING</p>
    <el-row style="padding: 0 20px;">
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/ios/ai-mobile.png">
        <p>Powerful Translator & Smart Voice Input</p>
      </el-col>
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/ios/mobilesite-ios2_41.png">
        <p>Intelligent AutoCorrect and Prediction</p>
      </el-col>
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/ios/mobilesite-ios2_43.png">
        <p>Intelligent Word-Learning</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'page-ai',
    components: {},
    data () {
      return {
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/ai-typing-new-ios.gif'
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
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-ios-ai-bg.png) no-repeat;
    background-size: 100% 100%;
    padding-bottom: 30px;

    img {
      width: 50px;
    }

    p {
      font-size: 14px;
      color: #fff;
      margin: 0;
    }
  }
</style>
