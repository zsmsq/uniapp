// 引入 注册 使用
import Vuex from "vuex"
import Vue from "vue"
import home from './modules/home.js'
Vue.use(Vuex)
const state={}
const mutations={}
const actions={}
const getters={}
const modules={
	home
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules
	
})