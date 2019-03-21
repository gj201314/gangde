//对axios进行统一配置
import axios from 'axios'
//声明一个全局的axios
window.axios = axios;
//创建axios实例
const service = axios.create({
	baseURL:'/api',
	timeout:5000,
	withCredentials: true // 允许携带cookie
});

export default service