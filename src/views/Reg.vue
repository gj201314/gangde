<template>
	<div id="reg">
		<t-header :toLogin="toLogin"></t-header>
		<div class="wrap">
			<div class="main clearfix">
				<template v-if="!flag">
					<section class="pull-left">
						<div class="p-form">
							<div class="form">
								<div class="form-item">
									<div class="item-title">手机号码:</div>
									<div class="item-content">
										<div class="input-box" :class="[rules.mobile.msg!=''? 'error':'']">
											<input type="text" v-model.trim="formData.mobile" @blur="validate('mobile')" placeholder="11位数字" />
										</div>
									</div>
									<div class="item-errMsg" v-show="rules.mobile.msg!=''">
										{{rules.mobile.msg}}
									</div>
								</div>
								<div class="form-item">
									<div class="item-title">短信效验码:</div>
									<div class="item-content">
										<div class="input-box input-code" :class="[rules.captcha.msg!=''? 'error':'']">
											<input type="text" maxlength="4" v-model.number="formData.captcha" @blur="validate('captcha')" placeholder="手机短信" />
											<span class="getCode" @click="createCountDown">{{countText}}</span>
										</div>
									</div>
									<div class="item-errMsg" v-show="rules.captcha.msg!=''">
										{{rules.captcha.msg}}
									</div>
								</div>
								<div class="form-item">
									<div class="item-title">登录密码:</div>
									<div class="item-content">
										<div class="input-box" :class="[rules.password.msg!=''? 'error':'']">
											<input type="password" v-model.trim="formData.password" @blur="validate('password')" placeholder="3-20位字符" />
										</div>
									</div>
									<div class="item-errMsg" v-show="rules.password.msg!=''">
										{{rules.password.msg}}
									</div>
								</div>
								<div class="form-item">
									<div class="item-title">确认密码:</div>
									<div class="item-content">
										<div class="input-box" :class="[rules.confirmPwd.msg!=''? 'error':'']">
											<input type="password" v-model.trim="formData.confirmPwd" @blur="validate('confirmPwd')" placeholder="请再输入一遍" />
										</div>
									</div>
									<div class="item-errMsg" v-show="rules.confirmPwd.msg!=''">
										{{rules.confirmPwd.msg}}
									</div>
								</div>
								<div class="form-item">
									<div class="item-title"></div>
									<div class="item-content">
										<div class="btn-box">
											<button type="button" class="btn-submit" @click="submit">立即注册</button>
										</div>
										<div class="other clearfix">
											<!-- <p-switch checked="checked" v-model="formData.remember" activeText="忘记我" class="pull-left"></p-switch> -->
											<router-link to="/forgotPwd" class="pull-right">忘记密码？</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="m-form">
							<div class="form mobile-form">
								<div class="form-item">
									<input type="text" v-model.trim="formData.mobile" @blur="validate('mobile')" placeholder="手机号码" />
									<span class="error-msg" v-show="rules.mobile.msg!=''">{{rules.mobile.msg}}</span>
								</div>
								<div class="form-item item-code">
									<input type="text" class="input-code" maxlength="4" v-model.number="formData.captcha" @blur="validate('captcha')" placeholder="验证码" />
									<span class="getCode" @click="createCountDown">{{countText}}</span>
									<span class="error-msg" v-show="rules.captcha.msg!=''">{{rules.captcha.msg}}</span>
								</div>
								<div class="form-item">
									<input type="password" v-model.trim="formData.password" @blur="validate('password')" placeholder="登录密码" />
									<span class="error-msg" v-show="rules.password.msg!=''">{{rules.password.msg}}</span>
								</div>
								<div class="form-item">
									<input type="password" v-model.trim="formData.confirmPwd" @blur="validate('confirmPwd')" placeholder="确认密码" />
									<span class="error-msg" v-show="rules.confirmPwd.msg!=''">{{rules.confirmPwd.msg}}</span>
								</div>
								<div class="btn-box">
									<button type="button" class="btn-submit" @click="submit">立即注册</button>
								</div>
								<div class="other clearfix">
									<!-- <p-switch checked="checked" v-model="formData.remember" activeText="忘记我" class="pull-left"></p-switch> -->
									<router-link to="/forgotPwd" class="pull-right">忘记密码？</router-link>
								</div>
							</div>
						</div>
					</section>
					<article class="pull-left">
						<div class="qr-box">
							<div class="qrImg-box">
								<img src="../../static/qr-img.png" alt="">
							</div>
							<b>关注纲得微信公众号</b>
							<p>专注于晨报分享和阅读转化</p>
						</div>
					</article>
				</template>
				<template v-if="flag">
					<div class="success-box">
						<div class="msg">注册成功，可以去登录了</div>
						<button type="button" class="btn" @click="toLogin=true">登录</button>
					</div>
				</template>
			</div>
		</div>
		<b-footer></b-footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
			flag:false,
			toLogin:false,
			formData:{
				mobile:'',
				password:'',
				confirmPwd:'',
				captcha:''
			},
			remember:true,
			timer:null,
			countText:'获取',
			rules:{
				mobile:{
					msg:'',
					name:'手机号码'
				},
				password:{
					msg:'',
					name:'登录密码'
				},
				confirmPwd:{
					msg:'',
					name:'确认密码'
				},
				captcha:{
					msg:'',
					name:'短信效验码'
				}
			}
		}
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},1000);
	},
	methods:{
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
		validate(name){
			let val = this.formData[name];
			if(val==''){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='mobile' && !this.$isMobile(val)){
				this.rules[name].msg = this.rules[name].name+'只能为11位的数字';
				return false;
			}else if(name=='captcha' && !this.$isMobileCode(val)){
				this.rules[name].msg = this.rules[name].name+'只能为4位的数字';
				return false;
			}else if(name=='password' && !this.$isPwd(val)){
				this.rules[name].msg = this.rules[name].name+'只能为3-20位的字符';
				return false;
			}else if(name=='confirmPwd' && (this.formData['password']!=this.formData['confirmPwd'])){
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
				if(!flag){
					break;
				};
			};
			if(flag){
				this.$axios({
					method:'post',
					url:'/user/register',
					data:this.formData
				}).then((response)=>{
					let res = response.data;
					if(res.code==0){
						this.$msg({'msg':res.msg,'status':'error'});
					}else{
						// this.flag = true;
						this.$msg({'msg':'注册成功'});
						setTimeout(()=>{
							location.href = '/index/user/dashboard.html';
						},1000);
					};
				}).catch((error)=>{
					console.log(error);
				});
			};
		}
	}
}
</script>
<style lang="less" scoped>
#reg {
	article {
		.qrImg-box {
			position: relative;
			img{
				position: relative;
				z-index: 2;
			}
			&:after {
				content:'';
				position: absolute;
				z-index: 1;
				left:60px;
				top:0;
				width:22px;
				height:130px;
				background: url(../../static/shadow.png) no-repeat left bottom;
				background-size:22px 130px;
			}
		}
	}
}
</style>
