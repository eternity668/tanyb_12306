var oldRandCodeValue=null;
var __captcha_reload_fun = function(){
	var currentCookie = $.cookie("current_captcha_type")
	if(currentCookie&&currentCookie==="Z"){
		location.reload(true);
	}else{
		//console.log('cookie is correct');
	}
}
/**
 * 刷新验证码 登录状态下的验证码传入”randp“，非登录传入”sjrand“ 具体参看原otsweb中的传入参数
 */
refreshImg = function(module,place,randCodeId) {
    
    var sourcerandCodeId= randCodeId;
    var imgCheckId="img-check";
	if ("undefined"==typeof(randCodeId)){
	   randCodeId="img_rand_code";
	}else{
	   randCodeId = "img_rand_code_"+randCodeId;
		//imgCheckId="img-check2";
	   imgCheckId="img-check_"+sourcerandCodeId;
	}
	oldRandCodeValue='';
	var randCodeImg = document.getElementById(randCodeId);
	if(randCodeImg){
		randCodeImg.onload?void(0):randCodeImg.onload=__captcha_reload_fun;
	    randCodeImg.src= ctx + "passcodeNew/getPassCodeNew?module="+module+"&rand=" + place + '&' + Math.random();
	}
	
	var $span=$('#i-okmypasscode1');
	if($span[0]){
		$span.hide();
	}
	var html = $("#"+imgCheckId).html();
	$("#"+imgCheckId).prev().val("");
//	$("#randCode_validate").val("");
	$("#"+imgCheckId).html(html);
	try{
		//$("#i-ok").hide();
		//if($("#i-ok2")[0]){
			//$("#i-ok2").hide();
		//}
		$("#randCode").val("");
		
		$("#randCode").removeClass("error");
		if($("#randCode2")[0]){
			$("#randCode2").val("");
		}
	}catch(e){}
};

checkRandCode = function(obj){
	var check=false;
	var randCode=obj.value;
	var randCode_validate_obj=obj.nextSibling;
	var randCode_validate=randCode_validate_obj.value;
	
	var targetdiv = $(obj).data("targetdiv");
	var rand = "sjrand";
	var code_type = $("#"+targetdiv).data("code_type");
	if("passenger"==code_type){
		rand = "randp";
	}
	$.ajax({
		url : ctx + "passcodeNew/checkRandCodeAnsyn",
		type : "post",
		data : {
			"randCode" : randCode,
			"rand":	rand,
			"randCode_validate":randCode_validate
		},
		async : false,
		success : function(response){
			if(response&&response.data&&response.data.result == "1"){
			    check =  true;
			    showSuc(obj);
			    showError(obj).hide();
			    var scallback = $("#"+targetdiv).data("sucess-callback");
			    //console.log(scallback);
			    //console.log(window[scallback]);
			    if(typeof(window[scallback])==='function'){
					window[scallback]();
			    }
			 }else{
			     check =  false;
			     showSuc(obj).hide();
			     if(response&&response.data&&response.data.msg){
			     	showError(obj,login_messages[response.data.msg]);	
			     }else{
			     	showError(obj,login_messages["randCodeError"]);
			     }
			     //console.log("fileCallback"+failCallback);
			     failCallback();
			 }
			oldRandCodeValue = randCode;
		}
	});
	return check;
};
verifyRandCode = function(obj,isOk){
   	var randCode = obj.value;
   	var targetdiv = $(obj).data("targetdiv");
	var check=true;
	if(!randCode){
		showSuc(obj).hide();
		showError(obj,login_messages['randCodeEmpty']);
		return false;
	}
	if(randCode.length!=4){
		showSuc(obj).hide();
		showError(obj,login_messages['randCodeLentgh']);
		return false;
	}
	var tel = /^[a-zA-Z0-9]+$/;
	if(!tel.test(randCode)){
		showSuc(obj).hide();
		showError(obj,login_messages['randCodeFormat']);
		return false;
	}
	if(!checkRandCode(obj)){
		return false;
	}
	return check;
};
function showError(obj,msg){
	var targetdiv = $(obj).data("targetdiv");
   	var error_msg = $("#error_msg"+targetdiv);
   	//console.log("msg:"+msg);
   	if(msg){
   		error_msg.html(msg).show();
   	}
   	
   	return error_msg;
}
function showSuc(obj){
	var targetdiv = $(obj).data("targetdiv");
	var i_ok =$("#i-ok"+targetdiv);
	i_ok.css({'display':'inline-block'})
	return i_ok;
}
if(typeof(sucessCallback)!=="function"){
	sucessCallback = function(){
	
	};
}

if(typeof(failCallback)!=="function"){
	failCallback = function(){
	
	};
}

$(document).ready(function() {
	
	$("input[id^=randCode]").on("keyup",function(){
	   if(oldRandCodeValue==this.value){
		   return;
	   }
	   showSuc(this).hide();
	   if(this.value&&this.value.length===4){
	   		showError(this).hide();
	       	verifyRandCode(this,true);
	   }
	}).focus(function(){
		//showError(this).hide();
		this.value = '';
	});	
	/**
	  var keyboard = ["keypress","keyup","keydown"];
	  var mouse = ["blur"];
	  var events = keyboard.concat(mouse).join(" ");
	  $("input[id^=randCode]").bind(events,function(e){
	      var d = new Date().toLocaleString();
	  	var type = e.type;
	  	var data = {};
	  	if($.inArray(type,keyboard)) {
	  		data.keyCode = e.keyCode;
	  	}
	  	if($.inArray(type,mouse)) {
	  		data.screenX = e.screenX;
	  		data.screenY = e.screenY;
	  	}
	  	var obj = this.nextSibling;
	  	var value = obj.value;
	        value = value+" "+d+" "+type+" "+JSON.stringify(data);
	        obj.value = value;
	    });**/
});
	