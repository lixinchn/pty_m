<template>
  <div class="container" v-show="sidebarShow">
    <div class="left-side" @click="onCloseSidebar"></div>
    <div class="right-side">
      <div style="width: 100%; text-align: left;">
        <a href="/" class="c-logo"><img src="/static/img/common/sidebar-typany.png" style="width: 50%; margin: 28px 0 28px 30px;"></a>
      </div>
      <div class="split"></div>
      <div style="width: 100%;">
        <div v-for="(item, index) in firstList" :key="item.title + index" :class="[item.class, 'list']" @click="onCloseSidebar">
          <p @click="jump(item.path)">{{item.title}}</p>
        </div>
        <div class="split" style="margin: 13px 0 13px 30px;"></div>
        <div v-for="(item, index) in secondList" :key="item.title + index" :class="[item.class, 'list']" @click="onCloseSidebar">
          <p @click="jump(item.path)">{{item.title}}</p>
        </div>
      </div>
      <div style="position: absolute; bottom: 0; width: 100%;">
        <div v-for="(item, index) in thirdList" :key="item.title + index" :class="[item.class, 'list', 'list-bottom']" @click="onCloseSidebar">
          <p @click="jump(item.path)" style="color: rgba(255,255,255,0.2)">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'CommonSidebar',
    props: {},
    data () {
      return {
        firstList: [
          {title: 'iOS', path: '/ios', class: 'c-ios'},
          {title: 'Android', path: '/android', class: 'c-android'},
        ],
        secondList: [
          {title: 'About us', path: '/about', class: 'c-about'},
          {title: 'Blog', path: '/blog', class: 'c-blog'},
          {title: 'Contact', path: '/contact', class: 'c-contact'},
        ],
        thirdList: [
          {title: 'Terms of Service', path: '/service', class: 'c-service'},
          {title: 'Privacy Policy', path: '/policy', class: 'c-policy'},
          {title: '© 2018 TYPANY®', path: ''},
        ],
      }
    },

    methods: {
      onCloseSidebar() {
        this.$store.dispatch('COMMON_SetSidebarShow', false).then(() => {})
      },

      jump(path) {
        if (!path)
          return

        this.$store.dispatch('COMMON_SetSidebarShow', false).then(() => {
          setTimeout(() => {
            this.$router.push({path: path})
            if (this.$route.path === path)
              location.reload()
          }, 100)
        })
      },
      handleScroll(e) {
        if (this.sidebarShow) {
          e.preventDefault()
          e.returnValue = false
        }
      },
    },

    created() {
      window.addEventListener('touchmove', this.handleScroll)
    },

    destroyed() {
      window.removeEventListener('touchmove', this.handleScroll)
    },

    computed: {
      ...mapGetters([
        'sidebarShow',
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  @media (max-height: 600px) {
    .list {
      height: 25px !important;
      line-height: 25px !important;
    }
  }

  .container {
    touch-action: none;
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0; top: 0;
    z-index: 1000;

    &::after {
      content: url(http://typany.com/api/pingback.php?loc=m_head_handle&action=click);
      display: none;
    }

    .left-side, .right-side {
      width: 50%;
      height: 100%;
      float: left;
    }

    .left-side {
      background: rgba(0, 0, 0, 0.4);
    }

    .right-side {
      background: url(http://d2ezgnxmilyqe4.cloudfront.net/media/index/m-sidebar-bg.png) no-repeat;
      background-size: 100% 100%;
    }

    .split {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin-bottom: 13px;
    }

    .list {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      padding-left: 30px;
      p {
        text-decoration: none;
        color: #fff;
        font-family: Helvetica;
        user-select: none;
        width: 100%;
        display: block;
      }
      &:active {
        background: rgba(100, 192, 244, 0.2);
      }
    }

    .list-bottom {
      a {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .c-logo {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_logo&action=click);
      display: none;
    }
  }

  .c-ios {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_ios&action=click);
      display: none;
    }
  }

  .c-android {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_android&action=click);
      display: none;
    }
  }

  .c-about {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_about&action=click);
      display: none;
    }
  }

  .c-blog {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_blog&action=click);
      display: none;
    }
  }

  .c-contact {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_contact&action=click);
      display: none;
    }
  }

  .c-service {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_service&action=click);
      display: none;
    }
  }

  .c-policy {
    &:active::after {
      content: url(http://typany.com/api/pingback.php?loc=m_side_policy&action=click);
      display: none;
    }
  }
</style>
