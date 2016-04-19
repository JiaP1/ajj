/**
 * Created by jiahaitong on 2016/3/9.
 */
$(document).ready(function() {

    $("#leftsead a").hover(function() {
        if ($(this).prop("className") == "tooltip") {
            $(this).children("img.hides").show();
        } else {
            $(this).children("div.hides").show();
            $(this).children("img.shows").hide();
            $(this).children("div.hides").animate({ marginRight: '0px' }, '0');
        }
    }, function() {
        if ($(this).prop("className") == "tooltip") {
            $(this).children("img.hides").hide();
        } else {
            $(this).children("div.hides").animate({ marginRight: '-163px' }, 0, function() { $(this).hide(); $(this).next("img.shows").show(); });
        }
    });

    $("#top_btn").click(function() { if (scroll == "off") return; $("html,body").animate({ scrollTop: 0 }, 600); });

    //右侧导航 - 二维码
    $(".tooltip").mouseover(function() {
        $(this).children(".wm2").show();
    })
    $(".tooltip").mouseout(function() {
        $(this).children(".wm2").hide();
    });
});