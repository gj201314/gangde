<template>
	<div id="home">
		<div id="home-top">
			<t-header class="home-header"></t-header>
			<div class="banner-box">
				<swiper :options="banOption" class="p-img p-swiper">
					<swiper-slide v-for="text in banText" class="item">
						<a href="#" target="_blank"><div class="item-title">{{text.title}}</div></a>
						<a href="#" target="_blank"><div class="item-subTitle">{{text.subTitle}}</div></a>
					</swiper-slide>
					<div class="swiper-button-prev ban-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next ban-button-next" slot="button-next"></div>
					<div class="swiper-pagination ban-pagination" slot="pagination"></div>
				</swiper>
				<swiper :options="banOption2" class="m-img">
					<swiper-slide v-for="imgSrc in banImg2" class="item">
						<img :src="'../../static/m-'+imgSrc" alt="">
					</swiper-slide>
					<!-- <div class="swiper-pagination ban-pagination2" slot="pagination"></div> -->
				</swiper>
				<div class="m-regBtn">
					<router-link to="/reg">免费注册</router-link>
				</div>
			</div>
		</div>
		<div class="wrap">
			<div class="advantage">
				<div class="content-title"><img src="../assets/youshi.png" alt="产品优势" title="产品优势"></div>
				<div class="item-list clearfix">
					<div class="item">
						<div class="item-section">
							<div class="m-item-l">
								<div class="item-icon">
									<img src="../assets/icon-yliu-p.png" class="p-img" alt="">
									<img src="../assets/icon-yliu-m.png" class="m-img" alt="">
								</div>
								<h5>独创新抓粉模式</h5>
								<span class="icon-bar"></span>
							</div>
							<div class="m-item-r">
								<b>在纲得平台发布内容时</b>
								<p>PC流量不浪费，纲得平台独创 PC SEM搜索引擎为公众号抓粉新方式；借助高质量内容和搜索引擎优化，让PC流量导流至 微信公众号。</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item-section">
							<div class="m-item-l">
								<div class="item-icon">
									<img src="../assets/icon-push-p.png" class="p-img" alt="">
									<img src="../assets/icon-push-m.png" class="m-img" alt="">
								</div>
								<h5>优质内容获取新手法</h5>
								<span class="icon-bar"></span>
							</div>
							<div class="m-item-r">
								<b>在纲得平台发布内容时</b>
								<p>借助白皮书引言导读，快速生成 留资注册页，通过优质内容下载，快速获客！</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item-section">
							<div class="m-item-l">
								<div class="item-icon">
									<img src="../assets/icon-hbao-p.png" class="p-img" alt="">
									<img src="../assets/icon-hbao-m.png" class="m-img" alt="">
								</div>
								<h5>内容海报一键生成</h5>
								<span class="icon-bar"></span>
							</div>
							<div class="m-item-r">
								<b>在纲得平台发布内容时</b>
								<p>将纲得平台的内容，一键生成文并茂的海报，并支持分享到朋友圈等多个渠道。海报上附带的 二维码也可以实现引流功能。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="introduce">
			<img src="../../static/3.png" alt="" class="p-img">
			<img src="../../static/m-3.png" alt="" class="m-img">
		</div>
		<div class="wrap">
			<div class="ganders">
				<div class="content-title"><img src="../assets/hezuo.png" alt="合作伙伴" title="合作伙伴"></div>
				<div class="item-list clearfix">
					<div class="f-item item">
						<img src="../../static/logo-ym.png" alt="友盟">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-ty.png" alt="听云">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-tx.png" alt="腾讯云">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-lxy.png" alt="联想云">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-lagou.png" alt="拉勾">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-jpush.png" alt="jpush">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-360.png" alt="360">
					</div>
					<div class="f-item item">
						<img src="../../static/logo-zfpt.png" alt="zfpt">
					</div>
				</div>
			</div>
		</div>
		<div class="regBtn-box">
			<router-link to="/reg">免费注册</router-link>
		</div>
	</div>
</template>

