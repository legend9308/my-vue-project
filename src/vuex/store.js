import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//定义初始化常量
const state ={
	title:'movie',
	bgColor:'#2196f3',
	btn:'首页',
	txt:'movie'
}

//定义动作 事件处理方法
const mutations = {
	changeTitle(state,status){
		state.title = status[0];
		state.bgColor = status[1];
		state.btn = status[2];
	},
// 	changeBgColor(state,status){
// 		state.bgColor = status[1];
// 	}
}

//对外的事件方法
const actions = {
	changeTitle:({commit},status)=>commit('changeTitle',status),
	// changeBgColor:({commit},status)=>commit('changeBgColor',status),
}

const getters = {

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
}) 