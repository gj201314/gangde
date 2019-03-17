import Msg from './msg/index.js'
import Loading from './loading/index.js'
import Switch from './Switch/index.js'
import Dialog from './dialog/index.js'
import Cookie from './cookie/index.js'
import User from './user/index.js'

const install = (Vue)=>{
	Vue.component(Loading.name,Loading);
	Vue.component(Switch.name,Switch);
	Vue.component(Dialog.name,Dialog);
	
	Vue.prototype.$msg = Msg.init;
	Vue.prototype.$cookie = window.$cookie = Cookie;
	Vue.prototype.$user = window.$user = User;
};

export default install;