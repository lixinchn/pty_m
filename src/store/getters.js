const getters = {
  sidebarShow: state => state.common.sidebarShow,
  blogList: state => state.blog.blogList,
  hasSearchResults: state => state.blog.hasSearchResults,
}

export default getters
