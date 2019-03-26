<template>
  <div id="d-header">
		<button type="button" class="btn btn-none pull-left" @click="back">返回</button>
		<h1>{{title}}</h1>
		<button type="button" class="btn-menu pull-right">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open:false
    }
  },
	props:['title'],
	methods:{
		toSearch(){
			this.$router.push('/search');
		},
		back(){
			this.$router.go(-1);
		}
	}
}
</script>
<style>
#d-header {
	padding:8px 10px;
	display: block;
	height:50px;
	background: #f8f8f8;
	position: relative;
	border-bottom: 1px #e7e7e7 solid;
	display:none;
}
#d-header h1 {
	position: absolute;
	top:8px;
	left:100px;
	right:100px;
	height: 34px;
	line-height:34px;
	font-size: 18px;
	text-align: center;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	color: #777;
	font-weight: normal;
}
#d-header .btn {
	height: 34px;
	color:#333;
}
#d-header .btn.btn-none {
	background: transparent;
	border:none;
}
#d-header .btn-menu {
	background:transparent;
	border:none;
	height: 34px;
	outline:0;
	font-size: 0;
}
#d-header .btn-menu .icon-bar {
	display:inline-block;
	width:5px;
	height:5px;
	border-radius:5px;
	margin-right: 3px;
	background-color: #888;
}
@media screen and (max-width:1200px){
	#header {
		display: none;
	}
	#d-header {
		display: block;
	}
}
</style>
