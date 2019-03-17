<template>
	<div id="home">
		<div id="home-top">
			<t-header class="home-header"></t-header>
			<div class="banner-box">
				<swiper :options="banOption">
					<swiper-slide v-for="imgSrc in banImg" class="item">
						<img :src="'../../static/'+imgSrc" alt="">
					</swiper-slide>
					<div class="swiper-button-prev ban-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next ban-button-next" slot="button-next"></div>
					<div class="swiper-pagination ban-pagination" slot="pagination"></div>
				</swiper>
			</div>
		</div>
		<div class="wrap">
			<div class="advantage">
				<h3 class="content-title"><img src="../assets/youshi.png" alt="产品优势" title="产品优势"></h3>
				<div class="item-list clearfix">
					<div class="item">
						<div class="item-section">
								<div class="item-icon">
									<img src="../assets/icon-yliu.png" alt="">
								</div>
								<h5>独创引流模式</h5>
								<span class="icon-bar"></span>
								<p>将你的优质内容发布到纲得平台后，用户通过百度等搜索引擎，可以阅读部内容，剩余内容需关注公众号才能获得而实现从搜索引擎到微信公众号的引流。</p>
						</div>
						</div>
					<div class="item">
						<div class="item-section">
							<div class="item-icon">
								<img src="../assets/icon-push.png" alt="">
							</div>
							<h5>灵活发布内容</h5>
							<span class="icon-bar"></span>
							<p>在纲得平台发布内容时， 可以通选择内容类型，实现引流到微信公号，还是获取客户的姓名、手机号等信息。</p>
						</div>
					</div>
					<div class="item">
						<div class="item-section">
							<div class="item-icon">
								<img src="../assets/icon-hbao.png" alt="">
							</div>
							<h5>一键生成海报</h5>
							<span class="icon-bar"></span>
							<p>将纲得平台的内容，一键生成文并茂的海报，并支持分享到朋友圈等多个渠道。海报上附带的 二维码也可以实现引流功能。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="introduce">
			<img src="../../static/3.png" alt="">
		</div>
		<div class="wrap">
			<div class="ganders">
				<h3 class="content-title">
					<img src="../assets/hezuo.png" alt="合作伙伴" title="合作伙伴">
				</h3>
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
		<b-footer></b-footer>
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
			banImg:['banner-img1.png'],
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
<style>
#home {
	background: #f5f5f5;
}
.banner-box .ban-pagination span.swiper-pagination-bullet {
	width:7px;
	height:7px;
	border-radius:7px;
	background:#e5e5e4;
	opacity: 1;
	margin-right:12px;
	transition: width 0.5s;
}
.banner-box .ban-pagination span.swiper-pagination-bullet-active {
	width:65px;
	border-radius:7px;
}
.banner-box .ban-button-next {
	position: absolute;
	right:0;
	width:74px;
	height:36px;
	margin-top: -18px;
	background: url(../assets/next.png) no-repeat;
	background-size:74px 36px;
}
.banner-box .ban-button-prev {
	position: absolute;
	left:0;
	width:74px;
	height:36px;
	margin-top: -18px;
	background: url(../assets/previous.png) no-repeat;
	background-size:74px 36px;
}
</style>
<style scoped>
#home-top {
	position: relative;
}
#home-top .banner-box img{
	width:100%;
	display: block;
}
h3.content-title {
	text-align: center;
	padding-top: 66px;
}
h3.content-title img{
	height: 62px;
	display:inline-block;
	width:auto;
}
.advantage {
	margin-bottom:80px;
}
.advantage .item-list {
	padding:60px 38px 0;
}
.advantage .item {
	float: left;
	width: 324px;
	height: 325px;
	font-size: 14px;
	border: 1px #e1e1e1 solid;
	text-align: center;
	border-radius:0 25px 0 25px;
}
.advantage .item .item-section {
	background: #fff;
	width:100%;
	height:100%;
}
.advantage .item:nth-child(2n) {
	margin-left:75px;
	margin-right:75px;
}
.advantage .item .item-icon {
	padding-top:36px;
}
.advantage .item h5 {
	padding-top:20px;
	font-weight: 500;
	font-size:20px;
	color:#333;
}
.advantage .item .icon-bar {
	display: block;
	margin:12px auto 0;
	width:40px;
	height:3px;
	background: #e3c653;
	border-radius:3px;
}
.advantage .item p {
	width:74%;
	margin:20px auto 0;
	font-size: 14px;
  color:#666;
	line-height:22px;
}
.advantage .item:nth-child(2n){
	border-radius:0;
	border-color:#e3c653;
}
.advantage .item:nth-child(2n) .icon-bar{
	width:80px;
}
.introduce {
	margin-bottom: 20px;
}
.introduce img {
	width:100%;
	display: block;
}
.ganders {
	margin-bottom: 70px;
}
.ganders .item-list {
	padding-top:30px;
}
.ganders .item-list .f-item {
	float: left;
	width:285px;
	margin-top: 30px;
	margin-right:20px;
}
.ganders .item-list .f-item:nth-child(4n){
	margin-right:0;
}
.ganders .item-list .item img {
	width:100%;
	display: block;
}
.use a{
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
/* @media screen and (max-width:980px) {
	.banner {
		height:208px;
	}
	.banner .info {
		top:50%;
		left:50%;
		margin-left: -123px;
		margin-top: -75px;
	}
	.advantage .item h5 {
		height: auto;
		line-height: initial;
		margin-bottom: 30px;
	}
	.advantage .item {
		margin: 0;
		width:100%;
		padding:22px 35px;
		height: auto;
		margin-bottom: 10px;
	}
	.introduce {
		padding:35px 22px;
	}
	.introduce h3 {
		margin-bottom: 40px;
	}
	.introduce p {
		line-height:20px;
		height: auto;
	}
	.ganders .item-list .swiper-box {
		display: block;
	}
	.ganders .item-list .f-item {
		display: none;
	}
} */
</style>
