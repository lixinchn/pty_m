<template>
  <div class="container" v-show="sidebarShow">
    <div class="left-side" @click="onCloseSidebar"></div>
    <div class="right-side">
      <div style="width: 100%; text-align: left;">
        <a href="/"><img src="/static/img/common/sidebar-typany.png" style="width: 50%; margin: 28px 0 28px 30px;"></a>
      </div>
      <div class="split"></div>
      <div style="width: 100%;">
        <div v-for="(item, index) in firstList" :key="item.title + index" class="list" @click="onCloseSidebar">
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
        <div class="split" style="margin: 13px 0 13px 30px;"></div>
        <div v-for="(item, index) in secondList" :key="item.title + index" class="list" @click="onCloseSidebar">
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
      </div>
      <div style="position: absolute; bottom: 0; width: 100%;">
        <div v-for="(item, index) in thirdList" :key="item.title + index" class="list list-bottom" @click="onCloseSidebar">
          <router-link :to="item.path">{{item.title}}</router-link>
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
          {title: 'iOS', path: '/ios'},
          {title: 'Android', path: '/android'},
        ],
        secondList: [
          {title: 'About us', path: '/about'},
          {title: 'Blog', path: '/blog'},
          {title: 'Contact', path: '/contact'},
        ],
        thirdList: [
          {title: 'Terms of Service', path: '/service'},
          {title: 'Privacy Policy', path: '/policy'},
          {title: 'Typany© Inc.2018', path: '#'},
        ],
      }
    },

    methods: {
      onCloseSidebar() {
        this.$store.dispatch('COMMON_SetSidebarShow', false).then(() => {})
      }
    },

    created() {
    },

    computed: {
      ...mapGetters([
        'sidebarShow',
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0; top: 0;
    z-index: 1000;

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
      a {
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
</style>
