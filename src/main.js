// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import Vuex from 'vuex'
//自定义插件
import plug from '@/plug'

Vue.use(Vuex);
Vue.use(plug);

// 全局组件
import tHeader from '@/components/Header'
import bFooter from '@/components/Footer'
import Login from '@/components/Login'

Vue.component('tHeader',tHeader);
Vue.component('login',Login);
Vue.component('bFooter',bFooter);



Vue.config.productionTip = false;

/*路由守卫*/
router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		var token = true;
		if(!token){//token失效或者不存在
			next({
				path:'/login',
				query:{
					redirect:to.meta.fullPath
				}
			});
			return false;
		}
	};
	if(to.meta.title){
		document.title = to.meta.title
	};
	next();
});
// 路由后置钩子
router.afterEach((to, from) => {
	store.commit('switchPageLoading',true);
})

/*store*/
const store = new Vuex.Store({
	state:{
		pageLoading:false,
		nickName:''
	},
	mutations:{
		switchPageLoading(state,flag){
			state.pageLoading = flag;
		},
		swicthNickName(state,name){
			state.nickName = name;
		}
	}
});

// request拦截器
axios.interceptors.request.use(
  config => {
    // 发送请求之前，要做的业务
		store.commit('switchPageLoading',true);
    return config
  },
  error => {
    // 错误处理代码
    store.commit('switchPageLoading',false);
    return Promise.reject(error)
  }
)

// response拦截器
axios.interceptors.response.use(
  response => {
    // 数据响应之后，要做的业务
		store.commit('switchPageLoading',true);
    return response
  },
  error => {
		store.commit('switchPageLoading',false);
    return Promise.reject(error)
  }
)

//将axios实例注入到vue原型链
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})