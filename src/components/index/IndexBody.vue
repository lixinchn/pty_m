<template>
  <div class="b-wrapper" :style="autoStyle">
    <div class="content">
      <pre class="title">{{indexSliceInfo.title}}</pre>
      <!-- <p class="title">POWERED BY YOU</p> -->
      <div style="margin: 14px 0; text-align: center;">
        <pre class="s-title">{{indexSliceInfo.subTitle}}</pre>
        <a href="http://typany.com/api/go.php?id=3" class="b-fb"><img src="/static/img/index/fb.png" style="vertical-align: top;"></a>
      </div>
      <div style="text-align: center;">
        <a href="http://typany.com/api/go.php?id=1" class="btn g-btn"></a>
        <a href="http://typany.com/api/go.php?id=2" class="btn a-btn"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'index-body',
    components: {},
    data () {
      return {
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
          // let index = (new Date().getTime()) % data.data.list.length
          // if (data.data.list && data.data.list[index])
          //   this.indexSliceInfo = data.data.list[index]
        })
      }
    },

    created() {
      this.getSliceInfo()
    },

    computed: {
      autoStyle() {
        let bgUrl = 'url(' + (this.indexSliceInfo.bgUrl) + ')'
        return {
          'background-image': bgUrl,
          'background-repeat': 'no-repeat',
          'background-size': '100% 100%',
        }
      },
      ...mapGetters([
        'indexSliceInfo',
      ]),
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
        max-width: 85% !important;
      }
    }
  }

  @media (max-width: 330px) {
    .btn {
      height: 48px !important;
      width: 130px !important;
    }
  }

  .b-wrapper {
    width: 100%;
    height: 100%;

    .content {
      width: 90%;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
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
        text-align: center;
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
        height: 51px;
        width: 142px;
        display: inline-block;
      }

      .g-btn {
        background: url(/static/img/index/google-play.png) no-repeat;
        background-size: 200%;
        &:active {
          background-position: -142px 0;
          background-size: 200%
        }
        &:active::after {
          content: url(http://typany.com/api/pingback.php?loc=m_index_g&action=click);
          display: none;
        }
      }

      .a-btn {
        background: url(/static/img/index/app-store.png) no-repeat;
        background-size: 200%;
        &:active {
          background-position: -142px 0;
          background-size: 200%
        }
        &:active::after {
          content: url(http://typany.com/api/pingback.php?loc=m_index_a&action=click);
          display: none;
        }
      }

      .b-fb {
        &:active::after {
          content: url(http://typany.com/api/pingback.php?loc=m_index_fb&action=click);
          display: none;
        }
      }
    }
  }
</style>
