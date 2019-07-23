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

var info = uni.getStorageSync('userInfo')

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: true,
        hasLogin: info.haslogin,
        userName: info.username,
		userPhone: info.userphone,
		token:info.token
    },
    mutations: {
        login(state,name) {
			// console.log(phone);
            state.userName = name || '新用户';
            state.hasLogin = true;
        },
		logPhone(state,phone){
			state.userPhone = phone;
		},
		logAuthor(state,author){
			state.token = author;
		},
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
			uni.removeStorage({
				key:'userInfo',
				success: (e) => {
					console.log('登出成功');
				}
			})
        }
    }
})

export default store
