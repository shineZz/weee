import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import {mutations} from './mutations'
import * as getters from "./getters.js";
import * as actions from "./actions.js";





Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})
