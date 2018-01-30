<template>
  <div class="wrapper">
    <lazy-component>
      <img v-lazy="expGif" style="width: 100%; background: url(/static/img/android/bg2.png) no-repeat;
        background-size: 100% 100%;">
    </lazy-component>
    <p style="font-size: 26px; margin: 20px 0;">EXPRESSION</p>
    <el-row style="padding: 0 20px;">
      <el-col :span="12" style="padding: 0 15px;">
        <img src="/static/img/android/mobilesite-andriod_19.png">
        <p>Discover the world of pop culture - memes, TV, Movies, Music and more</p>
      </el-col>
      <el-col :span="12" style="padding: 0 15px;">
        <img src="/static/img/android/mobilesite-andriod_21.png" style="width: 64px;">
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
        expGif: 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/expression-new-android-mobile.gif'
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
