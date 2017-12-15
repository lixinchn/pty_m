<template>
  <div class="index">
    <common-header position="fixed"></common-header>
    <index-body></index-body>
    <common-sidebar></common-sidebar>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import IndexBody from './index/IndexBody'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'index',
    components: {CommonHeader, IndexBody, CommonSidebar},
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
