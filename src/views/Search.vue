<template>
	<div id="search">
		<t-header :search="$route.params.search"></t-header>
		<d-header :title="'搜索:'+$route.params.search"></d-header>
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
						<div class="prev" @click="pagePrev"><</div>
						<span v-for="n in maxNum" :class="{'active':(num+n)==currentPage}" @click="updateCurrentPage(num+n)">{{num+n}}</span>
						<div class="next prohibit" @click="pageNext">></div>
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
					<li v-for="(value, key) in article">
						<router-link :to="'/details/'+key">{{value}}</router-link>
					</li>
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
			items:[],
			article:{},
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
	watch:{
		$route(to,form){
			console.log('第二次搜索') //to,form
			this.init();
		}
	},
	mounted(){
		this.init();
	},
	methods:{
		init(){
			axios.all([this.archiveSearch(), this.archivesAbout()])
			.then(axios.spread((search, about)=>{
				this.$store.commit('switchPageLoading',false);
				// 两个请求现在都执行完成
				console.log(search,about)
				let aboutRes = about.data;
				if(aboutRes.code==0){
					this.$msg({'msg':aboutRes.msg,'status':'error'});
				}else{
					this.article = aboutRes.data.Archives;
				};
				this.searchCallback(search);
			})).catch((error)=>{
				this.$store.commit('switchPageLoading',false);
				console.log(error)
			});
		},
		archiveSearch(type){
			let search = axios.get('/api/archives/search',{
				params:{'search':this.$route.params.search,'page':this.currentPage}
			});
			if(type=='update'){
				search.then((response)=>{
					this.searchCallback(response);
				}).catch((error)=>{
					console.log(error);
				});
			}
			return search;
		},
		searchCallback(response){
			let res = response.data;
			if(res.code==0){
				this.$msg({'msg':res.msg,'status':'error'});
			}else{
				this.items = res.data.Archives;
				this.pageCount = Math.ceil(res.data.total/this.limit);
			};
		},
		archivesAbout(type){
			return axios.get('/api/Archives/about/47');
		},
		pagePrev(){
			if(this.currentPage>1){
				--this.currentPage;
				this.archiveSearch('update');
			}else{
				console.log('第一页')
			};
		},
		pageNext(){
			if(this.currentPage<this.pageCount){
				++this.currentPage;
				this.archiveSearch('update');
			}else{
				console.log('最后一页')
			};
		},
		updateCurrentPage(num){
			this.currentPage=num;
			this.archiveSearch('update');
		},
		toDetails(id){
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
			padding:14px 10px;
			.focus {
				display: none;
			}
		}
		.item-list {
			.item-box {
				padding:14px 10px;
				.item-content {
					padding-right: 100px;
					h5 {
						font-size: 16px;
						height: 50px;
						line-height: 25px;
						overflow: hidden;
						width:100%;
					}
					span {
						font-size: 12px;
					}
				}
				.item-img {
					width:100px;
					top:14px;
					bottom:14px;
				}
			}
		}
	}
}
</style>