<script>
import search from '@/components/Search'

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data(){
		return {
			flag:false,
			banText:[
				{
					'title':'一站式内容获客平台，帮你找到读者',
					'subTitle':'一键生成内容海报，朋友圈抓粉来得轻松！',
				},
				{
					'title':'公众号小编常用的工具平台',
					'subTitle':'谁说公众号阅读数据无法获取，纲得来帮你！',
				},
				{
					'title':'5.24 通汉教你，如何内容获客',
					'subTitle':'纲得CEO通汉分享：社交内容获客三步走，你一定要知道！',
				}
			],
			banImg2:['banner-img1.png'],
			banOption:{
				loop:true,
				pagination: {
					el: '.ban-pagination',
					clickable: true
				},
				navigation:{
					nextEl: '.ban-button-next',
					prevEl: '.ban-button-prev'
				}
			},
			banOption2:{
				loop:true,
				pagination: {
					el: '.ban-pagination2',
					clickable: true
				}
			}
		}
	},
	components:{
		search,
		swiper,
		swiperSlide
	},
	mounted(){
		setTimeout(()=>{
			this.$store.commit('switchPageLoading',false);
		},500)
	},
	methods:{
		
	}
}
</script>
<style lang="less">
	.p-swiper {
		.ban-pagination {
			.swiper-pagination-bullet {
				width:3px;
				height:3px;
				.borderRadius(3px);
				background: #e5e5e4;
				opacity:1;
				transition: all 0.3s;
				-webkit-transition: all 0.3s;
				-moz-transition: all 0.3s;
				-ms-transition: all 0.3s;
			}
			.swiper-pagination-bullet-active {
				width:68px;
			}
		}
	}
