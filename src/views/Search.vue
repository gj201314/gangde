<template>
	<div id="search">
		<t-header :search="$route.params.search"></t-header>
		<div class="wrap clearfix main">
			<div class="item-list pull-left">
				<div class="item-box clearfix" v-for="item in items" @click="toDetails(item.id)">
					<div class="item-content pull-left">
						<h5>{{item.title}}</h5>
						<p>{{item.description}}</p>
						<span>阅读量<i>1167</i></span>
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
			<div class="article pull-right">
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
			pageCount:0,
			currentPage:1,
			items:[]
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
<style scoped>
#search {
	background: #fff;
}
#search .main {
	padding: 20px 0;
}
#search .article {
	width:300px;
}
#search .item-list {
	width:800px;
}
#search .item-list .item-box{
	position: relative;
	padding: 27px 10px 27px 0;
	border-bottom:1px #f0f0f0 solid;
}
#search .item-box .item-content {
	padding-right:180px;
}
#search .item-box .item-content h5 {
	font-size: 20px;
	color:#333333;
}
#search .item-box .item-content p {
	padding:10px 0;
	height: 68px;
	line-height: 28px;
	color:#666;
}
#search .item-box .item-content span {
	color:#999;
}
#search .item-box .item-content span i{
	font-style:normal;
	margin-left: 8px;
}
#search .item-box .item-img {
	width:160px;
	height:98px;
	position: absolute;
	right: 10px;
    top: 27px;
	text-align: center;
}
#search .item-box .item-img img{
	max-width:100%;
	max-height:100%;
	display: block;
}
#search .article .focus {
	padding:22px;
	background:#f5f5f6;
	margin-bottom: 32px;
}
#search .article .focus .qrImg {
	width:130px;
	height:130px;
}
#search .article .focus .qrImg img{
	max-width: 100%;
	max-height: 100%;
	display: block;
}
#search .article .focus .qrInfo {
	text-align: right;
	padding-top: 17px;
	padding-right: 10px;
}
#search .article .focus .qrInfo b {
	font-size: 18px;
	display: block;
	color:#333;
	font-weight:500;
	margin-bottom: 10px;
}
#search .article .focus .qrInfo i {
	font-style:normal;
	font-size: 16px;
	font-weight: 500;
	padding-bottom: 7px;
	color:#999;
	border-bottom: 1px #999 solid;
}
#search .article h5.article-title {
	color:#222;
	font-size: 18px;
	padding-left: 17px;
	font-weight: 500;
	position: relative;
}
#search .article h5.article-title:after {
	content: '';
	position: absolute;
	top:5px;
	left:0;
	width:6px;
	border-radius:3px;
	background:#d8bb48;
	height: 14px;
}
#search .article .article-list {
	padding-left: 17px;
}
#search .article .article-list li {
	height: 34px;
	line-height: 34px;
	width:100%;
	overflow: hidden;
}
.pagination-box {
	margin-top:30px;
}
.pagination {
	font-size: 0;
	text-align: center;
	margin-bottom: 20px;
}
.pagination span {
	padding:0 10px;
	height:20px;
	line-height:20px;
	font-size: 14px;
    color: rgba(0,0,0,0.65);sss
	display: inline-block;
	border-radius: 4px;
	cursor: pointer;
}
.pagination span.active {
	color:#fff;
	background: rgb(24, 144, 255);
}
.pagination .prev,.pagination .next {
	padding:0 10px;
	height:18px;
	line-height: 18px;
	font-size: 14px;
	color:rgba(0, 0, 0,1);
	display: inline-block;
} 
.pagination .prev.prohibit,.pagination .next.prohibit {
	color:rgba(0, 0, 0,0.65);
}
/* @media screen and (max-width:980px) {
	.result {
		width:100%;
		margin-left: 0;
		padding: 10px;
	}
} */
</style>
