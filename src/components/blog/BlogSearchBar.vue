<template>
  <div class="wrapper" :style="{width: width}">
    <div style="position: relative; width: 100%;">
      <input class="search-i" v-model="searchKeyText" v-on:keyup.enter="onSearch(searchKeyText)" @focus="onFocus" @blur="onBlur">
      <img class="search-btn" src="/static/img/blog/search.png" @click="onSearch(searchKeyText)">
      <ul class="tag-list" v-show="tagListShow">
        <li v-for="(item, index) in tagList" :key="index" @click="onSearch(item.title)">
          {{item.title + '(' + (item.count || 0) + ')'}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {createGetParams} from '../../utils/param'
  export default {
    name: 'blog-search-bar',
    props: {
      width: {
        type: String,
        default: '100%',
      }
    },
    data () {
      return {
        tagListShow: false,
        searchKeyText: '',
        tagList: [],
      }
    },

    methods: {
      onSearch(searchKeyText) {
        const searchKey = searchKeyText.trim()
        if (!searchKey)
          return
        this.tagListShow = false
        this.$router.push({path: '/blog', query: {tag: searchKey}})
        location.reload()

        // const data = {tag: searchKey}
        // this.$store.dispatch('BLOG_SearchByKey', createGetParams(data)).then((data) => {
        //   if (data.code) {
        //     this.$message.error('error: ' + data.status)
        //     return
        //   }
        //   console.log(data)
        // }).catch(err => {
        //   this.$message.error(err)
        // })
      },

      onFocus() {
        this.tagListShow = true
      },

      onBlur() {
        this.tagListShow = false
      },

      getBlogCategory() {
        this.$store.dispatch('BLOG_GetBlogCategory').then((data) => {
          if (data.code) {
            this.$message.error('error: ' + data.status)
            return
          }
          this.tagList = data.data.list
        }).catch(err => {
          this.$message.error(err)
        })
      },
    },

    created() {
      this.getBlogCategory()
    },

    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 20px auto 20px auto;
    font-size: 20px;

    .search-i {
      width: 94%;
      margin: 0 auto;
      display: block;
      border: 1px solid #e3e3e3;
      height: 36px;
      font-size: 20px;
      outline: none;
    }

    .search-btn {
      position: absolute;
      right: 1.4rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 26px;
    }

    .tag-list {
      position: absolute;
      margin: 0;
      left: calc(3% - 1px);
      right: calc(3% - 1px);
      padding: 0;
      border: 1px solid #e3e3e3;
      border-top: 0;
      padding: 0 1px;
      background: #fff;
      z-index: 100;
      color: #636363;
      li {
        list-style: none;
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-left: 10px;
        overflow: hidden;
      }
    }
  }
</style>
