$(function(){
	$(".notice li").hover(function(){
		$(this).find(".noticelist").css({border:'none'});
		$(this).prev("li").find(".noticelist").css({border:"none"});
	},function(){
		$(this).prev("li").find(".noticelist").css({borderBottom: "1px solid #adadad"});
		$(this).find(".noticelist").css({borderBottom: "1px solid #adadad"});
	})
})