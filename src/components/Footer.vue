<template>
  <div id="footer">
		<div class="p-footer">
			<div class="wrap">
				<div class="copyright">
					Copyright©&nbsp;2016&nbsp;&nbsp;ganders.cn/纲得&nbsp;&nbsp;&nbsp;京ICP备&nbsp;11007296
					<div class="links">
						<a href="javascript:void(0);"><img src="../../static/logo-link1.png" alt=""></a>
						<a href="javascript:void(0);"><img src="../../static/logo-link2.png" alt=""></a>
						<a href="javascript:void(0);"><img src="../../static/logo-link3.png" alt=""></a>
					</div>
				</div>
			</div>
		</div>
		<div class="m-footer clearfix">
			<router-link to="/" class="item item-home">
				<span class="item-icon"></span>
				<span class="item-text">首页</span>
			</router-link>
			<router-link to="/price" class="item item-price">
				<span class="item-icon"></span>
				<span class="item-text">价格</span>
			</router-link>
			<router-link to="/about" class="item item-about">
				<span class="item-icon"></span>
				<span class="item-text">关于我们</span>
			</router-link>
		</div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="less">
</style>
