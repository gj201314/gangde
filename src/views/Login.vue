<template>
	<div id="reg">
		<div class="logo"><img src="../../static/logo.png" alt="" /></div>
		<div class="form">
			<div class="form-item">
				<input type="text" maxlength="11" v-model.trim="formData.mobile" @blur="validate('mobile')" placeholder="手机号码" />
				<span class="error-msg" v-show="rules.mobile.msg!=''">{{rules.mobile.msg}}</span>
			</div>
			<div class="form-item">
				<input type="password" v-model.trim="formData.pwd" @blur="validate('pwd')" placeholder="密码" />
				<span class="error-msg" v-show="rules.pwd.msg!=''">{{rules.pwd.msg}}</span>
				<router-link to="/forgotPwd" class="forgotPwd">忘记密码</router-link>
			</div>
			<button type="button" class="btn-submit" @click="submit">登录</button>
			<span class="exists">还没有账号?请<router-link to="/reg">注册</router-link></span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			formData:{
				mobile:'',
				pwd:''
			},
			rules:{
				mobile:{
					msg:'',
					name:'手机号码'
				},
				pwd:{
					msg:'',
					name:'密码'
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
			}else if(name=='mobile' && p1.test(val)){
				this.rules[name].msg = this.rules[name].name+'只能为11位的数字';
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
<style scoped>
/* @media screen and (max-width:400px) {
	#reg {
		padding:30px 15px;
		width:auto;
		max-width: 100%;
	 }
}*/
</style>
