<template>
  <div class="wrapper">
    <lazy-component>
      <img v-lazy="typingGif" style="width: 70%; min-height: 300px;">
    </lazy-component>
    <a href="http://typany.com/api/go.php?id=1" class="google-play"></a>
    <p style="font-size: 26px; margin: 20px 0; color: #40415f;">A.I. TYPING</p>
    <el-row>
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/android/ai-mobile-android.png">
        <p>Powerful Translator & Smart Voice Input</p>
      </el-col>
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/android/mobilesite-andriod_07.png">
        <p>Intelligent AutoCorrect and Prediction</p>
      </el-col>
      <el-col :span="8" style="padding: 0 6px;">
        <img src="/static/img/android/mobilesite-andriod_09.png">
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
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/ai-typing-android.gif'
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
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-android-bg1.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 40px;

    img {
      width: 50px;
    }

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }

    .google-play {
      width: 207px;
      height: 56px;
      background: url(/static/img/android/google-play.png) no-repeat;
      background-size: 200%;
      margin: 20px auto;
      display: block;

      &:active {
        background-position: -208px 0;
        background-size: 200%;
      }

      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=m_android_g_top&action=click);
        display: none;
      }
    }
  }
</style>
