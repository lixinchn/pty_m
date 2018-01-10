<template>
  <div class="b-wrapper" :style="autoStyle">
    <div class="content">
      <p class="title">{{sliceInfo.title}}</p>
      <!-- <p class="title">POWERED BY YOU</p> -->
      <div style="margin: 14px 0;">
        <p class="s-title">{{sliceInfo.subTitle}}</p>
        <a href="http://typany.com/api/go.php?id=3"><img src="/static/img/index/fb.png" style="vertical-align: middle;"></a>
      </div>
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
        sliceInfo: {},
      }
    },

    methods: {
      getSliceInfo() {
        this.$store.dispatch('INDEX_GetSliceInfo').then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.msg)
            return
          }

          // random pick one
          console.log(data.data.list)
          let index = (new Date().getTime()) % data.data.list.length
          if (data.data.list && data.data.list[index])
            this.sliceInfo = data.data.list[index]
        })
      }
    },

    created() {
      this.getSliceInfo()
    },

    computed: {
      autoStyle() {
        let bgUrl = 'url(' + (this.sliceInfo.bgUrl || 'http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-index-bg.png') + ')'
        return {
          'background-image': bgUrl,
          'background-repeat': 'no-repeat',
          'background-size': '100% 100%',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 380px) {
    .content {

      .title {
        font-size: 25px !important;
      }

      .s-title {
        font-size: 10px !important;
        max-width: 85% !important;
      }
    }
  }

  @media (max-width: 330px) {
    .btn {
      display: block !important;
    }
  }

  .b-wrapper {
    width: 100%;
    height: 100%;

    .content {
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 95%;


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
        display: inline-block;
        overflow: hidden;
        max-width: 90%;
        margin: 0;
      }

      .btn {
        height: 61px;
        width: 172px;
        display: inline-block;
      }

      .g-btn {
        background: url(/static/img/index/google-play.png) no-repeat;
        background-size: 200%;
        &:active {
          background-position: -172px 0;
          background-size: 200%
        }
      }

      .a-btn {
        background: url(/static/img/index/app-store.png) no-repeat;
        background-size: 200%;
        &:active {
          background-position: -172px 0;
          background-size: 200%
        }
      }
    }
  }
</style>
