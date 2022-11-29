import request from '../../utils/request.js'
const state = {
	indexData: {}
}
const mutations = {
	SET_INDEXDATA(state, indexData) {
		state.indexData = indexData
	}
}
const actions = {
	async getIndexData({commit}) {
		const res = await request('/getIndexData')
		commit('SET_INDEXDATA', res)
	}
}
const getters = {
	navList(state) {
		return ((state.indexData.kingKongModule || {}).kingKongList) || []
	},
	iconList(state) {
		return state.indexData.policyDescList || []
	},

	floorList(state) {
		return state.indexData.categoryModule || []
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
