<template>
	<div :class="['p-dialog_wrapper',visibleDialog? 'dialog-active':'']">
		<transition name="dialog-fade">
			<div class="p-dialog_content" v-show="visibleContent">
				<slot></slot>
				<div class="p-dialog_close" v-if="closeVisible" @click="closeDialog"></div>
			</div>
		</transition>
		<div class="p-modal" @click="closeDialog"></div>
	</div>
</template>
<script>
export default {
	name:'pDialog',
	props:{
		visible:{
			type:Boolean,
			default:false,
		},
		closeVisible:{
			type:Boolean,
			default:true,
		}
	},
	data(){
		return {
			visibleContent:false,
			visibleDialog:false
		}
	},
	watch:{
		visible(n,o){
			if(n==true){
				this.visibleDialog = true;
				setTimeout(()=>{
					this.visibleContent = true;
				},200)
			}else{
				this.visibleContent = false;
				setTimeout(()=>{
					this.visibleDialog = false;
				},400)
			}
		}
	},
	methods:{
		closeDialog(){
			this.$emit('update:visible',false);
		}
	}
}
</script>
<style>
.p-dialog_wrapper {
	position: fixed;
	left:0;
	right:0;
	bottom:0;
	top:0;
	display:none;
	z-index:2080;
}
.p-dialog_wrapper.dialog-active {
	display: block;
}
.p-dialog_wrapper .p-dialog_content {
	position:relative;
	background: #fff;
	z-index: 3;
	width:50%;
	margin:100px auto 0 auto;
	padding:20px;
	border-radius: 4px;
	transition: opacity .3s,transform .4s;
	-webkit-transition: opacity .3s,-webkit-transform .4s;
	-moz-transition: opacity .3s,-moz-transform .4s;
}
.p-dialog_wrapper .p-dialog_content .p-dialog_close {
	position: absolute;
	top:17px;
	right:-35px;
	width:35px;
	height:35px;
	background:#d8bb48 url(../../assets/close-icon.png) no-repeat center center;
	background-size: 12px 12px;
	border-radius: 0 4px 4px 0;
}
.dialog-fade-enter,.dialog-fade-leave-active {
    opacity: 0;
	background:#f00;
    transform: translateY(-100%);
	-webkit-transform: translateY(-100%);
	-moz-transform: translateY(-100%);
}
.p-modal {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
	z-index:2;
}
</style>
