<template>
  <div id="header">
		<div class="wrap clearfix p-header">
			<div class="pull-left clearfix">
				<div class="logo">
					<img src="../../static/logo.png" alt="" />
				</div>
			</div>
			<nav class="pull-left nar-bar clearfix">
				<router-link to="/">首页</router-link>
				<router-link to="/price">价格</router-link>
				<router-link to="/about">关于我们</router-link>
			</nav>
			<div class="search pull-left">
				<input type="text" v-model.trim="serachVal" placeholder="搜索" />
				<button type="button" @click="toSearch"></button>
			</div>
			<div class="user-status pull-right">
				<template v-if="nickName==''">
					<router-link to="/reg" class="btn-reg">注册</router-link>
					<a href="javascript:void(0);" @click="loginVisible=true" class="btn-login">登录</a>
				</template>
				<template v-else>
					<span class="user-login">欢迎<a href="index/user/dashboard.html">{{nickName}}</a>,来到纲得</span>
				</template>
			</div>
		</div>
		<div class="m-header">
			<div class="search-input">
				<input type="text" v-model.trim="serachVal" placeholder="搜索" @change="toSearch" />
			</div>
			<div class="nick-status pull-right">
				<div class="status-box">
					<template v-if="nickName==''">
						<a href="javascript:void(0);" @click="loginVisible=true">登录</a>
					</template>
					<template v-else>
						<span><a href="index/user/dashboard.html">{{nickName}}</a></span>
					</template>
				</div>
			</div>
		</div>
		<!--sync可以实现prop的双向数据绑定-->
		<p-dialog class="dialog-login" :visible.sync="loginVisible">
			<login @handleEvent="handleEvent"></login>
		</p-dialog>
  </div>
</template>

<script>
export default {
  data () {
		return {
			open:false,
			loginVisible:false,
			serachVal:'',
		}
  },
	props:{
		search:{
			type:String,
			default:''
		},
		toLogin:{
			type:Boolean,
			default:false
		}
	},
	watch:{
		toLogin(n,o){
			if(n){
				this.loginVisible=true;
			}
		}
	},
	computed:{
		nickName(){
			return this.$store.state.nickName;
		}
	},
	mounted(){
		if(this.search!=''){
			this.serachVal = this.search;
		};
	},
	methods:{
		handleEvent(type){//根据type来，判断表单的一些操作
			if(type=='close'){
				this.loginVisible = false;
			};
		},
		toSearch(){
			if(this.serachVal!=''){
				this.$router.push({name:'search',params:{search:this.serachVal}});
			}else{
				this.$msg({'msg':'请输入搜索内容','status':'error'});
			};
		},
		openNav(){
			this.open = !this.open;
		}
	}
}
</script>
<style lang="less" scoped>
#header.home-header {
	position:absolute;
	left:0;
	right:0;
	top:0;
	background: transparent;
	z-index: 2;
	.nar-bar {
		a {
			color:#c4c5c8;
			&.router-link-exact-active {
				color:#e3c653;
			}
		}
	}
	.search {
		input {
			background: transparent;
			color:#bca64f;
		}
	}
}
</style>