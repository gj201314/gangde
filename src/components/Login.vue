<template>
  <div id="login-box">
		<div class="login-img">
			<img src="../../static/logo.png" alt="">
		</div>
		<div class="form mobile-form">
			<div class="form-item">
				<input type="text" name="account" maxlength="11" v-model.trim="formData.account" @blur="validate('account')" placeholder="手机号码" />
				<span class="error-msg" v-show="rules.account.msg!=''">{{rules.account.msg}}</span>
			</div>
			<div class="form-item">
				<input type="password" name="password" v-model.trim="formData.password" @blur="validate('password')" placeholder="密码" />
				<span class="error-msg" v-show="rules.password.msg!=''">{{rules.password.msg}}</span>
				<a href="javascript:void(0);" class="forgotPwd" @click="toLink('/forgotPwd')">忘记密码</a>
			</div>
			<div class="btn-box">
				<button type="button" class="btn-submit" @click="submit">登录</button>
			</div>
			<span class="exists">还没有账号?请<a href="javascript:void(0);" @click="toLink('/reg')">注册</a></span>
		</div>
  </div>
</template>

<script>
export default {
    data () {
		return {
			formData:{
				account:'',
				password:''
			},
			rules:{
				account:{
					msg:'',
					name:'手机号码'
				},
				password:{
					msg:'',
					name:'密码'
				}
			}
		}
	},
	methods:{
		validate(name){
			let val = this.formData[name];
			if(val==''){
				this.rules[name].msg = this.rules[name].name+'不能为空';
				return false;
			}else if(name=='account' && !this.$isMobile(val)){
				this.rules[name].msg = this.rules[name].name+'格式有误';
				return false;
			}else if(name=='confirmPwd' && (this.formData['pwd']!=this.formData['confirmPwd'])){
				this.rules[name].msg = '两次密码不一致';
				return false;
			}else{
				this.rules[name].msg = '';
				return true;
			};
		},
		toLink(href){
			this.$emit('handleEvent','close');
			this.$router.push(href);
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
					url:'/user/login',
					data:this.formData
				}).then((response)=>{
					let res = response.data;
					if(res.code==0){
						this.$msg({'msg':res.msg,'status':'error'});
					}else{
						this.$msg('登录成功');
						localStorage.setItem('gangde_user',JSON.stringify(res.data.userinfo));
						this.$store.commit('swicthNickName',res.data.userinfo.username);
						this.$emit('handleEvent','close');
						setTimeout(()=>{
							location.href = '/index/user/dashboard.html';
						},1000);
					};
				}).catch((error)=>{
					console.log(error);
				});
			}
		}
	}
}
</script>
<style scoped>
#login-box .login-img{
	margin-bottom: 50px;
}
#login-box .login-img img {
	display: inline-block;
	vertical-align: middle;
}

</style>