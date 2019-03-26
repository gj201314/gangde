<template>
	<div id="details">
		<t-header></t-header>
		<d-header :title="title"></d-header>
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
				<button type="button" v-show="type==0" class="clickUpdate" @click="downVisible=true">{{customBtn}}</button>
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
					<li v-for="item in article">
						<router-link :to="'/details/'+item.id">{{item.title}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<p-dialog id="dialog-qr" :visible.sync="qrVisible">
			<div class="img-box">
				<img :src="qrImg" alt="">
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
					<span class="getCode" @click="createCountDown">{{countText}}</span>
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
		<p-dialog id="dialog-downBtn" :visible.sync="downBtnVisible">
			<div class="msg">资料提交成功，可以下载白皮书文件了！</div>
			<a href="" download="" ref="download">点击即可下载</a>
		</p-dialog>
		<b-footer></b-footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
			title:'',
			author:'林子聪',
			content:'',
			qrVisible:false,
			downVisible:false,
			downBtnVisible:false,
			type:-1,
			views:0,
			timer:null,
			countText:'获取',
			loadingFlag:false,
			article:[],
			customBtn:'点此获取白皮书',
			qrImg:'../../static/qr-img.png',
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
	watch:{
		$route(to,form){
			console.log('第二进入') //to,form
			this.init();
		}
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
			this.formData.source_id = this.$route.params.id;
			axios({
				method:'get',
				url:'/api/archives/show',
				params:{'id':this.$route.params.id}
			}).then((response)=>{
				if(this.loadingFlag){
					this.$store.commit('switchPageLoading',false);	
				};
				this.loadingFlag=true;
				let res = response.data;
				if(res.code==0){
					this.$msg({'msg':res.msg,'status':'error'});
				}else{
					let data = res.data.archivesInfo;
					document.title = this.title = data.title;
					this.content = data.description;
					this.type = data.type;
					this.views = data.views;
					if(this.type==0){//白皮书
						if(data.customBtn!=''){
							this.customBtn = data.customBtn;
						};
					}else{
						this.qrImg = data.qrImg;
					};
				};
			}).catch((error)=>{
				if(this.loadingFlag){
					this.$store.commit('switchPageLoading',false);	
				};
				this.loadingFlag=true;
				console.log(error);
			});
			axios.get('/api/Archives/about/47?id='+this.formData.source_id).then((about)=>{
				if(this.loadingFlag){
					this.$store.commit('switchPageLoading',false);	
				};
				this.loadingFlag=true;
				let aboutRes = about.data;
				if(aboutRes.code==0){
					this.$msg({'msg':aboutRes.msg,'status':'error'});
				}else{
					this.article = aboutRes.data.Archives;
				};
			}).catch((error)=>{
				if(this.loadingFlag){
					this.$store.commit('switchPageLoading',false);	
				};
				this.loadingFlag=true;
				console.log(error);
			});
		},
		createCountDown(){
			if(this.formData.mobile==''){
				this.$msg({msg:'请输入手机号码',status:'error'});
			}else if(!this.$isMobile(this.formData.mobile)){
				this.$msg({msg:'请输入正确的手机号码',status:'error'});
			}else if(this.timer==null){
				this.smSend();
			};
		},
		countDown(num){
			if(num==1){
				this.countText = '获取';
				clearTimeout(this.timer);
			}else{
				--num;
				this.countText = `${num}秒后重新获取`;
				this.timer = setTimeout(()=>{
					this.countDown(num);
				},1000);
			};
		},
		smSend(){
			this.$axios({
				method:'post',
				url:'/sms/send',
				data:{"mobile":this.formData.mobile}
			}).then((response)=>{
				let res = response.data;
				if(res.code==0){
					this.$msg({'msg':res.msg,'status':'error'});
				}else{
					this.countDown(60);
				};
			}).catch((error)=>{
				console.log(error);
			});
		},
		download(href){
			this.$refs['download'].href = href;
			let pos = href.lastIndexOf("/");
			if(pos == -1){
				pos = href.lastIndexOf("\\")
			}
			let filename = href.substr(pos +1);
			this.$refs['download'].download = filename;
		},
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
						this.download(res.data.download);
						this.downVisible = false;
						setTimeout(()=>{
							this.downBtnVisible = true;
						},500);
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
#dialog-downBtn {
	.p-dialog_content {
		width:400px;
		.msg {
			background: url(../assets/success-icon.png) no-repeat left 5px;
			color: #333333;
			font-size: 16px;
			padding-left:45px;
			line-height: 40px;
			min-height: 100px;
			.backgroundSize(30px 30px);
		}
		a {
			height:35px;
			background:#efc935;
			line-height:35px;
			width:100%;
			margin:0 auto;
			color:#584704;
			font-size:14px;
			display: block;
			text-align: center;
			.borderRadius(35px)
		}
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
			min-height:600px;
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
			margin-bottom: 40px;
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
			margin-bottom: 40px;
			background:rgba(255,0,0,0.5);
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
