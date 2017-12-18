<template>
  <div class="index">
    <common-header></common-header>
    <blog-detail-body :blogId="blogId"></blog-detail-body>
    <blog-comment :blogId="blogId"></blog-comment>
    <common-tail :top="top"></common-tail>
    <common-sidebar></common-sidebar>
  </div>
</template>

<script>
  import CommonHeader from './common/CommonHeader'
  import BlogDetailBody from './blog/BlogDetailBody'
  import BlogComment from './blog/BlogComment'
  import CommonTail from './common/CommonTail'
  import CommonSidebar from './common/CommonSidebar'

  export default {
    name: 'blog',
    components: {CommonHeader, BlogDetailBody, BlogComment, CommonTail, CommonSidebar},
    data () {
      return {
        top: '0px',
        blogId: 0,
      }
    },

    methods: {
    },

    created() {
      this.blogId = +this.$route.query.id
    },

    computed: {
    }
}
</script>

<style lang="scss" scoped>
</style>
