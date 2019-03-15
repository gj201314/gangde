<template>
	<div :class="['p-switch',activeValue? 'is-checked':'']" :aria-checked="activeValue" @click="switchValue">
		<input type="checkbox" ref="input" class="p-switch__input">
		<span class="p-switch__core" ref="core" :style="{'width':width+'px'}"></span>
		<span class="p-switch__label p-switch__label--right"><span aria-hidden="true" v-if="activeText!=''">{{activeText}}</span></span>
	</div>
</template>
<script>
/*
	疑难点文档地址:
	model:https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
	
*/
export default {
	name:'pSwitch',
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		checked:{
			type:Boolean,
			default:false
		},
		activeColor:{
			type:String,
			default:'#d8bb48'
		},
		inactiveColor:{
			type:String,
			default:'#dcdfe6'
		},
		activeText:{
			type:String,
			default:''
		},
		width: {
			type: Number,
			default: 40
		}
	},
	data(){
		return {
			activeValue:this.checked
		}
	},
	mounted(){
		this.$refs.input.checked = this.activeValue = this.checked;
		this.setBackgroundColor();
	},
	methods: {
		switchValue(){
			this.activeValue = !this.activeValue;
			this.setBackgroundColor();
			this.$emit('change',this.activeValue);
			this.$nextTick(()=>{
				this.$refs.input.checked = this.activeValue;
			})
		},
		setBackgroundColor(){
			let color = this.activeValue? this.activeColor:this.inactiveColor;
			console.log(color)
			this.$refs.core.style.borderColor = color;
			this.$refs.core.style.backgroundColor = color;
		}
	}
}
</script>
<style>
.p-switch {
	position: relative;
	font-size:0;
	height: 20px;
}
.p-switch .p-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0
}
.p-switch .p-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
	-webkit-transition: border-color .3s,background-color .3s;
	-moz-transition: border-color .3s,background-color .3s;
    vertical-align: middle
}
.p-switch .p-switch__core:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
	-webkit-transition: all .3s;
	-moz-transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff
}
.p-switch.is-checked .p-switch__core:after {
    left: 100%;
    margin-left: -17px;
}
.p-switch .p-switch__label {
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
}
.p-switch .p-switch__label--right {
    margin-left: 10px;
}
</style>
