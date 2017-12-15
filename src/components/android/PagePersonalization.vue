<template>
  <div class="wrapper">
    <img src="/static/img/android/mobilesite-andriod_25.png" style="width: 100%; background: url(/static/img/android/bg3.png) no-repeat;
    background-size: 100% 100%;">
    <p style="font-size: 36px; margin: 20px 0;">PERSONALIZATION</p>
    <el-row style="padding: 0 20px;">
      <el-col :span="12">
        <img src="/static/img/android/mobilesite-andriod_28.png">
        <p>DIY Your Own Keyboard with the Favorite Photo, Wallpaper</p>
      </el-col>
      <el-col :span="12">
        <img src="/static/img/android/mobilesite-andriod_30.png">
        <p>Thousands of Colorful Themes to be Chosen</p>
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
    margin-bottom: 40px;

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }
  }
</style>
