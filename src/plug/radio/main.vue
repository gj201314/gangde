<template>
	<label role="radio" :class="['p-radio',checked==label? 'is-checked':'']" aria-checked="true">
		<span :class="['p-radio__input',checked==label? 'is-checked':'']">
			<span class="p-radio__inner"></span>
			<input type="radio" class="p-radio__original" :value="label" @click="radioValue">
		</span>
		<span class="p-radio__label"><slot></slot></span>
	</label>
</template>
<script>
/*
	疑难点文档地址:
	model:https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
	
*/
export default {
	name:'pRadio',
	model:{
		prop:'checked',
		event:'change'
	},
	props:{
		label:{},
		checked:{}
	},
	methods: {
		radioValue(){
			console.log('触发的表单');
			this.$emit('change',this.label);
		}
	}
}
</script>
<style lang="less">
.p-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
	&:last-child {
		margin-right: 0
	}
	.p-radio__input {
		white-space: nowrap;
		cursor: pointer;
		outline: none;
		display: inline-block;
		line-height: 1;
		position: relative;
		vertical-align: middle;
		&.is-checked {
			.p-radio__inner {
			    background: @dColor;
				border: 1px solid @dColor;
				border-radius: 100%;
				width: 14px;
				height: 14px;
				position: relative;
				cursor: pointer;
				display: inline-block;
				box-sizing: border-box;
				&:after {
				    .transform(translate(-50%,-50%) scale(1));
				}
			}
			&+.p-radio__label {
				color: @dColor;
			}
		}
		.p-radio__inner {
			background:#fff;
			border: 1px solid #dcdfe6;
			border-radius: 100%;
			width: 14px;
			height: 14px;
			position: relative;
			cursor: pointer;
			display: inline-block;
			box-sizing: border-box;
			&:after {
				width: 4px;
				height: 4px;
				border-radius: 100%;
				background-color: #fff;
				content: "";
				position: absolute;
				left: 50%;
				top: 50%;
				.transform(translate(-50%,-50%) scale(0));
				transition: transform .15s ease-in;
			}
		}
		.p-radio__original {
			opacity: 0;
			outline: none;
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 0
		}
	}
}
</style>
