<template>
  <div class="index">
    <common-header></common-header>
    <about-body></about-body>
    <common-sidebar></common-sidebar>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import AboutBody from './about/AboutBody'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'


  export default {
    name: 'about',
    components: {CommonHeader, AboutBody, CommonTail, CommonSidebar},
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
</style>
