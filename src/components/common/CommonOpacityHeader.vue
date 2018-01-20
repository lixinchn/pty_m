<template>
  <div class="h-container" :style="{width: width, background: background, position: position}">
    <div class="h-logo-wrapper">
      <img src="/static/img/common/logo.png" class="v-m-content h-logo" @click="onGoToIndex">
      <img src="/static/img/common/typany.png" class="v-m-content h-title" @click="onGoToIndex">
    </div>
    <img src="/static/img/common/handle.png" class="h-handle" @click="onOpenSidebar">
  </div>
</template>

<script>
  export default {
    name: 'CommonHeader',
    props: {
      width: {
        type: String,
        default: '100%',
      },
      background: {
        type: String,
        default: 'rgba(0, 0, 0, 0)'
      },
      position: {
        type: String,
        default: 'relative',
      }
    },
    data () {
      return {
      }
    },

    methods: {
      onGoToIndex() {
        this.$router.push({name: 'index'})
      },

      onOpenSidebar() {
        this.$store.dispatch('COMMON_SetSidebarShow', true).then(() => {})
      },
    },

    created() {
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .h-container {
    height: 90px;
    text-align: left;
    margin: 0 auto;
    overflow: hidde;

    .h-logo-wrapper {
      overflow: hidden;
      display: inline-block;

      &:active::after {
        content: url(http://typany.com/api/pingback.php?loc=m_index_logo&action=click);
        display: none;
      }
    }

    .v-m-content {
      float: left;
    }

    .h-logo {
      margin-top: 15px;
      margin-left: 15px;
      vertical-align: middle;
      width: 40px;
    }

    .h-title {
      margin-top: 28px;
      margin-left: 15px;
      width: 100px;
    }

    .h-handle {
      float: right;
      width: 30px;
      margin: 23px 20px 0 0;
    }
  }
</style>
