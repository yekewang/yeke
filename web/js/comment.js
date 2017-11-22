
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
    var tabs3 = function (tab, con) {
        tab.click(function () {
            var index = tab.index(this);
            tab.removeClass('colorblue');
            $(this).addClass('colorblue');
            // $(".active-blue").css("left","145px");
            con.removeClass('active');
            con.eq(index).addClass('active');
        })
    };

    tabs($(".js-tab span"),$(".js-biaodan"));
    tabs2($(".js-num-all2 .js-tab-list2"));
    tabs2($(".js-num-all .js-tab-list"));
    tabs2($(".bank li"));
    tabs3($(".standard-tit .flex .tab-father"),$(".tabs-three"));

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

    //底部横线切换
    $(".standard-tit .flex .tab-father").click(function(){
        $(".active-blue").toggleClass("enable");
    });

})
