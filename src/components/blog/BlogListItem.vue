<template>
  <div class="wrapper" @click="onClick(blog.id, blog.thumbUrl)" :style="{float: float}">
    <img :src="blog.thumbUrl" class="thumb">
    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7YDjHjnP5DURcPrZpcFPO6BI6I4kOiqTvNeCy4NRYFbA--5J" class="thumb"> -->
    <p class="title">{{blog.title}}</p>
    <!-- <p class="title">test test test test test test test test test test test test test test test test test test test test test test</p> -->
    <div class="detail">
      <p>{{pubDate(blog.pubTime)}}</p>
      <p class="bucket">{{blog.bucket}}</p>
      <img src="/static/img/blog/comment.png" style="vertical-align: middle; float: right; width: 14px;">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog-list-item',
    components: {},
    props: {
      blog: {
        type: Object,
      },
      float: {
        type: String,
      }
    },
    data () {
      return {
      }
    },

    methods: {
      onClick(id, thumbUrl) {
        this.$router.push({path: 'blog/detail', query: {id: id}})
      },

      pubDate(pubTime) {
        return pubTime.substr(0, 10)
      },
    },

    created() {

    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 330px) {
    .bucket {
      max-width: 35px !important;
    }
  }

  .wrapper {
    display: inline-block;
    width: 48%;
    height: 210px;
    border: 1px solid #dfdfdf;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    margin: 10px 0;

    .thumb {
      width: 100%;
      height: 128px;
      border: 0;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    .title {
      display: block;
      display: -webkit-box;
      font-family: Helvetica;
      font-size: 16px;
      line-height: 18px;
      color: #000;
      height: 36px;
      margin: 0px 10px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail {
      text-align: left;
      font-size: 12px;
      margin: 15px 12px 0px 12px;
      height: 20px;
      * {
        display: inline-block;
        margin: 0;
        overflow: hidden;
      }

      .bucket {
        margin-left: 5px;
        max-width: 50px;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
