export default {
	getCookie(objName){ //获取指定名称的cookie的值
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++){
			var temp = arrStr[i].split("=");
			if(temp[0] == objName) return unescape(temp[1]);
		} 
	},
	setCookie(objName,objValue,objHours){   //objHours:小时
		var str = objName + "=" + escape(objValue);
		if(objHours > 0){                               //为时不设定过期时间，浏览器关闭时cookie自动消失
			var date = new Date();
			var ms = objHours*3600*1000;
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString();
	   }
	   document.cookie = str;
	},
	delCookie(name){//删除cookie
	   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
	}
}