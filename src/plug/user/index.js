import cookie from '../cookie'
const user = localStorage.getItem('gangde_user');

function getUser(){ //获取用户信息
	return user? JSON.parse(user):'';
}
export default {
	getUser,
	isUserLogin(){
		if(cookie.getCookie('token') && cookie.getCookie('token')){
			return true;
		};
		return false;
	}
}