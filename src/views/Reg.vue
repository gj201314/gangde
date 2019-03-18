<template>
	<div id="reg">
		<t-header></t-header>
		<div class="wrap">
			<div class="main clearfix">
				<template v-if="!flag">
					<section class="pull-left">
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
								<div class="item-title">登录密码:</div>
								<div class="item-content">
									<div class="input-box" :class="[rules.pwd.msg!=''? 'error':'']">
										<input type="password" v-model.trim="formData.pwd" @blur="validate('pwd')" placeholder="3-20位字符" />
									</div>
								</div>
								<div class="item-errMsg" v-show="rules.pwd.msg!=''">
									{{rules.pwd.msg}}
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
								<div class="item-title">短信效验码:</div>
								<div class="item-content">
									<div class="input-box input-code" :class="[rules.code.msg!=''? 'error':'']">
										<input type="text" maxlength="4" v-model.number="formData.code" @blur="validate('code')" placeholder="手机短信" />
										<span class="getCode">获取</span>
									</div>
								</div>
								<div class="item-errMsg" v-show="rules.code.msg!=''">
									{{rules.code.msg}}
								</div>
							</div>
							<div class="form-item">
								<div class="item-title"></div>
								<div class="item-content">
									<div class="btn-box">
										<button type="button" class="btn-submit" @click="submit">立即注册</button>
									</div>
									<div class="other clearfix">
										<p-switch checked="checked" v-model="formData.remember" activeText="忘记我" class="pull-left"></p-switch>
										<router-link to="/forgotPwd" class="pull-right">忘记密码？</router-link>
									</div>
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
			formData:{
				mobile:'',
				pwd:'',
				confirmPwd:'',
				code:'',
				remember:true
			},
			rules:{
				mobile:{
					msg:'',
					name:'手机号码'
				},
				pwd:{
					msg:'',
					name:'登录密码'
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
		},1000);
	},
	methods:{
		validate(name){
			let val = this.formData[name],p1=/^1([0-9]{10})$/;
			if(val==''){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='mobile' && !p1.test(val)){
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
