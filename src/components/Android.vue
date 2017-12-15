<template>
  <div class="index">
    <common-header></common-header>
    <android-body></android-body>
    <common-sidebar></common-sidebar>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import AndroidBody from './android/AndroidBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'android',
    components: {CommonHeader, AndroidBody, CommonTail, CommonSidebar},
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
