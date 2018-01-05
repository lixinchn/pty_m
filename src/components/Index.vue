<template>
  <div class="index">
    <common-opacity-header position="absolute"></common-opacity-header>
    <index-body></index-body>
    <common-sidebar></common-sidebar>
  </div>
</template>

<script>
  import CommonOpacityHeader from './common/CommonOpacityHeader'
  import IndexBody from './index/IndexBody'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'index',
    components: {CommonOpacityHeader, IndexBody, CommonSidebar},
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
  .index {
    width: 100%;
    height: 100%;
  }
</style>
