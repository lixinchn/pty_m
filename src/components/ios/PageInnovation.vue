<template>
  <div class="wrapper">
    <img src="/static/img/ios/mobilesite-ios2_03.png" style="width: 80%; min-height: 200px;">
    <p style="font-size: 26px; margin: 20px 0;">INNOVATION</p>
    <el-row>
      <el-col :span="8" style="padding: 0 8px;">
        <img src="/static/img/ios/mobilesite-ios2_07.png">
        <p>First iOS Keyboard Designed for Left-handed User</p>
      </el-col>
      <el-col :span="8" style="padding: 0 8px;">
        <img src="/static/img/ios/mobilesite-ios2_09.png">
        <p>Smart Saver for Password to Save Time and Reduce Frustration</p>
      </el-col>
      <el-col :span="8" style="padding: 0 8px;">
        <img src="/static/img/ios/mobilesite-ios2_07-11.png">
        <p>Revolutionary Clipboard to Make Typing Faster</p>
      </el-col>
    </el-row>
    <a class="app-store" href="http://typany.com/api/go.php?id=2"></a>
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
    background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-ios-innovation-bg.png) no-repeat;
    background-size: 100% 70%;
    margin-bottom: 40px;

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }

    img {
      width: 50px;
    }

    .app-store {
      width: 241px;
      height: 65px;
      background: url(/static/img/ios/app-store.png) no-repeat;
      background-size: 200%;
      margin: 20px auto;
      display: block;

      &:active {
        background-position: -241px 0;
        background-size: 200%;
      }

      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=m_ios_a_top&action=click);
        display: none;
      }
    }
  }
</style>
