$(function(){
	$(".setcont .reset").click(function(){
		$(this).siblings(".unset").css("display","none");
		$(this).siblings(".reset-input").css("display","block");
	});
	$(".reset-input").blur(function(){
		var values = $(this).val();
		if (values == "") {
			alert("重置不能为空");
		}else {
			$(this).hide();
			$(this).siblings(".unset").css("display","block");
			$(this).siblings(".unset").html(values);
		}
	});
})
