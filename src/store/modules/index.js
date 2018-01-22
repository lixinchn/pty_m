import {GetSliceInfo} from '../../api/index'


const index = {
  state: {
    sliceInfo: [],
    indexSliceInfo: {},
  },
  mutations: {
    SET_SLICE_INFO: (state, sliceInfo) => {
      state.sliceInfo = sliceInfo
    },
    SET_INDEX_SLICE_INFO: (state, sliceInfo) => {
      let index = (new Date().getTime()) % sliceInfo.length
      if (sliceInfo && sliceInfo[index])
        state.indexSliceInfo = sliceInfo[index]
      state.indexSliceInfo.title = state.indexSliceInfo.title.replace('\\n', '\n')
    }
  },

  actions: {
    // 获取首页轮播图信息
    INDEX_GetSliceInfo({commit}) {
      return new Promise((resolve, reject) => {
        GetSliceInfo().then(response => {
          if (response.data.data.list) {
            commit('SET_SLICE_INFO', response.data.data.list)
            commit('SET_INDEX_SLICE_INFO', response.data.data.list)
          }
          resolve(response.data)
        })
      })
    },
  }
}

export default index
