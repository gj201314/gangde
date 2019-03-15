<template>
	<div id="details">
		<t-header></t-header>
		<div class="wrap clearfix main">
			<section class="pull-left">
				<h3 class="content-title">小猪佩奇为啥火了？</h3>
				<div class="author">
					<div class="author-img"></div>
					<div class="author-info">
						<b>{{author}}</b>
						<p>
							<span>2019.02.18</span><span>字数799</span>
							<span>阅读598</span><span>评论99</span>
							<span>喜欢50</span>
						</p>
					</div>
				</div>
				<div class="content">{{content}}</div>
				<button type="button" class="clickMore" @click="qrVisible=true">点击查看全文</button>
				<button type="button" class="clickUpdate" @click="downVisible=true">点击下载新商道课题资料</button>
			</section>
			<div class="article pull-right">
				<div class="focus clearfix">
					<div class="qrImg pull-left">
						<img src="../../static/qr-img.png" alt="二维码">
					</div>
					<div class="qrInfo pull-right">
						<b>关注公众号</b>
						<b>阅读全文</b>
						<i>GAnders</i>
					</div>
				</div>
				<h5 class="article-title">相关文章</h5>
				<ul class="article-list">
					<li>没文化，真可怕啊啊啊啊啊啊</li>
				</ul>
			</div>
		</div>
		<p-dialog id="dialog-qr" :visible.sync="qrVisible">
			<div class="img-box">
				<img src="../../static/qr-img.png" alt="">
			</div>
		</p-dialog>
		<p-dialog id="dialog-down" :visible.sync="downVisible">
			<div class="form mobile-form">
				<div class="form-item">
					<input type="text" v-model.trim="formData.nickName" @blur="validate('nickName')" placeholder="姓名" />
					<span class="error-msg" v-show="rules.nickName.msg!=''">{{rules.nickName.msg}}</span>
				</div>
				<div class="form-item">
					<input type="text" v-model.trim="formData.mobile" @blur="validate('mobile')" placeholder="手机号码" />
					<span class="error-msg" v-show="rules.mobile.msg!=''">{{rules.mobile.msg}}</span>
				</div>
				<div class="form-item item-code">
					<input type="text" class="input-code" maxlength="4" v-model.number="formData.code" @blur="validate('code')" placeholder="验证码" />
					<span class="getCode">获取验证码</span>
					<span class="error-msg" v-show="rules.code.msg!=''">{{rules.code.msg}}</span>
				</div>
				<div class="form-item">
					<input type="text" v-model.trim="formData.companyName" @blur="validate('companyName')" placeholder="公司名称(选填)" />
					<span class="error-msg" v-show="rules.companyName.msg!=''">{{rules.companyName.msg}}</span>
				</div>
				<div class="form-item">
					<input type="text" v-model.trim="formData.email" @blur="validate('email')" placeholder="邮箱(选填)" />
					<span class="error-msg" v-show="rules.email.msg!=''">{{rules.email.msg}}</span>
				</div>
				<div class="btn-box">
					<button type="button" class="btn-submit" @click="submit">提交信息获得资料</button>
				</div>
			</div>
		</p-dialog>
		<b-footer></b-footer>
	</div>
</template>

<script>
// import dHeader from '@/components/Dheader'

