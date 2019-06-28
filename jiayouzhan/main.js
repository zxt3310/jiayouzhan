import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

var Fly = require("flyio/dist/npm/wx");
const fly = new Fly();
fly.config.baseURL = "http://gsj.dev.rsc.ranknowcn.com";

Vue.prototype.$fly = fly;

const app = new Vue({
    store,
    ...App
})
app.$mount()

//拦截请求
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
	let token = uni.getStorageSync('token');
    request.headers["token"]= token;
	if(request.method == 'GET'){
		console.log('GET');
	}
	if(request.method == 'POST'){
		console.log('POST');
	}
      //打印出请求体
      console.log(request)
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

fly.interceptors.response.use((response)=>{
	if (response.data.ret == 0){
		return response.data.data;
	}else{
		return Promise.reject(new Error(response.data.msg));
	}
})


