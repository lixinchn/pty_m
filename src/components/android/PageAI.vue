<template>
  <div class="wrapper">
    <img src="/static/img/android/mobilesite-andriod_03.png" style="width: 100%;">
    <img src="/static/img/android/mobilesite-andriod_05.png" style="width: 100%;">
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
    background: url(/static/img/android/bg1.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 40px;

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }
  }
</style>
