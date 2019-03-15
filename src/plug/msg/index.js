import Vue from 'vue'
import main from './main.vue'

main.init = (opts = {})=>{
	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
		  msg: opts
		}
	};
	let msg = Vue.extend(main);
	let vMsg = new msg({
		data:opts
	}).$mount();
	document.querySelector('body').appendChild(vMsg.$el);
};
export default main;