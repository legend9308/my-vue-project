import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//定义初始化常量
const state ={
	title:'movie',
	bg:'#2196f3'
}

//定义动作 事件处理方法
const mutations = {
	changeTitle(state,status){
		state.title = status;
	}
}

//对外的事件方法
const actions = {
	changeTitle:({commit},status)=>commit('changeTitle',status)
}

const getters = {

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
}) 