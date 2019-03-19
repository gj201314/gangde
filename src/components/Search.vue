<template>
  <div id="search">
		<input type="text" v-model.trim="serachVal" placeholder="搜索感兴趣的内容" />
		<button type="button" @click="toSearch">搜索</button>
  </div>
</template>

<script>
export default {
	data () {
		return {
		  serachVal:''
		}
	},
	computed:{
		nickName(){
			return this.$store.state.nickName;
		}
	},
	methods:{
		toSearch(){
			if(this.serachVal!=''){
				this.$router.push({name:'search',params:{search:this.serachVal}});
			}else{
				this.$msg({'msg':'请输入搜索内容','status':'error'});
			};
		}
	}
}
</script>
<style lang="less" scoped>
#search {
	height:60px;
	padding:10px;
	display: none;
	input {
		height:40px;
		width:100%;
		padding:0 10px;
		font-size: 14px;
		display:block;
		vertical-align: bottom;
		margin-right: 10px;
		.flexgrow(1);
	}
	button {
		height:40px;
		width:100px;
		background-color:@dColor;
		border:1px @dColor solid;
		padding:0 25px;
		color:#fff;
		font-size: 14px;
		display:block;
		border-radius: 2px;
	}
}
@media screen and (max-width:1200px){
	#search {
		.flexbox;
	}
}
</style>
