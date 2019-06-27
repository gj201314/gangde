<template>
	<div id="about">
		<t-header :toLogin="toLogin"></t-header>
		<div class="about-main">
			<div class="about-bg"></div>
			<div class="about-section">
				<h3>公司简介</h3>
				<p>纲得平台（Ganders）创立于新加坡，结合多年 Google 搜索引擎优化相关经验，致力于 以社交运营工具的方式，协助品牌主和服务公司，以高性价比的方式，快速生成社交海报，内容导读H5或留资页， 通过优质内容获取高质量粉丝和leads收集；</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			toLogin:false
		}
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},300);
	}
}
</script>
<style>
#about #header {
    height: 80px !important;
    padding: 10px 0 !important;
}
#app[data-route="about"] {
	min-width:1200px !important;
	overflow-x:auto;
}
#about .p-header,#app[data-route="about"] .p-footer {
	display: block !important;
}
#about .m-header,#app[data-route="about"] .m-footer {
	display: none !important;
}
#app[data-route="about"] .wrap {
	width:1200px !important;
}
#app[data-route="about"] #footer {
	height: 95px !important;
    background: #1f1f1f !important;
    color: #bbb9b9 !important;
}
</style>
<style lang="less" scoped>
#about  {
	.wrap {
		min-width:1200px;
	}
	.about-main {
		position:relative;
		width:100%;
		height:1024px;
		marign:0 auto;
		overflow: hidden;
		.about-bg {
			position:absolute;
			width:100%;
			height:1024px;
			left:0;
			top:0;
			background-image: url(../../static/about-bg.jpg);
			background-size:cover;
			-webkit-background-size:cover;
			-moz-background-size:cover;
			background-repeat: no-repeat;
			background-position: center center;
		}
		.about-section {
			position: absolute;
			bottom:20%;
			right:27%;
			width:33%;
			h3 {
				font-size:26px;
				color:#fff;
				font-weight: normal;
			}
			p{
				font-size: 14px;
				line-height: 30px;
				color:#fff;
			}
		}
	}
}
</style>
