<template>
  <div class="wrapper">
    <img class="gallary" :src="bannerUrl" :style="{width: width}">
    <div class="content-wrapper" :style="{width: width}">
      <div v-html="content" class="blog-content"></div>
    </div>
  </div>
</template>

<script>
  import {createGetParams} from '../../utils/param'

  export default {
    name: 'blog-detail-body',
    components: {},
    props: {
      width: {
        type: String,
        default: '100%',
      },
      blogId: {
        type: Number,
      },
    },
    data () {
      return {
        content: '',
        bannerUrl: '',
      }
    },

    methods: {
      getBlogInfo() {
        const data = {id: this.blogId}
        this.$store.dispatch('BLOG_GetBlogInfo', createGetParams(data)).then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          this.content = decodeURIComponent(data.data.content)
          this.bannerUrl = data.data.bannerUrl
        }).catch(err => {
          this.$message.error(err)
        })
      }
    },

    created() {
      this.getBlogInfo()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    .gallary {
    }
    .content-wrapper {
      overflow: auto;
      text-align: left;

      .blog-content {
        overflow: hidden;
        width: 100%;
      }
    }
  }
</style>
