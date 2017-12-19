const getters = {
  sidebarShow: state => state.common.sidebarShow,
  blogList: state => state.blog.blogList,
  hasSearchResults: state => state.blog.hasSearchResults,
  youtubeVideoInfo: state => state.contact.youtubeVideoInfo,
  closeVideoForm: state => state.contact.closeVideoForm,
  textareaVideoInfo: state => state.contact.textareaVideoInfo,
  closeImageForm: state => state.contact.closeImageForm,
}

export default getters
