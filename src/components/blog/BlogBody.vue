<template>
  <div class="blog-wrapper">
    <div class="split"></div>
    <blog-search-bar :width="childWidth"></blog-search-bar>
    <blog-list :width="childWidth"></blog-list>
  </div>
</template>

<script>
  import BlogSearchBar from './BlogSearchBar'
  import BlogList from './BlogList'
  import {createGetParams} from '../../utils/param'

  export default {
    name: 'blog-body',
    components: {BlogSearchBar, BlogList},
    props: {
    },
    data () {
      return {
        childWidth: '94%',
        page: 1,
        category: 0,
      }
    },

    methods: {
      getBlogList() {
        const data = {cat: this.category, p: this.page}
        this.$store.dispatch('BLOG_GetBlogList', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },

      getBlogListByTag(tag) {
        const data = {tag: tag}
        this.$store.dispatch('BLOG_SearchByKey', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },
    },

    created() {
      const tag = this.$route.query.tag ? decodeURIComponent(this.$route.query.tag) : ''
      if (tag)
        this.getBlogListByTag(tag)
      else
        this.getBlogList()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .blog-wrapper {
    text-align: left;
    width: 100%;
    font-family: Helvetica;

    .split {
      width: 100%;
      height: 2px;
      background: url(/static/img/about/split.png) no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
