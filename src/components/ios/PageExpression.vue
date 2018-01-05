<template>
  <div class="wrapper">
    <lazy-component>
      <img v-lazy="typingGif" style="width: 100%; background: url(/static/img/ios/experssion-bg.png) no-repeat;
        background-size: 100% 100%;" ref="img">
    </lazy-component>
    <p style="font-size: 36px; margin: 20px 0;">EXPRESSION</p>
    <el-row style="padding: 0 20px;">
      <el-col :span="12" style="padding: 0 15px;">
        <img src="/static/img/ios/mobilesite-ios2_32.png">
        <p>Discover the world of pop culture - memes, TV, Movies, Music and more</p>
      </el-col>
      <el-col :span="12" style="padding: 0 15px;">
        <img src="/static/img/ios/mobilesite-ios2_26-34.png" style="width: 64px;">
        <p>Create Your Own Emoji with Built-in Emoji Maker</p>
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
        typingGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/expression-ios.gif?t=' + Date.now()
      }
    },

    methods: {
    },

    created() {
    },

    mounted() {
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    margin-bottom: 40px;

    img {
      width: 50px;
    }

    p {
      font-size: 14px;
      color: #40415f;
      margin: 0;
    }
  }
</style>
