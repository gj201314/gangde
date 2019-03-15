<template>
  <div id="app">
	<loading v-if="flag"></loading>
    <router-view/>
	<div class="box">
		<h2>less演示</h2>
		<div class="box-child">
			11111
		</div>
		<div class="box-child2">
			222
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
		width:@width;
		height:@height;
		margin-left: 100px;
		.border2(5px);
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
</style>
<style lang="less">
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
input:focus,select:focus,button:focus {
	outline:none;
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
.backgroundSize(@v){
	background-size:@v;
	-webkit-background-size:@v;
	-moz-background-size:@v;
	-ms-background-size:@v;
}
.borderRadius(@radius){
	border-radius: @radius;
	-webkit-border-radius: @radius;
	-moz-border-radius: @radius;
	-ms-border-radius: @radius;
}
.boxShadow(@v) {
	-webkit-box-shadow:@v;
	-moz-box-shadow:@v;
	box-shadow:@v;
}
.transform(@v){
	transform: @v;
	-webkit-transform: @v;
	-moz-transform: @v;
}
/* 头部样式 */
#header {
	height:80px;
	background: #fff;
	padding:10px 0;
}
#header .logo {
	padding:10px 0;
}
#header .search {
	border:1px #e3c653 solid;
	overflow: hidden;
	.borderRadius(35px);
	height: 35px;
	width:256px;
	margin-top: 10px;
	margin-left: 35px;
	font-size: 0;
}
#header .search input {
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
#header .search button {
	height:33px;
	width:32px;
	background: url(./assets/search-icon.png) no-repeat 3px center;
	.backgroundSize(18px 17px);
	border:none;
	display: inline-block;
	vertical-align: bottom;
	.borderRadius(2px);
}
#header img {
	height: 40px;
	display: block;
}
#header .nar-bar {
	font-size:0;
}
#header .nar-bar a{
	color:#4f3e3b;
	height: 60px;
	display:inline-block;
	line-height: 60px;
	font-size: 16px;
	padding:0 10px;
	margin-left:45px;
}
#header .nar-bar a.router-link-exact-active {
	 color:#e3c653;
	 position: relative;
}
#header .nar-bar a.router-link-exact-active:after {
	content:'';
	position: absolute;
	left:0;
	right:0;
	bottom:0;
	height: 3px;
	.borderRadius(3px);
	background: #e3c653;
}
#header .user-status {
	font-size: 0;
	margin-top: 10px;
}
#header .user-status a {
	width:76px;
	height:35px;
	text-align:center;
	line-height:35px;
	.borderRadius(35px);
	font-size: 14px;
	display:inline-block;
}
#header .user-status a.btn-reg {
	border: 1px #e3c653 solid;
	color:#e3c653;
	margin-right: 14px;
}
#header .user-status a.btn-login {
	background:#d8bb48;
	color:#fff;
}
.m-header {
	height:50px;
	background: #fff;
	position: relative;
}
.m-header h1 {
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
.m-header .nick-status {
	height: 34px;
	line-height: 34px;
}
.m-header .nick-status a {
	color:#333;
}
.m-header .navbar-toggle {
	padding: 0 10px;
	background-color: transparent;
	background-image: none;
	border: 1px solid #ddd;
	.borderRadius(4px);
	height: 34px;
	outline:0;
}
.m-header .navbar-toggle:focus,.m-header .navbar-toggle:hover {
	background-color: #ddd;
	outline:0;
}
.m-header .navbar-toggle .icon-bar {
	display: block;
	width: 22px;
	height: 2px;
	.borderRadius(1px);
	background-color: #888;
	margin-top: 4px;
}
#header .m-navbar {
	background: #fff;
	height: 0;
	overflow: hidden;
}
#header .m-navbar nav {
	opacity: 0;
	.transform(translateY(-100%));
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	border-top: 1px #e7e7e7 solid;
}
#header .m-navbar.active {
	height: auto;
}
#header .m-navbar.active nav {
	opacity: 1;
	.transform(translateY(0));
}
#header .m-navbar a{
	padding: 10px;
	line-height: 20px;
	color:#777;
	font-size: 14px;
	display: block;
}
#header .m-navbar a.router-link-exact-active {
	color: #555;
	background-color: #e7e7e7;
}
#footer {
	height: 95px;
	background:#1f1f1f;
	color:#bbb9b9;
}
#footer .copyright {
	text-align: center;
	padding-top: 28px;
}
#footer .copyright .links {
	margin-left:40px;
	display: inline-block;
	font-size: 0;
	vertical-align: middle;
}
#footer .copyright .links a {
	display: inline-block;
	margin-right: 3px;
}
/* 注册页样式 */
#reg {
	background: #fafafa;
}
#reg .main{
	height:784px;
	background: #fff;
	padding:30px;
	margin:21px 0;
	border:1px #ededed solid;
}
#reg .main section {
	width:778px;
	height:100%;
	border-right:1px #e8e8e8 dotted;
}
#reg .main article {
	width:360px;
	height:100%;
}
#reg .main article .qr-box {
	margin-left:30px;
	text-align: center;
}
#reg .main article .qrImg-box img {
	width: 190px;
	height: 190px;
	display: inline-block;
}
#reg .main article .qr-box b {
	height: 35px;
	line-height: 35px;
	color:#666;
}
#reg .main article .qr-box p {
	font-size: 16px;
	color:#222;
}
#reg .main section .form {
	margin-top: 20px;
}
.form .form-item {
	font-size: 0;
	margin-bottom: 25px;
}
.form .form-item .item-title {
	width:130px;
	text-align: right;
	padding-right: 12px;
	font-size:14px;
	color:#222;
	display: inline-block;
	vertical-align: middle;
}
.form .form-item .item-content {
	display: inline-block;
	vertical-align: middle;
}
.form .form-item .item-content .input-box {
	border:1px #cbccca solid;
	.borderRadius(4px);
}
.form .form-item .item-content .input-box.error {
	border-color:#ff6200;
	.boxShadow(0px 5px 15px #e5e5e5);
}
.form .form-item .item-content .input-box input {
	width:340px;
	height:38px;
	padding:10px;
	font-size:14px;
	.borderRadius(4px);
}
.form .form-item input::-webkit-input-placeholder {
    color:#999;
}
.form .form-item input:-moz-placeholder {
    color:#999;
}
.form .form-item input:-ms-input-placeholder {
    color:#999;
}
.form .form-item .item-content .input-box.input-code {
	font-size:0;
	width:340px;
}
.form .form-item .item-content .input-box.input-code input{
	width:230px;
	font-size:14px;
	vertical-align: top;
	display: inline-block;
}
.form .form-item .item-content .input-box.input-code .getCode{
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
.form .form-item .item-errMsg {
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
.form .form-item .btn-box {
	padding-top: 5px;
}
.form .form-item .btn-box button {
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
.form .other {
	padding-top: 16px;
}
.form .other .p-switch__label {
	color:#666;
}
.form .other a {
	height: 20px;
	line-height: 20px;
	font-size: 14px;
	color:#666;
}
.success-box {
	width:500px;
	margin:25% auto 0;
	text-align: center;
}
.success-box .msg {
	background: url(./assets/success-icon.png) no-repeat left center;
	.backgroundSize(380px 38px);
	color:#333333;
	font-size: 22px;
	height: 40px;
	line-height: 40px;
}
.success-box .btn {
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
/* 登录弹窗 */
.dialog-login {
	color:#333;
}
.p-dialog_wrapper.dialog-login .p-dialog_content{
	width:450px;
	padding:50px;
}
.p-dialog_wrapper.dialog-login .login-img {
	text-align: center;
}
/* 移动端/弹窗表单 */
.form.mobile-form .form-item {
	position: relative;
	height: 45px;
	margin-bottom: 30px;
	.borderRadius(4px);
	border:1px #ccc solid;
}
.form.form.mobile-form .form-item input{
	width:100%;
	font-size: 14px;
	.borderRadius(4px);
	height: 43px;
	padding:0 10px;
	border:none;
}
.form.form.mobile-form .form-item .error-msg {
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
.form.form.mobile-form .form-item.item-code {
	position: relative;
}
.form.form.mobile-form .form-item .input-code {
	position: absolute;
	left:0;
	right:90px;
	top:0;
	width:auto;
}
.form.form.mobile-form .form-item .getCode {
	position: absolute;
	right:10px;
	top:0;
	line-height: 43px;
	height:43px;
	color:rgb(38, 99, 249);
}
.form.form.mobile-form .btn-submit {
	width:100%;
	height:45px;
	border:1px #d8bb48 solid;
	font-size: 16px;
	.borderRadius(4px);
	background:#d8bb48;
	color:#fff;
}
.form.form.mobile-form .exists {
	padding-top:20px;
	color:#666;
	display: block;
	text-align: center;
}
.form.form.mobile-form .form-item .forgotPwd {
	position: absolute;
	right:0;
	top:45px;
	line-height:30px;
	height:30px;
	font-size: 14px;
}
.form.form.mobile-form .btn-box {
	padding-top:30px;
}
/* 手机端样式 */
@media screen and (min-width:980px) {
	.p-header {
		display: block;
	}
	.m-header {
		display: none;
	}
}
@media screen and (max-width:980px) {
	.wrap {
		width:100%;
	}
	.p-header {
		display: none;
	}
	#header {
		height: auto;
		min-height:50px;
		padding: 0;
		border-bottom:1px #e7e7e7 solid;
	}
	.m-header {
		padding:8px 10px;
		display: block;
	}
	#footer {
		text-align: center;
	}
}
</style>
