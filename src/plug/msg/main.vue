<template>
	<transition name="msg-fade" @after-leave="handleAfterLeave" @after-enter="afterEnter">
		<div :class="['g-msg',`msg-${status}`]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">{{msg}}</div>
	</transition>
</template>
<script>
export default {
	name:'p-msg',
	data(){
		return {
			msg:'',//提示信息
			status:'success',//success成功，error失败,默认成功
			duration:2000,//持续时间,默认2秒
			visible:false,//是否显示
			timer:null //定时器对象
		}
	},
	mounted(){
		this.visible = true;
	},
	methods:{
		handleAfterLeave(){
			this.$destroy(true);
			this.$el.parentNode.removeChild(this.$el);
		},
		afterEnter(){
			this.startTimer();
		},
		beforeLeave(){
			console.log('离开前')
		},
		clearTimer(){
			clearTimeout(this.timer)
		},
		startTimer(){
			if (this.duration > 0) {
				this.timer = setTimeout(()=>{
					this.visible = false;
				},this.duration)
			}
		}
	}
}
</script>
<style lang="less">
.g-msg {
	position: fixed;
	padding: 10px;
	color:#fff;
	top:20px;
	left:50%;
	border-radius: 4px;
	text-align: center;
	transition: opacity .3s,transform .4s;
	-webkit-transition: opacity .3s,-webkit-transform .4s;
	-moz-transition: opacity .3s,-moz-transform .4s;
	.transform(translateX(-50%));
	z-index:3000;
	&.msg-success{
		background:#47CA56;
	}
	&.msg-error{
		background:#f00;
	}
}
.msg-fade-enter,.msg-fade-leave-active {
    opacity: 0;
    .transform(translate(-50%,-100%));
}
</style>
