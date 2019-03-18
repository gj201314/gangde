<template>
  <div id="search">
		<input type="text" placeholder="搜索感兴趣的内容" />
		<button type="button" @click="toSearch">搜索</button>
  </div>
</template>

<script>
export default {
	data () {
		return {
		  
		}
	},
	computed:{
		nickName(){
			return this.$store.state.nickName;
		}
	},
	methods:{
		toSearch(){
			this.$router.push('/search');
		}
	}
}
</script>
<style lang="less" scoped>
#search {
	height:60px;
	padding:10px;
	display: none;
}
#search input {
	height:40px;
	width:100%;
	font-size: 14px;
	display:block;
	vertical-align: bottom;
	margin-right: 10px;
	.flexgrow(1);
}
#search button {
	height:40px;
	width:100px;
	background-color: rgb(86, 119, 252);
	border:1px rgb(86, 119, 252) solid;
	padding:0 25px;
	color:#fff;
	font-size: 14px;
	display:block;
	border-radius: 2px;
}
@media screen and (max-width:980px){
	#search {
		.flexbox;
	}
}
</style>
