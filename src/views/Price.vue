<template>
	<div id="price">
		<t-header></t-header>
		<div class="wrap clearfix main">
			<div class="menubar">
				<span data-num="0" :class="[activeNum==0? 'active':'']" @click="activeNum=0">免费版</span>
				<span data-num="1" :class="[activeNum==1? 'active':'']" @click="activeNum=1">基础版</span>
				<span data-num="2" :class="[activeNum==2? 'active':'']" @click="activeNum=2">企业版</span>
				<span data-num="3" :class="[activeNum==3? 'active':'']" @click="activeNum=3">定制版</span>
			</div>
			<h3 class="list-title">套餐价格</h3>
			<div class="p-item">
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
						<h4>企业版</h4>
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
							<h4>企业版</h4>
							<div class="btn-box">
								<button type="button" class="btn-default">购买</button>
							</div>
						</div>
					</div>
					<div class="item custom">
						<h4>定制版</h4>
						<span class="price"><i>&yen;</i>需协商</span>
						<ul class="fn-list">
							<li>定制化海报模板开发设计</li>
							<li>微信公众号授权及二维码管理</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="m-item">
				<div class="list-item clearfix">
					<div class="item free" v-show="activeNum==0">
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
					</div>
					<div class="item basis" v-show="activeNum==1">
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
							<div class="btn-box">
								<button type="button" class="btn-default">购买</button>
							</div>
						</div>
					</div>
					<div class="item enterprise" v-show="activeNum==2">
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
							<div class="btn-box">
								<button type="button" class="btn-default">购买</button>
							</div>
						</div>
					</div>
					<div class="item custom" v-show="activeNum==3">
						<span class="price"><i>&yen;</i>需协商</span>
						<ul class="fn-list">
							<li>定制化海报模板开发设计</li>
							<li>微信公众号授权及二维码管理</li>
						</ul>
					</div>
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
			activeNum:0
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
<style lang="less" scoped>
#price {
	.main {
		padding: 20px 0;
	}
	.list-title {
		font-size: 35px;
		text-align: center;
		color:#666;
		margin-bottom: 60px;
	}
	.list-item {
		font-size:0;
		display: table;
		width: 100%;
		margin-bottom: 115px;
		-webkit-box-shadow:0px 5px 15px #e5e5e5;
		-moz-box-shadow:0px 5px 15px #e5e5e5;
		box-shadow:0px 5px 15px #e5e5e5;
		.item {
			display: table-cell;
			vertical-align: top;
			position: relative;
			width:25%;
			background: #fff;
			font-size: 14px;
			border:1px #ececec solid;
			border-top:0;
			cursor: pointer;
			.item-hover {
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
				h4 {
					height: 78px;
					line-height: 78px;
				}
				button {
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
				.btn-box {
					height:69px;
					position: absolute;
					bottom:0;
					right:0;
					left:0;
					background: #fff;
					border-top:1px #ececec solid;
					text-align: center;
				}
			}
			&:hover {
				.item-hover {
					display: block;
				}
			}
			h4{
				height: 60px;
				line-height: 60px;
				font-size: 22px;
				color:#666;
				background: #ececec;
				text-align: center;
			}
			.price{
				height: 98px;
				display: block;
				line-height: 98px;
				color:#666;
				font-size: 37px;
				text-align: center;
				i {
					font-size: 17px;
					font-style: normal;
					display: inline-block;
					vertical-align: super;
				}
			}
			.fn-list {
				li {
					line-height: 46px;
					height: 46px;
					border-top:1px #ececec solid;
					text-indent: 30px;
					color:#333;
					i.icon {
						width:20px;
						height: 20px;
						display: inline-block;
						vertical-align: middle;
						margin-left: 12px;
						&.error {
							background: url(../assets/icon-false.png) no-repeat left center;
							background-size:20px 20px;
						}
						&.success {
							background: url(../assets/icon-true.png) no-repeat left center;
							background-size:20px 20px;
						}
					}
					&.unique {
						color:#66a0f1;
						.text {
							font-style: normal;
							color:#ed8270;
							margin-left:12px;
						}
					}
				}
			}
			&.free {
				.item-hover {
					bottom:0;
				}
			}
			&.basis {
				h4 {
					color:#fff;
					background: #eb9e4c;
				}
				.item-hover {
					border:1px #eb9e4c solid;
					border-top:none;
					button {
						background:#eb9e4c;
					}
				}
			}
			&.enterprise {
				h4 {
					color:#fff;
					background: #66a0f1;
				}
				.item-hover {
					border:1px #66a0f1 solid;
					border-top:none;
					button {
						background:#66a0f1;
					}
				}
			}
			&.custom {
				h4 {
					color:#fff;
					background: #d8bb48;
				}
				.item-hover {
					border:1px #d8bb48 solid;
					border-top:none;
					button {
						background:#d8bb48;
					}
				}
			}
		}
	}
	.menubar {
		padding:14px 10px;
		font-size: 0;
		display: none;
		span {
			width:25%;
			height: 35px;
			line-height: 35px;
			font-size: 16px;
			display: inline-block;
			text-align:center;
			&.active {
				background: @dColor;
				color:#fff;
				.borderRadius(8px);
			}
		}
	}
	.p-item {
		display: block
	}
	.m-item {
		display: none;
		.list-item {
			display: block;
			width:auto;
			margin:0 10px;
			.item {
				display:block;
				width:100%;
				border: 1px #ececec solid;
				.fn-list {
					li {
						text-align:center;
						text-indent:0;
					}
				}
				.item-hover {
					position: static;
					border:none;
					display: block;
					.boxShadow(initial);
					.btn-box {
						position: static;
					}
				}
			}
		}
	}
}
@media screen and (max-width:1200px) {
	#price {
		.main {
			min-height: 700px;
		}
		.menubar {
			display: block;
		}
		.list-title {
			display: none;
		}
		.p-item {
			display: none;
		}
		.m-item {
			display: block;
		}
	}
}
</style>
