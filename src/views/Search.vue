<template>
	<div id="search">
		<t-header :search="$route.params.search"></t-header>
		<div class="wrap clearfix main">
			<div class="item-list pull-left">
				<div class="item-box clearfix" v-for="item in items" @click="toDetails(item.id)">
					<div class="item-content pull-left">
						<h5>{{item.title}}</h5>
						<p>{{item.description}}</p>
						<span>阅读量<i>{{item.views}}</i></span>
					</div>
					<div class="item-img pull-right">
						<img :src="item.image" alt="">
					</div>
				</div>
				<div class="pagination-box">
					<div class="pagination" v-if="pageCount>1">
						<div class="prev"><</div>
						<span v-for="n in maxNum" :class="{'active':(num+n)==currentPage}" @click="updateCurrentPage(num+n)">{{num+n}}</span>
						<div class="next prohibit">></div>
					</div>
				</div>
			</div>
			<div class="articleQr pull-right">
				<div class="focus clearfix">
					<div class="qrImg pull-left">
						<img src="../../static/qr-img.png" alt="二维码">
					</div>
					<div class="qrInfo pull-right">
						<b>关注公众号</b>
						<b>阅读全文</b>
						<i>GAnders</i>
					</div>
				</div>
				<h5 class="article-title">相关文章</h5>
				<ul class="article-list">
					<li>没文化，真可怕啊啊啊啊啊啊</li>
				</ul>
			</div>
		</div>
		<b-footer></b-footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
			pageCount:1,
			currentPage:1,
			items:[{"id":25,"user_id":1,"channel_id":3,"model_id":1,"title":"谷歌开源 iOS 自动测试框架 GTXiLib，主打无障碍使用","flag":"","image":"https:\/\/cdn.fastadmin.net\/uploads\/20180416\/5ad441196ddc60.png","keywords":"","description":"最近 Google 在帮助开发者提升 App 可用性上可谓是动作频频，不只发布了无障碍技术指导方案，成立无障碍支援团队，近日还在博客上宣布开源 iOS 专用的自动化测试框架 GTXiLib ，以帮助开发者打造无障碍 App 。","tags":"Google,互联网","weigh":25,"views":7,"comments":0,"likes":0,"dislikes":0,"diyname":"","createtime":1523754040,"updatetime":1523878710,"publishtime":1523721600,"deletetime":null,"memo":"","status":"normal","group_id":0,"type":0,"downloadLink":"","qrImg":"","customBtn":"","url":"\/cms\/a\/25.html","fullurl":"http:\/\/192.168.33.30:8093\/cms\/a\/25.html","likeratio":50,"tagslist":[{"name":"Google","url":"\/cms\/t\/Google.html"},{"name":"互联网","url":"\/cms\/t\/互联网.html"}],"create_date":"11 months ago"}],
			limit:10
		}
	},
	computed:{
		num(){
			let num = 0;
			if(this.currentPage>=(this.pageCount-2)){
				num = this.pageCount-5;
			}else{
				num = this.currentPage-3<0? 0:this.currentPage-3;
			};
			return num;
		},
		maxNum(){
			let num=5;
			if(this.pageCount<num){
				num = this.pageCount;
			};
			return num;
		}
	},
	mounted(){
		this.$axios({
			method:'get',
			url:'/archives/search',
			params:{'search':this.$route.params.search}
		}).then((response)=>{
			let res = response.data;
			if(res.code==0){
				this.$msg({'msg':res.msg,'status':'error'});
			}else{
				this.$msg('查询成功');
				this.items = res.data.Archives;
				this.pageCount = Math.ceil(res.data.total/this.limit);
			};
		}).catch((error)=>{
			console.log(error);
		});
	},
	methods:{
		updateCurrentPage(num){
			this.currentPage=num;
		},
		toDetails(id=25){
			this.$router.push({name:'details',params:{id:id}});
		}
	}
}
</script>
<style lang="less" scoped>
#search {
	background: #fff;
	.main {
		min-height: 800px;
		padding: 20px 0;
	}
	.item-list {
		width:800px;
		.item-box{
			position: relative;
			padding: 27px 10px 27px 0;
			border-bottom:1px #f0f0f0 solid;
			.item-content {
				padding-right:180px;
				h5 {
					font-size: 20px;
					color:#333333;
				}
				p {
					padding:10px 0;
					height: 68px;
					line-height: 28px;
					overflow: hidden;
					color:#666;
				}
				span {
					color:#999;
					i{
						font-style:normal;
						margin-left: 8px;
					}
				}
			}
			.item-img {
				width:160px;
				height:98px;
				position: absolute;
				right: 10px;
			    top: 27px;
				text-align: center;
				img{
					max-width:100%;
					max-height:100%;
					display: inline-block;
				}
			}
		}
	}
}
.pagination-box {
	margin-top:30px;
}
.pagination {
	font-size: 0;
	text-align: center;
	margin-bottom: 20px;
	span {
		padding:0 10px;
		height:20px;
		line-height:20px;
		font-size: 14px;
	    color: rgba(0,0,0,0.65);sss
		display: inline-block;
		border-radius: 4px;
		cursor: pointer;
		&.active {
			color:#fff;
			background: rgb(24, 144, 255);
		}
	}
	.prev,.next {
		padding:0 10px;
		height:18px;
		line-height: 18px;
		font-size: 14px;
		color:rgba(0, 0, 0,1);
		display: inline-block;
	}
	.prev.prohibit,.next.prohibit {
		color:rgba(0, 0, 0,0.65);
	}
}
@media screen and (max-width:1200px) {
	#search {
		.item-list,.articleQr {
			float:none;
			width:100%;
		}
		.articleQr {
			.focus {
				display: none;
			}
		}
	}
}
</style>
