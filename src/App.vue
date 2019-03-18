<template>
  <div id="app">
	<loading v-if="flag"></loading>
    <router-view/>
	<div class="box" style="display: none;">
		<h2>less演示</h2>
		<div class="box-child">
			11111
		</div>
		<div class="box-child2">
			222
		</div>
		<div class="box-child3">
			333
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'App',
	computed:{
		flag(){
			return this.$store.state.pageLoading;
		}
	}
}
</script>
<style lang="less">
// 练习样式
@color:#eee;
@width:200px;
@height:200px;
.box {
	background: @color;
	.border;
}
.box-child {
	width:@width;
	height:@height;
	.border3();
}
.box-child2 {
	width:(@width *5) /10;
	height:(@height - 40) *5;
	margin-left: 100px;
	.border2(5px);
}
.box-child3 {
	.pos(a);
}
.pos(r){
	position: relative;
}
.pos(a){
	position: absolute;
}
.pos(f){
	position: fixed;
}
//没参数的
.border {
	border:2px #f00 solid;
}
//有参数的
.border2(@borderWidth) {
	border:@borderWidth #f00 solid;
}
//设置默认参数的
.border3(@borderWidth:10px;) {
	border:@borderWidth #f00 solid;
}
/* 基本样式 */
* {
	margin:0;
	padding:0;
	box-sizing: border-box;
	letter-spacing: 0px;
}
html,body{
	width:100%;
	height: 100%;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
img {
	border:none;
}
ul,ol,li {
	list-style: none;
}
a {
  text-decoration: none;
  color:#c9ac3a;
}
input,button {
	border:none;
}
input,select,button {
	&:focus {
		outline:none;
	}
}
button {
	cursor: pointer;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.wrap {
	width:1200px;
	margin:0 auto;
}
#app {
  font-size:14px;
	font-family: '微软雅黑';
}

/* 头部样式 */
#header {
	height:80px;
	background: #fff;
	padding:10px 0;
	.logo {
		padding:10px 0;
	}
	.search {
		border:1px #e3c653 solid;
		overflow: hidden;
		.borderRadius(35px);
		height: 35px;
		width:256px;
		margin-top: 10px;
		margin-left: 35px;
		font-size: 0;
		
		input {
			height:33px;
			line-height: 33px;
			padding:0;
			text-indent:17px;
			width:220px;
			font-size: 14px;
			border:none;
			display:inline-block;
			vertical-align: bottom;
		}
		button {
			height:33px;
			width:32px;
			background: url(./assets/search-icon.png) no-repeat 3px center;
			.backgroundSize(18px 17px);
			border:none;
			display: inline-block;
			vertical-align: bottom;
			.borderRadius(2px);
		}
	}
	img {
		height: 40px;
		display: block;
	}
	.nar-bar {
		font-size:0;
		a{
			color:#4f3e3b;
			height: 60px;
			display:inline-block;
			line-height: 60px;
			font-size: 16px;
			padding:0 10px;
			margin-left:45px;
			&.router-link-exact-active {
				color:#e3c653;
				position: relative;
			}
			&.router-link-exact-active:after {
				content:'';
				position: absolute;
				left:0;
				right:0;
				bottom:0;
				height: 3px;
				.borderRadius(3px);
				background: #e3c653;
			}
		}
	}
	.user-status {
		font-size: 0;
		margin-top: 10px;
		a {
			width:76px;
			height:35px;
			text-align:center;
			line-height:35px;
			.borderRadius(35px);
			font-size: 14px;
			display:inline-block;
			&.btn-reg {
				border: 1px #e3c653 solid;
				color:#e3c653;
				margin-right: 14px;
			}
			&.btn-login {
				background:#d8bb48;
				color:#fff;
			}
		}
		span.user-login {
			color: #c4c5c8;
			font-size: 14px;
			line-height:35px;
			i{
				font-style: normal;
				padding:0 5px;
				color:#e3c653;
			}
		}
	}
}
.m-header {
	height:50px;
	background: #fff;
	position: relative;
	display:none;
	h1 {
		position: absolute;
		top:8px;
		left:100px;
		right:100px;
		height: 34px;
		line-height:34px;
		font-size: 18px;
		text-align: center;
		color: #777;
		font-weight: normal;
	}
	.nick-status {
		height: 34px;
		line-height: 34px;
		a {
			color:#333;
		}
	}
	.navbar-toggle {
		padding: 0 10px;
		background-color: transparent;
		background-image: none;
		border: 1px solid #ddd;
		.borderRadius(4px);
		height: 34px;
		outline:0;
		&:focus,&:hover {
			background-color: #ddd;
			outline:0;
		}
		.icon-bar {
			display: block;
			width: 22px;
			height: 2px;
			.borderRadius(1px);
			background-color: #888;
			margin-top: 4px;
		}
	}
}
.m-navbar {
	background: #fff;
	height: 0;
	overflow: hidden;
	nav {
		opacity: 0;
		.transform(translateY(-100%));
		transition: all 0.5s;
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		border-top: 1px #e7e7e7 solid;
	}
	&.active {
		height: auto;
		nav {
			opacity: 1;
			.transform(translateY(0));
		}
	}
	a{
		padding: 10px;
		line-height: 20px;
		color:#777;
		font-size: 14px;
		display: block;
		&.router-link-exact-active {
			color: #555;
			background-color: #e7e7e7;
		}
	}
}
#footer {
	height: 95px;
	background:#1f1f1f;
	color:#bbb9b9;
	.copyright {
		text-align: center;
		padding-top: 28px;
		.links {
			margin-left:40px;
			display: inline-block;
			font-size: 0;
			vertical-align: middle;
		}
		a {
			display: inline-block;
			margin-right: 3px;
		}
	}
}
/* 注册页样式 */
#reg {
	background: #fafafa;
	.main{
		height:784px;
		background: #fff;
		padding:30px;
		margin:21px 0;
		border:1px #ededed solid;
		section {
			width:778px;
			height:100%;
			border-right:1px #e8e8e8 dotted;
			.form {
				margin-top: 20px;
			}
		}
		article {
			width:360px;
			height:100%;
			.qr-box {
				margin-left:30px;
				text-align: center;
				b {
					height: 35px;
					line-height: 35px;
					color:#666;
				}
				p {
					font-size: 16px;
					color:#222;
				}
			}
			.qrImg-box {
				img {
					width: 190px;
					height: 190px;
					display: inline-block;
				}
			}
		}
	}
}
.form {
	.form-item {
		font-size: 0;
		margin-bottom: 25px;
		.item-title {
			width:130px;
			text-align: right;
			padding-right: 12px;
			font-size:14px;
			color:#222;
			display: inline-block;
			vertical-align: middle;
		}
		.item-content {
			display: inline-block;
			vertical-align: middle;
			.input-box {
				border:1px #cbccca solid;
				.borderRadius(4px);
				&.error {
					border-color:#ff6200;
					.boxShadow(0px 5px 15px #e5e5e5);
				}
				input {
					width:340px;
					height:38px;
					padding:10px;
					font-size:14px;
					.borderRadius(4px);
					&::-webkit-input-placeholder,&:-moz-placeholder,&:-ms-input-placeholder {
					    color:#999;
					}
				}
				&.input-code {
					font-size:0;
					width:340px;
					input{
						width:230px;
						font-size:14px;
						vertical-align: top;
						display: inline-block;
					}
					.getCode{
						width:108px;
						height:38px;
						line-height: 40px;
						text-align: center;
						.borderRadius(0 4px 4px 0);
						font-size: 14px;
						border-left:1px #e0e0e0 solid;
						background: #f0f0f2;
						vertical-align: top;
						display: inline-block;
						cursor: pointer;
					}
				}
			}
		}
		.item-errMsg {
			height: 40px;
			margin-left:15px;
			padding-left:25px;
			line-height: 40px;
			vertical-align: middle;
			display: inline-block;
			font-size: 14px;
			color:#ff6200;
			background:url(./assets/icon-false.png) no-repeat left center;
			.backgroundSize(18px 18px);
		}
		.btn-box {
			padding-top: 5px;
			button {
				background: #d8bb48;
				color:#fff;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 14px;
				.borderRadius(4px);
				width:340px;
				display: block;
			}
		}
	}
	.other {
		padding-top: 16px;
		.p-switch__label {
			color:#666;
		}
		a {
			height: 20px;
			line-height: 20px;
			font-size: 14px;
			color:#666;
		}
	}
}
.success-box {
	width:500px;
	margin:25% auto 0;
	text-align: center;
	.msg {
		background: url(./assets/success-icon.png) no-repeat left center;
		.backgroundSize(380px 38px);
		color:#333333;
		font-size: 22px;
		height: 40px;
		line-height: 40px;
	}
	.btn {
		background: #d8bb48;
		color:#fff;
		margin-top: 70px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		.borderRadius(4px);
		width:320px;
		display:inline-block;
	}
}
/* 登录弹窗 */
.dialog-login {
	color:#333;
}
.p-dialog_wrapper.dialog-login {
	.p-dialog_content{
		width:450px;
		padding:50px;
	}
	.login-img {
		text-align: center;
	}
}
/* 移动端/弹窗表单 */
.form.mobile-form {
	.form-item {
		position: relative;
		height: 45px;
		margin-bottom: 30px;
		.borderRadius(4px);
		border:1px #ccc solid;
		input{
			width:100%;
			font-size: 14px;
			.borderRadius(4px);
			height: 43px;
			padding:0 10px;
			border:none;
		}
		.error-msg {
			position: absolute;
			top:45px;
			left:0;
			right:0;
			height: 30px;
			line-height: 30px;
			background: url(assets/icon-false.png) no-repeat left center;
			.backgroundSize(15px 15px);
			padding-left:20px;
			color:#ff6200;
			font-size: 14px;
		}
		&.item-code {
			position: relative;
		}
		.input-code {
			position: absolute;
			left:0;
			right:90px;
			top:0;
			width:auto;
		}
		.getCode {
			position: absolute;
			right:10px;
			top:0;
			line-height: 43px;
			height:43px;
			font-size: 14px;
			color:rgb(38, 99, 249);
		}
		.forgotPwd {
			position: absolute;
			right:0;
			top:45px;
			line-height:30px;
			height:30px;
			font-size: 14px;
		}
	}
	.btn-submit {
		width:100%;
		height:45px;
		border:1px #d8bb48 solid;
		font-size: 16px;
		.borderRadius(4px);
		background:#d8bb48;
		color:#fff;
	}
	.exists {
		padding-top:20px;
		color:#666;
		display: block;
		text-align: center;
	}
	.btn-box {
		padding-top:30px;
	}
}
/* 手机端样式 */
// @media screen and (min-width:980px) {
// 	.p-header {
// 		display: block;
// 	}
// 	.m-header {
// 		display: none;
// 	}
// }
// @media screen and (max-width:980px) {
// 	.wrap {
// 		width:100%;
// 	}
// 	.p-header {
// 		display: none;
// 	}
// 	#header {
// 		height: auto;
// 		min-height:50px;
// 		padding: 0;
// 		border-bottom:1px #e7e7e7 solid;
// 	}
// 	.m-header {
// 		padding:8px 10px;
// 		display: block;
// 	}
// 	#footer {
// 		text-align: center;
// 	}
// }
</style>
