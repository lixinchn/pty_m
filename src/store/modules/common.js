const contact = {
  state: {
    sidebarShow: false,
  },
  mutations: {
    SET_SIDEBAR_SHOW: (state, showOrNot) => {
      state.sidebarShow = showOrNot
    },
  },

  actions: {
    COMMON_SetSidebarShow({commit}, showOrNot) {
      return new Promise((resolve, reject) => {
        commit('SET_SIDEBAR_SHOW', showOrNot)
        resolve()
      })
    },
  }
}

export default contact
