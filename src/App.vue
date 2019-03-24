<template>
  <div id="app">
		<loading v-if="flag"></loading>
    <router-view/>
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
			.placeholder(#bca64f);
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
			a{
				width:auto;
				font-style: normal;
				padding:0 5px;
				color:#e3c653;
			}
		}
	}
}
.m-header {
	height:70px;
	padding:15px 0;
	position: relative;
	display:none;
	.nick-status {
		width:15%;
		.status-box {
			padding:0 5px;
			height:40px;
			line-height:40px;
			text-align: center;
			overflow: hidden;
			a {
				color:#f2f0f0;
			}
		}
	}
	.search-input {
		.flexgrow(1);
		padding-left:15%;
		input {
			width:100%;
			height:100%;
			text-indent:58px;
			background:rgba(255,255,255,0.3) url(./assets/m-search.png) no-repeat 25px center;
			.borderRadius(45px);
			.backgroundSize(21px 20px);
			.placeholder(#f2f0f0);
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
	.p-footer {
		display: block;
	}
	.m-footer {
		height:65px;
		background:#f9f9f9;
		border-top:1px #eae9e9 solid;
		display: none;
		.item {
			width:33.333%;
			float: left;
			.item-icon {
				height:40px;
				width:100%;
				display: block;
			}
			.item-text {
				height:24px;
				line-height:1.5;
				text-align: center;
				width:100%;
				display: block;
				font-size:14px;
				color:#a1a1a1;
			}
			&.item-home {
				.item-icon {
					background:url(./assets/index.png) no-repeat center;
					.backgroundSize(30px 30px);
				}
			}
			&.item-price {
				.item-icon {
					background:url(./assets/price.png) no-repeat center;
					.backgroundSize(26px 30px);
				}
			}
			&.item-about {
				.item-icon {
					background:url(./assets/about.png) no-repeat center;
					.backgroundSize(28px 30px);
				}
			}
			&.router-link-exact-active {
				.item-text {
					color:#e3c653;
				}
				&.item-home {
					.item-icon {
						background:url(./assets/index_click.png) no-repeat center;
						.backgroundSize(30px 30px);
					}
				}
				&.item-price {
					.item-icon {
						background:url(./assets/price_click.png) no-repeat center;
						.backgroundSize(26px 30px);
					}
				}
				&.item-about {
					.item-icon {
						background:url(./assets/about_click.png) no-repeat center;
						.backgroundSize(28px 30px);
					}
				}
			}
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
		.m-form {
			display: none;
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
		.backgroundSize(38px 38px);
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
			.flexbox;
		}
		.input-code {
			.flexgrow(1);
		}
		.getCode {
			min-width:130px;
			text-align:center;
			display: block;
			line-height: 43px;
			height:43px;
			font-size: 14px;
			color:@dColor;
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
.articleQr {
	width:300px;
	.focus {
		padding:22px;
		background:#f5f5f6;
		margin-bottom: 32px;
		.qrImg {
			width:130px;
			height:130px;
			position: relative;
			&:after {
				content:'';
				position: absolute;
				z-index: 1;
				left: -10px;
				top:0;
				width:22px;
				height:130px;
				background: url(../static/shadow.png) no-repeat left bottom;
				background-size:22px 130px;
			}
			img{
				position: relative;
				z-index: 2;
				max-width: 100%;
				max-height: 100%;
				display: block;
			}
		}
		.qrInfo {
			text-align: right;
			padding-top: 17px;
			padding-right: 10px;
			b {
				font-size: 18px;
				display: block;
				color:#333;
				font-weight:500;
				margin-bottom: 10px;
			}
			i {
				font-style:normal;
				font-size: 16px;
				font-weight: 500;
				padding-bottom: 7px;
				color:#999;
				border-bottom: 1px #999 solid;
			}
		}
	}
	h5.article-title {
		color:#222;
		font-size: 18px;
		padding-left: 17px;
		font-weight: 500;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			top:5px;
			left:0;
			width:6px;
			border-radius:3px;
			background:#d8bb48;
			height: 14px;
		}
	}
	.article-list {
		padding-left: 17px;
		li {
			height: 34px;
			line-height: 34px;
			width:100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			a {
				color: #333;
				&:hover {
					color:@dColor;
				}
			}
		}
	}
}
/* 手机端样式 */
@media screen and (max-width:1200px) {
	.wrap {
		width:100%;
	}
	.p-header,.p-footer {
		display: none !important;
	}
	#header {
		height:45px;
		padding: 0;
	}
	.m-header {
		.flexbox;
	}
	.m-footer {
		display: block !important;
	}
	.p-dialog_wrapper.dialog-login {
		.p-dialog_content{
			width:90%;
			padding:20px;
		}
		.login-img {
			margin-bottom:20px !important;
			img {
				width:80%;
				height: auto !important;
			}
		}
		.p-dialog_close {
			display: none;
		}
	}
	#reg {
		.main {
			padding:15px;
			height:auto;
			min-height: 500px;
			.m-form {
				display: block;
			}
			section {
				width:100%;
				border:none;
				margin:0 auto;
				float: none !important;
			}
			article,.p-form {
				display: none;
			}
		}
	}
	.success-box {
		width:90%;
		.btn {
			width:100%;
		}
		.msg {
			font-size: 16px;
			text-indent: 15px;
		}
	}
	#footer {
		height:auto;
	}
}
</style>