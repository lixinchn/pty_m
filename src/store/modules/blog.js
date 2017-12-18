import {BLOG_SearchByKey, BLOG_GetBlogCategory, BLOG_GetRecommendingBlog, BLOG_GetBlogList} from '../../api/blog'


const blog = {
  state: {
    blogList: [],
    hasSearchResults: true,
  },
  mutations: {
    SET_BLOG_LIST: (state, blogList) => {
      state.blogList = blogList
    },
    SET_HAS_SEARCH_RESULTS: (state, hasOrNot) => {
      state.hasSearchResults = hasOrNot
    },
  },

  actions: {
    BLOG_SearchByKey({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_SearchByKey(data).then(response => {
          if (response.data.data.list && response.data.data.list.length > 0) {
            commit('SET_BLOG_LIST', response.data.data.list)
            commit('SET_HAS_SEARCH_RESULTS', true)
          } else {
            commit('SET_BLOG_LIST', [])
            commit('SET_HAS_SEARCH_RESULTS', false)
          }
          resolve(response.data)
        })
      })
    },

    // 获取 blog category
    BLOG_GetBlogCategory({commit}) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogCategory().then(response => {
          resolve(response.data)
        })
      })
    },

    BLOG_GetRecommendingBlog({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_GetRecommendingBlog(data).then(response => {
          if (response.data.data && response.data.data.length > 0) {
            commit('SET_BLOG_LIST', response.data.data)
          }
          resolve(response.data)
        })
      })
    },

    BLOG_GetBlogList({commit}, data) {
      return new Promise((resolve, reject) => {
        BLOG_GetBlogList(data).then(response => {
          if (response.data.data.list)
            commit('SET_BLOG_LIST', response.data.data.list)
          resolve(response.data)
        })
      })
    },
  },
}

export default blog
