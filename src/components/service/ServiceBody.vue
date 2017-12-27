<template>
  <div class="service-wrapper">
    <div class="split"></div>
    <div style="margin: 0 30px;">
      <div class="content">
        <p class="title">ABOUT TYPANY</p>
        <p style="margin-bottom: 20px;">What would you do if other people suddenly couldn't understand you?</p>
        <p style="margin-bottom: 20px;">What would you do if you couldn't understand other people</p>
        <p style="margin-bottom: 20px;">Indeed the people are one and they all have one language, and this is what they begin to do:</p>
        <p style="margin-bottom: 40px; font-size: 20px;">INSTALL TYPANY TO REMOVE LANGUAGE BARRIERS.</p>
        <p style="margin-bottom: 40px;">Typany is the developer to make your device better than ever with a customized keyboard that suits your style</p>
        <p style="margin-bottom: 40px;">Typany Keyboard designed for efficient typing experience and easier communication for each user. Smart auto-correction, accurate word prediction, countless DIY combination, intelligent calculation during typing...</p>
        <p style="margin-bottom: 20px;">Typany Keyboard creates style community to define your own character to more interpersonal communication.</p>
      </div>
    </div>
    <div class="banner">
      <div class="b-content">
        <p style="font-size: 14px; color: #fff; margin: 5px 0;">We're still striving for more improvement and innovation.</p>
        <p style="font-size: 20px; color: #fff; margin: 5px 0;">Typany Keyboard is always here to</p>
        <p style="font-size: 20px; color: #fff; margin: 5px 0;">hear your voice.</p>
      </div>
      <div class="b-bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service-body',
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
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
  .service-wrapper {
    text-align: left;
    width: 100%;
    font-family: Helvetica;

    .split {
      width: 100%;
      height: 2px;
      background: url(/static/img/about/split.png) no-repeat;
      background-size: 100% 100%;
    }

    .title {
      font-size: 30px;
      color: #454545;
    }

    .banner {
      width: 100%;
      height: 200px;
      background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-about-back1.png) no-repeat;
      background-size: 100% 100%;
      position: relative;

      .b-content {
        width: 90%;
        text-align: center;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }
    .b-bg {
      background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-about-back2.png) no-repeat;
      background-size: 100% 100%;
      width: 70%;
      height: 100%;
      position: absolute;
      right: 0px;
    }
  }
</style>
