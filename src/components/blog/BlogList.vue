<template>
  <div class="wrapper" :style="{width: width}">
    <blog-no-results v-if="!getHasSearchResults"></blog-no-results>
    <div style="overflow: hidden;">
      <blog-list-item v-for="(blog, index) in blogList" :blog="blog" :key="index" :float="calcFloat(index)"></blog-list-item>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BlogListItem from './BlogListItem'
  import BlogNoResults from './BlogNoResults'
  import {createGetParams} from '../../utils/param'

  export default {
    name: 'blog-list',
    components: {BlogListItem, BlogNoResults},
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
    data () {
      return {
        category: 0,
        page: 0,
      }
    },

    methods: {
      getRecommendingBlogs() {
        const data = {cnt: 6}
        this.$store.dispatch('BLOG_GetRecommendingBlog', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
        }).catch(err => {
          this.$message.error(err)
        })
      },

      calcFloat(index) {
        return (index % 2 === 0) ? 'left' : 'right'
      }
    },

    created() {
    },

    computed: {
      ...mapGetters([
        'blogList',
      ]),
      ...mapGetters({
        getHasSearchResults: 'hasSearchResults',
      })
    },

    watch: {
      getHasSearchResults(val) {
        // no results ---> get recommending blogs
        if (!val)
          this.getRecommendingBlogs()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    text-align: left;
    margin: 0 auto;
  }
</style>
