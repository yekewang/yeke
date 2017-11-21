$(function(){
	$(".js-tab-all").click(function(){
		$(".js-num-all").find("span").show();
		$(this).hide();
	})

$('li').each(function(index, item){
    var li = $(item);
    if( index % 3 === 0 ){
        li.css('margin', 0);
    }
});

	$(".js-tab-hide").click(function(){
		$(".js-tab-all").show();
		$(this).hide();
		var li = $(".js-num-all .js-tab-list");
		li.each(function(){
			var num = li.index(this);
			if ( num > 4) {
				$(this).hide();
			}
		})
	})
})