export default {
	data(){
		return {
			author:'林子聪',
			content:'我是内容主体',
			qrVisible:false,
			downVisible:false,
			formData:{
				nickName:'',
				mobile:'',
				companyName:'',
				email:'',
				code:''
			},
			rules:{
				nickName:{
					msg:'',
					name:'姓名'
				},
				mobile:{
					msg:'',
					name:'手机号码'
				},
				companyName:{
					msg:'',
					name:'公司名称'
				},
				email:{
					msg:'',
					name:'确认密码'
				},
				code:{
					msg:'',
					name:'验证码'
				}
			}
		}
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},1000)
	},
	methods:{
		validate(name){
			let val = this.formData[name],p1=/^1([0-9]{10})$/;
			if(val==''){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='mobile' && p1.test(val)){
				this.rules[name].msg = this.rules[name].name+'只能为11位的数字';
				return false;
			}else if(name=='confirmPwd' && (this.formData['pwd']!=this.formData['confirmPwd'])){
				this.rules[name].msg = '两次密码不一致';
				return false;
			}else{
				this.rules[name].msg = '';
				return true;
			};
		},
		submit(){
			let flag = false;
			for(let v in this.formData){
				flag = this.validate(v);
			};
			if(flag){
				console.log('提交ajax')
			}
		}
	}
}
</script>
<style>
#dialog-qr .p-dialog_content {
	width:300px;
}
#dialog-down {
	color:#333;
}
#dialog-down .p-dialog_content{
	width:450px;
	padding:50px;
}
#dialog-down .login-img {
	text-align: center;
}
</style>
<style scoped>
#details .main {
	padding: 20px 0;
	height: 900px;
}
#details section {
	width:800px;
}
#details section h3.content-title {
	font-weight:500;
    font-size: 25px;
    color:#333;
	margin-bottom: 30px;
}
#details section .author {
	font-size:0;
	margin-bottom: 30px;
}
#details section .author .author-img {
	display: inline-block;
	width:52px;
	height:52px;
	border-radius:52px;
	overflow: hidden;
}
#details section .author .author-info {
	display: inline-block;
	margin-left: 17px;
}
#details section .author .author-info b{
	font-size: 16px;
	color:#333;
}
#details section .author .author-info span{
	font-size: 14px;
	margin-right: 12px;
	color:#999;
}
#details section .content {
	margin-bottom: 15px;
}
#details section .clickMore {
	height:50px;
	width:100%;
	line-height:50px;
	border-radius:50px;
	text-align: center;
	border:1px #e3c653 solid;
	font-size: 16px;
    color: #e3c653;
	background: #fff;
	display: block;
}
#details section .clickUpdate {
	height: 60px;
	width:100%;
	line-height: 60px;
	border-radius: 30px;
	text-align: center;
	border:1px #f00 solid;
	font-size: 14px;
    color:#fff;
	background:rgba(255,0,0,0.5);
	/* display: none; */
}
#details .article{
	width:300px;
}
#details .article .focus {
	padding:22px;
	background:#f5f5f6;
	margin-bottom: 32px;
}
#details .article .focus .qrImg {
	width:130px;
	height:130px;
	position: relative;
}
#details .article .focus .qrImg:after {
	content:'';
	position: absolute;
	z-index: 1;
	left: -10px;
	top:0;
	width:22px;
	height:130px;
	background: url(../../static/shadow.png) no-repeat left bottom;
	background-size:22px 130px;
}
#details .article .focus .qrImg img{
	position: relative;
	z-index: 2;
	max-width: 100%;
	max-height: 100%;
	display: block;
}
#details .article .focus .qrInfo {
	text-align: right;
	padding-top: 17px;
	padding-right: 10px;
}
#details .article .focus .qrInfo b {
	font-size: 18px;
	display: block;
	color:#333;
	font-weight:500;
	margin-bottom: 10px;
}
#details .article .focus .qrInfo i {
	font-style:normal;
	font-size: 16px;
	font-weight: 500;
	padding-bottom: 7px;
	color:#999;
	border-bottom: 1px #999 solid;
}
#details .article h5.article-title {
	color:#222;
	font-size: 18px;
	padding-left: 17px;
	font-weight: 500;
	position: relative;
}
#details .article h5.article-title:after {
	content: '';
	position: absolute;
	top:5px;
	left:0;
	width:6px;
	border-radius:3px;
	background:#d8bb48;
	height: 14px;
}
#details .article .article-list {
	padding-left: 17px;
}
#details .article .article-list li {
	height: 34px;
	line-height: 34px;
	width:100%;
	overflow: hidden;
}
@media screen and (max-width:980px){
	#header {
		display: none;
	}
	#d-header {
		display: block;
	}
	#details section {
		width:100%;
	}
	#details article {
		display: none;
	}
	#details section .clickMore {
		height: 40px;
		line-height: 40px;
	}
}
</style>