</style>
<style lang="less" scoped>
#home {
	background: #f5f5f5;
}
.banner-box {
	.ban-pagination {
		span.swiper-pagination-bullet {
			width:7px;
			height:7px;
			border-radius:7px;
			background:#e5e5e4;
			opacity: 1;
			margin-right:12px;
			transition: width 0.5s;
		}
		span.swiper-pagination-bullet-active {
			width:65px;
			border-radius:7px;
		}
	}
	.ban-button-next {
		position: absolute;
		right:0;
		width:74px;
		height:36px;
		margin-top: -18px;
		background: url(../assets/next.png) no-repeat;
		background-size:74px 36px;
	}
	.ban-button-prev {
		position: absolute;
		left:0;
		width:74px;
		height:36px;
		margin-top: -18px;
		background: url(../assets/previous.png) no-repeat;
		background-size:74px 36px;
	}
}
#home-top {
	position: relative;
	.banner-box {
		position:relative;
		img{
			width:100%;
		}
		.m-regBtn {
			position: absolute;
			left:26%;
			right:26%;
			bottom:22px;
			z-index: 1;
			display: none;
			a {
				height:45px;
				background:#efc935;
				line-height:45px;
				width:100%;
				color:#584704;
				font-size:18px;
				display: block;
				text-align: center;
				.borderRadius(50px)
			}
		}
		.p-swiper {
			.item {
				height:590px;
				padding-top:260px;
				background-image: url(../../static/banner-img1.jpg);
				background-size:cover;
				-webkit-background-size:cover;
				-moz-background-size:cover;
				background-repeat: no-repeat;
				background-position: center center;
				position: relative;
				color:#fff;
				.item-title {
					width:70%;
					font-size:55px;
					line-height:70px;
					text-align:center;
					margin:0 auto;
					color:#e1e3e5;
				}
				.item-subTitle {
					width:70%;
					color:#cacbcd;
					font-size:22px;
					line-height:40px;
					text-align:center;
					margin:0 auto;
				}
			}
		}
		.p-img {
			display: block;
		}
		.m-img {
			display: none;
		}
	}
}
.regBtn-box {
	padding:34px 0;
	background:#fff;
	display:none;
	a {
		height:45px;
		background:#efc935;
		line-height:45px;
		width:48%;
		margin:0 auto;
		color:#584704;
		font-size:18px;
		display: block;
		text-align: center;
		.borderRadius(50px)
	}
}
.content-title {
	text-align: center;
	padding-top: 66px;
	img{
		height: 49px;
		display:inline-block;
		width:auto;
		vertical-align: middle;
	}
}
.advantage {
	margin-bottom:80px;
	.item-list {
		padding:60px 38px 0;
	}
	.item {
		float: left;
		width: 324px;
		height: 325px;
		font-size: 14px;
		border: 1px #e1e1e1 solid;
		text-align: center;
		border-radius:0 25px 0 25px;
		transition: border-color 0.3s;
		-moz-transition: border-color 0.3s;
		-webkit-transition: border-color 0.3s;
		-ms-transition: border-color 0.3s;
		cursor: pointer;
		.item-icon {
			padding-top:36px;
			img {
				width:100px;
				max-height:100px;
			}
		}
		h5 {
			padding-top:20px;
			font-weight: 500;
			font-size:20px;
			color:#333;
		}
		.item-section {
			background: #fff;
			width:100%;
			height:100%;
			transition: transform 0.3s;
			-moz-transition: transform 0.3s;
			-webkit-transition: transform 0.3s;
			-ms-transition: transform 0.3s;
		}
		.icon-bar {
			display: block;
			margin:12px auto 0;
			width:40px;
			height:3px;
			background: @dColor;
			border-radius:3px;
			transition: width 0.3s;
			-moz-transition: width 0.3s;
			-webkit-transition: width 0.3s;
			-ms-transition: width 0.3s;
		}
		&:nth-child(2n) {
			margin-left:75px;
			margin-right:75px;
		}
		&:hover {
			border-radius:0;
			overflow: hidden;
			border-color:@dColor;
			.item-section {
				transform: scale(1.05);
				-webkit-transform: scale(1.05);
				-moz-transform: scale(1.05);
				-ms-transform: scale(1.05);
			}
			.icon-bar{
				width:80px;
			}
		}
		.m-item-r {
			b {
				display: none;
			}
		}
		p {
			width:74%;
			margin:20px auto 0;
			font-size: 14px;
			color:#666;
			line-height:22px;
		}
	}
}
.introduce {
	margin-bottom: 20px;
	img {
		width:100%;
	}
}
.p-img {
	display: inline-block;
}
.m-img {
	display: none;
}
.ganders {
	padding-bottom: 70px;
	.item-list {
		padding-top:30px;
		.f-item {
			float: left;
			width:285px;
			margin-top: 30px;
			margin-right:20px;
			&:nth-child(4n){
				margin-right:0;
			}
		}
		.item {
			img {
				width:100%;
				display: block;
			}
		}
	}
}
.use {
	a{
		width: 149px;
	  height: 51px;
		line-height: 51px;
		text-align: center;
		display: block;
		margin:0 auto;
		background-color: rgb(242, 107, 107);
		font-size: 14px;
		color:#fff;
	}
}
@media screen and (max-width:1200px) {
	#home-top {
		.banner-box{
			.m-img {
				display: block;
			}
			.p-img {
				display: none;
			}
			.swiper-container {
				width:100%;
				.ban-pagination {
					display: none;
				}
				.ban-button-next,.ban-button-prev {
					display: none;
				}
			}
			.m-regBtn {
				display: block;
			}
		}
	}
	.content-title {
		padding-top: 20px;
		img {
			width:24%;
			height: auto;
		}
	}
	.advantage {
		margin-bottom:22px;
		.item-list {
			padding:0;
			margin-top:35px;
			.item {
				float: none;
				display: block;
				border:none;
				margin:0;
				margin-bottom:13px;
				width:100%;
				text-align: initial;
				height:auto;
				overflow: initial;
				&:last-child {
					margin:0;
				}
				.item-section {
					.flexbox;
					.justifyContent;
					padding:2rem 0;
					&:hover {
						transform:initial;
						-webkit-transform:initial;
						-moz-transform:initial;
						-ms-transform:initial;
					}
					.m-item-l {
						width:31%;
						margin-right:3%;
						text-align: center;
						h5 {
							font-size:3.6rem;
						}
						.icon-bar {
							display:none;
						}
						.item-icon {
							width:100%;
							margin:0 auto;
							padding-top:0;
							img {
								width:58%;
								max-height:100%;
								height:auto;
								display: block;
							}
							.p-img {
								display: none;
							}
							.m-img {
								display: inline-block;
							}
						}
						span {
							width:70px !important;
						}
					}
					.m-item-r {
						width:55%;
						b {
							display: block;
							font-size:5rem;
							color:#333;
							font-weight: normal;
							display:none;
						}
						p {
							margin:0;
							width:100%;
							font-size:2.7rem;
							color:#666;
							line-height:2;
						}
					}
				}
			}
		}
	}
	.introduce {
		.p-img {
			display: none;
		}
		.m-img {
			display: block;
		}
	}
	.ganders {
		margin-bottom: 10px;
		.item-list {
			.f-item {
				margin:0 0 10px 0;
				width:33.333%;
				padding:0 2%;
			}
		}
	}
	.introduce {
		margin-bottom:0px;
	}
	.regBtn-box {
		display: block;
	}
}
</style>
