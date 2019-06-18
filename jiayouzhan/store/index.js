import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
	state : {
		a:'axa',
		b:'bx',
		c:10,
		d:20
	},
	mutations:{
		incrase(state){
			state.c++;
		},
		decrease(state){
			state.d--;
		},
		changeA(state,str){
			state.a = str;
		},
		changeB(state,str){
			state.b = state.b + str;
		}
	}
}

const store = new Vuex.Store({
	modules:{
		test : moduleA
	},
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
