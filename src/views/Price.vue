<template>
	<div id="price">
		<t-header></t-header>
		<div class="wrap clearfix main">
			<h3 class="list-title">套餐价格</h3>
			<div class="list-item clearfix">
				<div class="item free">
					<h4>免费版</h4>
					<span class="price"><i>&yen;</i>0</span>
					<ul class="fn-list">
						<li>分组:&nbsp;1组</li>
						<li>文章标签设置</li>
						<li>白皮书注册生成&nbsp;1套</li>
						<li>内容预览h5生成&nbsp;2套</li>
						<li>海报模板&nbsp;5套</li>
						<li>监测链生成服务<i class="icon error"></i></li>
						<li>推广参数生成服务<i class="icon error"></i></li>
						<li>文章抓取平台开发<i class="icon success"></i></li>
						<li>数据展示平台开发<i class="icon success"></i></li>
						<li>每日晨报功能开放<i class="icon error"></i></li>
					</ul>
					<div class="item-hover">
						<h4>免费版</h4>
						<!-- <div class="btn-box">
							<button type="button" class="btn-default">购买</button>
						</div> -->
					</div>
				</div>
				<div class="item basis">
					<h4>基础版</h4>
					<span class="price"><i>&yen;</i>14.900</span>
					<ul class="fn-list">
						<li>分组:&nbsp;2组</li>
						<li>文章标签设置</li>
						<li>白皮书注册生成&nbsp;15套</li>
						<li>内容预览h5生成&nbsp;30套</li>
						<li>海报模板&nbsp;5套</li>
						<li>监测链生成服务<i class="icon success"></i></li>
						<li>推广参数生成服务<i class="icon success"></i></li>
						<li>文章抓取平台开发<i class="icon success"></i></li>
						<li>数据展示平台开发<i class="icon success"></i></li>
						<li>每日晨报功能开放<i class="icon success"></i></li>
					</ul>
					<div class="item-hover">
						<h4>基础版</h4>
						<div class="btn-box">
							<button type="button" class="btn-default">购买</button>
						</div>
					</div>
				</div>
				<div class="item enterprise">
					<h4>免费版</h4>
					<span class="price"><i>&yen;</i>29.800</span>
					<ul class="fn-list">
						<li>分组:&nbsp;5组</li>
						<li>文章标签设置</li>
						<li class="unique">白皮书注册生成<i class="text">不限</i></li>
						<li class="unique">内容预览h5生成<i class="text">不限</i></li>
						<li class="unique">海报模板<i class="text">不限</i></li>
						<li>监测链生成服务<i class="icon success"></i></li>
						<li>推广参数生成服务<i class="icon success"></i></li>
						<li>文章抓取平台开发<i class="icon success"></i></li>
						<li>数据展示平台开发<i class="icon success"></i></li>
						<li>每日晨报功能开放<i class="icon success"></i></li>
					</ul>
					<div class="item-hover">
						<h4>基础版</h4>
						<div class="btn-box">
							<button type="button" class="btn-default">购买</button>
						</div>
					</div>
				</div>
				<div class="item custom">
					<h4>协商版</h4>
					<span class="price"><i>&yen;</i>需协商</span>
					<ul class="fn-list">
						<li>定制化海报模板开发设计</li>
						<li>微信公众号授权及二维码管理</li>
					</ul>
				</div>
			</div>
		</div>
		<b-footer></b-footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
		}
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},1000)
	},
	methods:{
		
	}
}
</script>
<style scoped>
#price .main {
	padding: 20px 0;
}
#price .list-title {
	font-size: 35px;
	text-align: center;
	color:#666;
	margin-bottom: 60px;
}
#price .list-item {
	font-size:0;
	display: table;
	width: 100%;
	margin-bottom: 115px;
	-webkit-box-shadow:0px 5px 15px #e5e5e5;
	-moz-box-shadow:0px 5px 15px #e5e5e5;
	box-shadow:0px 5px 15px #e5e5e5;
}
#price .list-item .item {
	display: table-cell;
	vertical-align: top;
	position: relative;
	width:25%;
	background: #fff;
	font-size: 14px;
	border:1px #ececec solid;
	border-top:0;
	cursor: pointer;
}
#price .list-item .item:hover .item-hover {
	display: block;
}
#price .list-item .item h4{
	height: 60px;
	line-height: 60px;
	font-size: 22px;
	color:#666;
	background: #ececec;
	text-align: center;
}
#price .list-item .item .price{
	height: 98px;
	display: block;
	line-height: 98px;
	color:#666;
	font-size: 37px;
	text-align: center;
}
#price .list-item .item .price i {
	font-size: 17px;
	font-style: normal;
	display: inline-block;
	vertical-align: super;
}
#price .list-item .item .fn-list li {
	line-height: 46px;
	height: 46px;
	border-top:1px #ececec solid;
	text-indent: 30px;
	color:#333;
}
#price .list-item .item .fn-list li i.icon {
	width:20px;
	height: 20px;
	display: inline-block;
	vertical-align: middle;
	margin-left: 12px;
}
#price .list-item .item .fn-list li i.icon.error {
	background: url(../assets/icon-false.png) no-repeat left center;
	background-size:20px 20px;
}
#price .list-item .item .fn-list li i.icon.success {
	background: url(../assets/icon-true.png) no-repeat left center;
	background-size:20px 20px;
}
#price .list-item .item .fn-list li.unique {
	color:#66a0f1;
}
#price .list-item .item .fn-list li.unique .text {
	font-style: normal;
	color:#ed8270;
	margin-left:12px;
}
#price .list-item .item.basis h4 {
	color:#fff;
	background: #eb9e4c;
}
#price .list-item .item.enterprise h4 {
	color:#fff;
	background: #66a0f1;
}
#price .list-item .item.custom h4 {
	color:#fff;
	background: #d8bb48;
}
#price .list-item .item .item-hover {
	position: absolute;
	left:0;
	top:-18px;
	right:0;
	bottom:-70px;
	display: none;
	border:1px #ececec solid;
	border-top:none;
	-webkit-box-shadow:0px 5px 15px #e5e5e5;
	-moz-box-shadow:0px 5px 15px #e5e5e5;
	box-shadow:0px 5px 15px #e5e5e5;
}
#price .list-item .item.free .item-hover {
	bottom:0;
}
#price .list-item .item.basis .item-hover {
	border:1px #eb9e4c solid;
	border-top:none;
}
#price .list-item .item.enterprise .item-hover {
	border:1px #66a0f1 solid;
	border-top:none;
}
#price .list-item .item.custom .item-hover {
	border:1px #d8bb48 solid;
	border-top:none;
}
#price .list-item .item .item-hover h4 {
	height: 78px;
	line-height: 78px;
}
#price .list-item .item .item-hover button {
	height: 35px;
	width:130px;
	border-radius:35px;
	color:#fff;
	font-size: 14px;
	line-height: 35px;
	border:none;
	margin-top:20px;
	background:#ececec;
}
#price .list-item .item.basis .item-hover button {
	background:#eb9e4c;
}
#price .list-item .item.enterprise .item-hover button {
	background:#66a0f1;
}
#price .list-item .item.custom .item-hover button {
	background:#d8bb48;
}
#price .list-item .item .item-hover .btn-box {
	height:69px;
	position: absolute;
	bottom:0;
	right:0;
	left:0;
	background: #fff;
	border-top:1px #ececec solid;
	text-align: center;
}
</style>
