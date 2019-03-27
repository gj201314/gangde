<template>
	<div id="reg">
		<t-header></t-header>
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
										<div class="input-box input-code" :class="[rules.code.msg!=''? 'error':'']">
											<input type="text" maxlength="4" v-model.number="formData.code" @blur="validate('code')" placeholder="手机短信" />
											<span class="getCode" @click="createCountDown">{{countText}}</span>
										</div>
									</div>
									<div class="item-errMsg" v-show="rules.code.msg!=''">
										{{rules.code.msg}}
									</div>
								</div>
								<div class="form-item">
									<div class="item-title">新密码:</div>
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
											<button type="button" class="btn-submit" @click="submit">重置密码</button>
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
									<input type="text" class="input-code" maxlength="4" v-model.number="formData.code" @blur="validate('code')" placeholder="验证码" />
									<span class="getCode" @click="createCountDown">{{countText}}</span>
									<span class="error-msg" v-show="rules.code.msg!=''">{{rules.code.msg}}</span>
								</div>
								<div class="form-item">
									<input type="text" v-model.trim="formData.password" @blur="validate('password')" placeholder="新密码" />
									<span class="error-msg" v-show="rules.password.msg!=''">{{rules.password.msg}}</span>
								</div>
								<div class="form-item">
									<input type="text" v-model.trim="formData.confirmPwd" @blur="validate('confirmPwd')" placeholder="确认密码" />
									<span class="error-msg" v-show="rules.confirmPwd.msg!=''">{{rules.confirmPwd.msg}}</span>
								</div>
								<div class="btn-box">
									<button type="button" class="btn-submit" @click="submit">重置密码</button>
								</div>
							</div>
						</div>
						<!-- <p-radio v-model="typeRadio" label="1">邮箱验证</p-radio>
						<p-radio v-model="typeRadio" label="2">手机验证</p-radio> -->
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
						<div class="msg">密码已重置成功，请使用新密码登录</div>
						<button type="button" class="btn">登录</button>
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
			typeRadio:1,
			countText:'获取',
			timer:null,
			formData:{
				mobile:'',
				password:'',
				confirmPwd:'',
				code:'',
			},
			rules:{
				mobile:{
					msg:'',
					name:'手机号码'
				},
				password:{
					msg:'',
					name:'新密码'
				},
				confirmPwd:{
					msg:'',
					name:'确认密码'
				},
				code:{
					msg:'',
					name:'短信效验码'
				}
			}
		}
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},300);
	},
	methods:{
		createCountDown(){
			if(this.formData.mobile==''){
				this.$msg({msg:'请输入手机号码',status:'error'});
			}else if(!this.$isMobile(this.formData.mobile)){
				this.$msg({msg:'请输入正确的手机号码',status:'error'});
			}else if(name=='code' && !this.$isMobileCode(val)){
				this.rules[name].msg = this.rules[name].name+'只能为4位的数字';
				return false;
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
				data:{"mobile":this.formData.mobile,'event':'resetpwd'}
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
			let val = this.formData[name],p1=/^1([0-9]{10})$/;
			if(val==''){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='mobile' && !p1.test(val)){
				this.rules[name].msg = this.rules[name].name+'只能为11位的数字';
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
			};
			if(flag){
				console.log('提交ajax')
			}
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
/* @media screen and (max-width:400px) {
	#reg {
		padding:30px 15px;
		width:auto;
		max-width: 100%;
	}
} */
</style>
