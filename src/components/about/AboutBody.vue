<template>
  <div class="about-wrapper">
    <div class="split"></div>
    <div style="margin: 0 30px;">
      <div class="content">
        <p class="title">Who is Typany Keyboard?</p>
        <p style="margin-bottom: 20px;">Typany Keyboard is one of the fastest-growing apps in its category on Android & iOS, responding to growing consumer demand for a better way to quickly express thoughts and feelings visually -- empowering people to speak the language across mobile apps and messaging services is an important part of delivering on consumer expectation.</p>
        <p style="margin-bottom: 20px;">Typany Keyboard supports more than 100 languages, revolutionizing typing experience through its lightning-fast personalized prediction technology and comprehensive customization features using AI (something that they put a lot of emphasis on). </p>
        <p style="margin-bottom: 20px;">Besides, it’s powered by Sogou, mostly known in China for its language input method, the input method everyone uses.</p>
        <p class="title">Typany’s Mission</p>
        <p style="margin-bottom: 20px;">Typany Keyboard’s mission is to team up the users to bring the the smartest, most diverse, time-saving solution to millions more people worldwide.</p>
        <p class="title">Why Typany?</p>
        <p style="margin-bottom: 20px;">Typany Keyboard offers benefits such as enhanced predictive text and autocorrect, better personalisation and customizability, the ability to search anything right from the keyboard, emoji suggestion shortcuts, and more.</p>
        <p style="margin-bottom: 20px;">Always struggling with the keyboard of your phone? Check out Typany Keyboard to <span style="font-weight: bold">get you typing faster.</span></p>

        <p class="title" style="text-align: center; font-size: 30px;">The Press</p>
        <p style="">Better aesthetics</p>
        <p style="">"And from China comes Typany Keyboard for Android and iOS—it feels sort of like the ultimate in bright and varied keyboard themes, if your eyes can take it."</p>
        <p style="margin-bottom: 20px; font-weight: bold;">GIZMODO</p>
        <br>
        <p style="">"It doesn't have a ton of features, but it does have a ton of flash. It boasts tons of themes, stickers, emoji, and more. Perhaps the best part that it's all entirely free with no in-app purchases."</p>
        <p style="margin-bottom: 20px; font-weight: bold;">Android Authority</p>
      </div>
    </div>
    <div class="banner">
      <div class="b-content">
        <p style="font-size: 14px; color: #fff; margin: 5px 0;">We're still striving for more improvement and innovation.</p>
        <p style="font-size: 20px; color: #fff; margin: 5px 0;">We will always here to</p>
        <p style="font-size: 20px; color: #fff; margin: 5px 0;">hear your voice.</p>
      </div>
      <div class="b-bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about-body',
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
  .about-wrapper {
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
