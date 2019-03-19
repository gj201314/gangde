<template>
	<div id="details">
		<t-header></t-header>
		<div class="wrap clearfix main">
			<section class="pull-left">
				<h3 class="content-title">{{title}}</h3>
				<div class="author">
					<!-- <div class="author-img"></div> -->
					<div class="author-info">
						<!-- <b>{{author}}</b> -->
						<p>
							<!-- <span>2019.02.18</span><span>字数799</span> -->
							<span>阅读{{views}}</span><!-- <span>评论99</span> -->
							<!-- <span>喜欢50</span> -->
						</p>
					</div>
				</div>
				<div class="content">{{content}}</div>
				<button type="button" v-show="type==1" class="clickMore" @click="qrVisible=true">点击查看全文</button>
				<button type="button" v-show="type==0" class="clickUpdate" @click="downVisible=true">点击下载新商道课题资料</button>
			</section>
			<div class="articleQr pull-right">
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
					<input type="text" v-model.trim="formData.username" @blur="validate('username')" placeholder="姓名" />
					<span class="error-msg" v-show="rules.username.msg!=''">{{rules.username.msg}}</span>
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
					<input type="text" v-model.trim="formData.company" @blur="validate('company')" placeholder="公司名称(选填)" />
					<span class="error-msg" v-show="rules.company.msg!=''">{{rules.company.msg}}</span>
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
export default {
	data(){
		return {
			title:'卧室撒大苏打实打实大苏打',
			author:'林子聪',
			content:'我是内容主体',
			qrVisible:false,
			downVisible:false,
			type:-1,
			views:0,
			formData:{
				username:'',
				mobile:'',
				company:'',
				email:'',
				code:'',
				source_id:''
			},
			rules:{
				username:{
					msg:'',
					name:'姓名'
				},
				mobile:{
					msg:'',
					name:'手机号码'
				},
				company:{
					msg:'',
					name:'公司名称'
				},
				email:{
					msg:'',
					name:'邮箱'
				},
				code:{
					msg:'',
					name:'验证码'
				}
			}
		}
	},
	mounted(){
		this.formData.source_id = this.$route.params.id;
		this.$axios({
			method:'get',
			url:'/archives/show',
			params:{'id':this.$route.params.id}
		}).then((response)=>{
			let res = response.data;
			if(res.code==0){
				this.$msg({'msg':res.msg,'status':'error'});
			}else{
				this.$msg('查询成功');
				let data = res.data.archivesInfo;
				this.title = data.title;
				this.content = data.description;
				this.type = data.type;
				this.views = data.views;
			};
		}).catch((error)=>{
			console.log(error);
		});
	},
	methods:{
		validate(name){
			let val = this.formData[name];
			if(name=='company'){
				console.log('不验证')
			}else if(val=='' && (name!='email')){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='mobile' && !this.$isMobile(val)){
				this.rules[name].msg = this.rules[name].name+'只能为11位的数字';
				return false;
			}else if(name=='email' && (val!='' && !this.$isEmail(val))){
				this.rules[name].msg = this.rules[name].name+'格式有误';
			}else{
				this.rules[name].msg = '';
				return true;
			};
		},
		submit(){
			let flag = false;
			for(let v in this.formData){
				if(v!='source_id'){
					flag = this.validate(v);
				};
			};
			if(flag){
				this.$axios({
					method:'post',
					url:'/client/create',
					data:this.formData
				}).then((response)=>{
					let res = response.data;
					if(res.code==0){
						this.$msg({'msg':res.msg,'status':'error'});
					}else{
						this.$msg('请求成功');
						this.downVisible = false;
					};
				}).catch((error)=>{
					console.log(error);
				});
			}
		}
	}
}
</script>
<style lang="less">
#dialog-qr {
	.p-dialog_content {
		width:300px;
	}
}
#dialog-down {
	color:#333;
	.p-dialog_content{
		width:450px;
		padding:50px;
	}
	.login-img {
		text-align: center;
	}
}
@media screen and (max-width:1200px) {
	.p-dialog_wrapper#dialog-down {
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
}
</style>
<style lang="less" scoped>
#details {
	.main {
		padding: 20px 0;
		min-height: 900px;
	}
	section {
		width:800px;
		h3.content-title {
			font-weight:500;
		    font-size: 25px;
		    color:#333;
			margin-bottom: 30px;
		}
		.author {
			font-size:0;
			margin-bottom: 30px;
			.author-img {
				display: inline-block;
				width:52px;
				height:52px;
				border-radius:52px;
				overflow: hidden;
			}
			.author-info {
				display: inline-block;
				margin-left: 17px;
				b{
					font-size: 16px;
					color:#333;
				}
				span{
					font-size: 14px;
					margin-right: 12px;
					color:#999;
				}
			}
		}
		.content {
			margin-bottom: 15px;
		}
		.clickMore {
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
		.clickUpdate {
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
	}
}
@media screen and (max-width:980px){
	#details {
		section,.articleQr {
			float:none;
			width:100%;
		}
		section {
			padding:14px 10px;
			.clickMore {
				height: 40px;
				line-height: 40px;
			}
		}
		.articleQr {
			padding:14px 10px;
			.focus {
				display: none;
			}
		}
	}
}
</style>
