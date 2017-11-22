
$(function(){
	// 切换
    var tabs = function (tab, con) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('active');
            $(this).addClass('active');
            con.removeClass('active');
            con.eq(index).addClass('active');
        })
    };
    var tabs2 = function (tab) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('active');
            $(this).addClass('active');
        })
    };

    tabs($(".js-tab span"),$(".js-biaodan"));
    tabs2($(".js-num-all2 .js-tab-list2"));
    tabs2($(".js-num-all .js-tab-list"));
    tabs2($(".bank li"));

    // 提现
    var flag = true;
    $(".bank-change-click").click(function(){
        if (flag == true) {
            $(this).next().show();
            $(this).css({borderColor:'#ff9600'});
            flag = false;
        }
        else if (flag == false) {
            $(this).next().hide();
            $(this).css({borderColor:'#bfbfbf'});
            flag = true;
        }
    })

    $(".bank-change li").click(function(){
        var _html = $(this).html();
        $(".bank-change").hide();
        $(".bank-change-click").html(_html);
    })

    // message
    $(".js-tr p").click(function(){
        $(this).parents("tr").next().show();
    })
    $(".js-tr2 img").click(function(){
        $(this).parents(".js-tr2").hide();
    })

})
