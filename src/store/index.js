import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import blog from './modules/blog'
import index from './modules/index'
import contact from './modules/contact'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    blog,
    contact,
    index,
  },
  getters,
})

window.onorientationchange = () => {
  switch (window.orientation) {
    case -90:
    case 90:
      console.log('横屏')
      break
    case 0:
    case 180:
      console.log('竖屏')
      break
  }
}

export default store
