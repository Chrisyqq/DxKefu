/**
 * Created by Chris on 17/5/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

export default store
