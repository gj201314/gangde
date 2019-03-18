<template>
	<div class="loading">
		<div class="mask"></div>
		<div class="section">
			<img src="../../assets/loading.gif" alt="">
			<span class="text">正在加载</span>
		</div>
	</div>
</template>
<script>
export default {
	name:'loading'
}
</script>

<style lang="less" scoped>
.loading {
	position: fixed;
	top:0;
	right:0;
	left:0;
	bottom:0;
	z-index:8888;
	.mask {
		position: absolute;
		background: rgba(0,0,0,0.5);
		width:100%;
		height: 100%;
	}
	.section {
		position: absolute;
		line-height: 32px;
		top:50%;
		left:50%;
		transform:translateY(-50%);  
		transform:translateX(-50%);  
		background: #fff;
		padding:20px;
		border-radius: 3px;
		img {
			vertical-align: middle;
		}
	}
}
</style>
