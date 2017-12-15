<template>
  <div class="index">
    <common-header></common-header>
    <ios-body></ios-body>
    <common-sidebar></common-sidebar>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import IosBody from './ios/IosBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'ios',
    components: {CommonHeader, IosBody, CommonTail, CommonSidebar},
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
