$(function(){
	var countdown=60;
	$(".js-click").click(function(){
		$(this).hide();
		$(this).next().show();
		time();
	});

function time(){
	var f = setInterval(function(){
	if (countdown !== 0) {
		countdown--;
		$(".js-time").text(countdown + "s后重新获取");
		}
		else {
			$(".js-click").show();
			$(".js-time").hide();
			clearInterval(f);
			$(".js-time").text(60 + "s后重新获取");
			countdown = 60;
			return;
		}
	},1000);
}
})
//点击认证
	$("#submit").click(function(){
		login();
	});

	//全局获取手机号
	function getMobile(){
		var mobile = $.trim($("#telnumber").val());
		return mobile;
	};
    //校验手机号
    function validateMobile(){

        var mobile = getMobile();

        if (mobile == null || mobile == "") {
            alert("请输入手机号");
            return false;
        }

        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

        if (!reg.test(mobile)) {
            alert("手机号码格式不对！");
            $("#telnumber").val("");
            return false;
        }
        return true;
    };
    //校验姓名为空
    function validateName() {
        var agentname = $("#agentname").val();
        if (agentname == null || agentname == ""){
            alert("姓名不能为空");
            return false;
        }
        return true;
    };
    //身份证号校验
    function validateId () {
        var agentid = $("#gentid").val();
        if (agentid == null || agentid == ""){
            alert("身份证不能为空");
            return false;
        }
        var idcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!idcard.test(agentid)){
            alert("身份证不对");
            $("#gentid").val("");
            return false;
        }
        return true;
    };
    //登录
    	function login(){

            if(!validateName()){
    			return;
    		}
            if(!validateId()){
    			return;
    		}
    		if(!validateMobile()){
    			return;
    		}
    		var mobile = getMobile();

    		var code = $("#verifycode").val();


    		if (code == null || code == "") {
    			alert("请输入验证码");
    			return;
    		}
    		if(code.length!=6){
    			alert("请输入正确的验证码");
    			return;
    		}


    	};
