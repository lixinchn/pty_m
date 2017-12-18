<template>
  <div class="index">
    <common-header></common-header>
    <common-sidebar></common-sidebar>
    <blog-body></blog-body>
    <common-tail></common-tail>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'
  import BlogBody from './blog/BlogBody'


  export default {
    name: 'blog',
    components: {CommonHeader, CommonTail, CommonSidebar, BlogBody},
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
