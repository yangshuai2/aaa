import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex);
// 创建vuex实例
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        getStateCount(state) {
            return state.count+1;
        }
    },
    mutations: {
        add (state) {
            state.count = state.count+1; 
        },
        reduction (state) {
            state.count = state.count-1;
        }
    },
    actions: {
        addFun (context) {
            context.commit("add")
          },
          reductionFun (context) {
            context.commit("reduction")
          },
    }
})
// 导出store
export default store;