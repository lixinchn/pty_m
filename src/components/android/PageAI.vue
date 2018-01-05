<template>
  <div class="wrapper">
    <lazy-component>
      <img v-lazy="typingGif" style="width: 95%; min-height: 500px;">
    </lazy-component>
    <a href="http://typany.com/api/go.php?id=1"><img src="/static/img/android/mobilesite-andriod_05.png" style="width: 100%;"></a>
    <el-row>
      <el-col :span="8">
        <img src="/static/img/android/mobilesite-andriod_07.png">
        <p>Intelligent AutoCorrect and Prediction</p>
      </el-col>
      <el-col :span="8">
        <img src="/static/img/android/mobilesite-andriod_09.png">
        <p>Intelligent Word-Learning</p>
      </el-col>
      <el-col :span="8">
        <img src="/static/img/android/mobilesite-andriod_11.png">
        <p>Smart Voice Input & Powerful Translator</p>
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
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/ai-typing-android.gif?t=' + Date.now()
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

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }
  }
</style>
