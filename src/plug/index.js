import Msg from './msg/index.js'
import Loading from './loading/index.js'
import Switch from './Switch/index.js'
import Dialog from './dialog/index.js'
import Cookie from './cookie/index.js'
import User from './user/index.js'
import Radio from './radio/index.js'

const install = (Vue)=>{
	Vue.component(Loading.name,Loading);
	Vue.component(Switch.name,Switch);
	Vue.component(Radio.name,Radio);
	Vue.component(Dialog.name,Dialog);

	Vue.prototype.$msg = window.$msg = Msg.init;
	Vue.prototype.$cookie = window.$cookie = Cookie;
	Vue.prototype.$user = window.$user = User;
	
	//手机号码验证
	Vue.prototype.$isMobile = (val)=>{
		let p = /^1([0-9]{10})$/;
		return p.test(val);
	};
	//验证邮箱
	Vue.prototype.$isEmail = (val)=>{
		let p = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return p.test(val);
	};
	//验证手机号验证码
	Vue.prototype.$isMobileCode = (val)=>{
		let p = /^[0-9]{6}$/;
		return p.test(val);
	}
	//验证密码
	Vue.prototype.$isPwd = (val)=>{
		let s = true;
		if(val.length<3 && val.length>20){
			s=false;
		};
		return s;
	}
};

export default install;