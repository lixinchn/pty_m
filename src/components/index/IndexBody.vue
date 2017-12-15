<template>
  <div class="b-wrapper">
    <div class="content">
      <p class="title">THE STORY</p>
      <p class="title">POWERED BY YOU</p>
      <p class="s-title">Express yourself without boundaries but Typany</p>
        <a href="http://typany.com/api/go.php?id=1" class="btn g-btn"></a>
        <a href="http://typany.com/api/go.php?id=2" class="btn a-btn"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-body',
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
  .b-wrapper {
    width: 100%;
    height: 100%;
    background: url(/static/img/index/bg.png) no-repeat;
    background-size: 100% 100%;

    .content {
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;

      .title {
        font-family: 'Avenir Light';
        font-size: 35px;
        color: #fff;
        margin: 0;
      }

      .s-title {
        font-family: 'Avenir Book';
        font-size: 14px;
        color: #fff;
      }

      .btn {
        height: 53px;
        width: 150px;
        display: inline-block;
      }

      .g-btn {
        background: url(/static/img/index/google-play.png) no-repeat;
        background-size: 100% 100%;
        &:active {
          background: url(/static/img/index/google-play-active.png);
        }
      }

      .a-btn {
        background: url(/static/img/index/app-store.png) no-repeat;
        background-size: 100% 100%;
        &:active {
          background: url(/static/img/index/app-store-active.png);
        }
      }
    }
  }
</style>
