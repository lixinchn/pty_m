<template>
  <div class="blog-wrapper">
    <div class="split"></div>
    <blog-search-bar></blog-search-bar>
    <blog-list :width="childWidth"></blog-list>
    <div style="text-align: center; margin: 20px auto;" v-show="pending"><img src="/static/img/blog/loading.png" class="blog-loading"></div>
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
        keyPage: 1,
        category: 0,
        noMoreBlog: false,
        pending: true,
        tag: '',
      }
    },

    methods: {
      getBlogList() {
        const data = {cat: this.category, p: this.page}
        this.$store.dispatch('BLOG_GetBlogList', {data: createGetParams(data), p: this.page}).then((data) => {
          this.pending = false
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
          if (data.data.endFlag)
            this.noMoreBlog = true
        }).catch(err => {
          this.$message.error(err)
        })
      },

      getBlogListByTag(tag) {
        const data = {tag: tag, p: this.keyPage}
        this.$store.dispatch('BLOG_SearchByKey', {data: createGetParams(data), p: this.keyPage}).then((data) => {
          this.pending = false
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          console.log(data)
          if (data.data.endFlag)
            this.noMoreBlog = true
        }).catch(err => {
          this.$message.error(err)
        })
      },

      handleScroll(e) {
        if (!this.noMoreBlog && !this.pending && (window.scrollY + document.body.offsetHeight) / document.body.scrollHeight >= 0.85) {
          this.pending = true
          if (this.tag) {
            ++this.keyPage
            this.getBlogListByTag(this.tag)
          } else {
            ++this.page
            this.getBlogList()
          }
        }
      },
    },

    created() {
      this.tag = this.$route.query.tag ? decodeURIComponent(this.$route.query.tag) : ''
      this.tag ? this.getBlogListByTag(this.tag) : this.getBlogList()
      window.addEventListener('scroll', this.handleScroll)
    },

    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  @-webkit-keyframes changehovertree{0%{-webkit-transform:rotate(0)} 50%{-webkit-transform:rotate(180deg)} 100%{-webkit-transform:rotate(360deg)}}
  @keyframes changehovertree{0%{transform:rotate(0)}  50%{transform:rotate(180deg)} 100%{transform:rotate(360deg)}}
  .blog-loading {
    width: 40px;
    animation:changehovertree 1s linear infinite;
  }

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
