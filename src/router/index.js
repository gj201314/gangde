import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=> import('@/views/Home');
const Search =()=>  import('@/views/Search')
const Login =()=>  import('@/views/Login')
const Reg = ()=> import('@/views/Reg')
const ForgotPwd = ()=> import('@/views/ForgotPwd')
const Details = ()=> import('@/views/Details')
const Price = ()=> import('@/views/Price')
const About = ()=> import('@/views/About')

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
	  component: Search,
	  meta:{
	  	title:'搜索'
	  }
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
			title:'详情',
			requireAuth:false
		}
	},
	{
		path: '/price',
		name: 'price',
		component:Price,
		meta:{
			title:'价格'
		}
	},
	{
		path: '/about',
		name: 'about',
		component:About,
		meta:{
			title:'关于我们'
		}
	}
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
	return { x: 0, y: 0 };
  }
})
