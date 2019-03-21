import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Reg from '@/views/Reg'
import ForgotPwd from '@/views/ForgotPwd'
import Details from '@/views/Details'
import Price from '@/views/Price'

Vue.use(Router)
/**
 * meat:
 * requireAuth用来判断是否登录
 * title用来在跳转页面时设置页面title
 * fullPath用来设置在登录成功后返回的路由
 */
export default new Router({
  routes: [
    {
        path: '/',
		name: 'home',
		component: Home,
		alias:'/home',
		meta:{
			title:'首页'
		}
    },
	{
	  path: '/search/:search',
	  name: 'search',
	  component: Search
	},
	{
	  path: '/login',
	  name: 'login',
	  component: Login,
		meta:{
			title:'登录'
		}
	},
	{
	  path: '/reg',
	  name: 'reg',
	  component:Reg,
		meta:{
			title:'注册'
		}
	},
	{
		path: '/forgotPwd',
		name: 'forgotPwd',
		component:ForgotPwd,
		meta:{
			title:'重置密码'
		}
	},
	{
		path: '/details/:id',
		name: 'details',
		component:Details,
		meta:{
			title:'详情页',
			requireAuth:false
		}
	},
	{
		path: '/price',
		name: 'price',
		component:Price,
		meta:{
			title:'价格页'
		}
	}
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
	return { x: 0, y: 0 };
  }
})
